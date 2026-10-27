# QUANG ANH SKODA - Auto Deploy Script for Windows Server 2022
$ErrorActionPreference = "Continue"

# 1. Kiem tra quyen Administrator
$isAdmin = ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
if (-not $isAdmin) {
    Write-Host "[INFO] Dang yeu cau quyen Administrator de cau hinh VPS..." -ForegroundColor Yellow
    Start-Process powershell.exe -ArgumentList "-NoProfile -ExecutionPolicy Bypass -File `"$PSCommandPath`"" -Verb RunAs
    exit
}

Set-Location $PSScriptRoot
$Host.UI.RawUI.WindowTitle = "QUANG ANH SKODA - Auto Setup & Deploy"

Write-Host "=====================================================" -ForegroundColor Cyan
Write-Host "       QUANG ANH SKODA - AUTO SETUP & DEPLOY VPS" -ForegroundColor Cyan
Write-Host "=====================================================" -ForegroundColor Cyan
Write-Host ""

# 2. Kiem tra Node.js
Write-Host "[BUOC 1/5] Kiem tra Node.js..." -ForegroundColor Yellow
$nodeOk = $false
try {
    $ver = & node -v 2>$null
    if ($ver) {
        $nodeOk = $true
        Write-Host "[OK] Da co Node.js: $ver" -ForegroundColor Green
    }
} catch {}

if (-not $nodeOk) {
    Write-Host "[!] Chua co Node.js tren VPS. Dang tu dong tai Node.js v20 LTS tu nodejs.org..." -ForegroundColor Yellow
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
    $msiPath = "$env:TEMP\node_setup.msi"
    try {
        Invoke-WebRequest -Uri "https://nodejs.org/dist/v20.18.0/node-v20.18.0-x64.msi" -OutFile $msiPath
        Write-Host "[INFO] Dang cai dat Node.js v20 (vui long cho khoang 1 phut)..." -ForegroundColor Yellow
        Start-Process msiexec.exe -ArgumentList "/i `"$msiPath`" /qn /norestart" -Wait
        Remove-Item $msiPath -Force -ErrorAction SilentlyContinue

        $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
        Write-Host "[OK] Da cai dat Node.js thanh cong!" -ForegroundColor Green
    } catch {
        Write-Host "[LOI] Khong the tu dong tai Node.js. Vui long tai thu cong tu https://nodejs.org" -ForegroundColor Red
        Read-Host "Nhan Enter de thoat..."
        exit 1
    }
}

# 3. Cai dat thu vien du an (npm install)
Write-Host ""
Write-Host "[BUOC 2/5] Dang cai dat thu vien du an (npm install)..." -ForegroundColor Yellow
cmd.exe /c "npm install"
if ($LASTEXITCODE -ne 0) {
    Write-Host "[LOI] npm install that bai. Vui long kiem tra ket noi mang!" -ForegroundColor Red
    Read-Host "Nhan Enter de thoat..."
    exit $LASTEXITCODE
}
Write-Host "[OK] Da cai dat xong cac thu vien!" -ForegroundColor Green

# 4. Build du an Next.js (npm run build)
Write-Host ""
Write-Host "[BUOC 3/5] Dang bien dich du an (npm run build)..." -ForegroundColor Yellow
cmd.exe /c "npm run build"
if ($LASTEXITCODE -ne 0) {
    Write-Host "[LOI] npm run build that bai!" -ForegroundColor Red
    Read-Host "Nhan Enter de thoat..."
    exit $LASTEXITCODE
}
Write-Host "[OK] Bien dich Next.js thanh cong!" -ForegroundColor Green

# 5. Mo cong Windows Firewall
Write-Host ""
Write-Host "[BUOC 4/5] Dang cau hinh Tuong lua (Firewall) mo cong 80 va 3000..." -ForegroundColor Yellow
try {
    Remove-NetFirewallRule -DisplayName "CarWeb_Port_80" -ErrorAction SilentlyContinue
    New-NetFirewallRule -DisplayName "CarWeb_Port_80" -Direction Inbound -LocalPort 80 -Protocol TCP -Action Allow | Out-Null
    Remove-NetFirewallRule -DisplayName "CarWeb_Port_3000" -ErrorAction SilentlyContinue
    New-NetFirewallRule -DisplayName "CarWeb_Port_3000" -Direction Inbound -LocalPort 3000 -Protocol TCP -Action Allow | Out-Null
    Write-Host "[OK] Da mo cong 80 va 3000 tren Windows Firewall!" -ForegroundColor Green
} catch {
    Write-Host "[!] Khong the dat firewall tu dong, ban co the mo thu cong neu can." -ForegroundColor Yellow
}

# 6. Khoi chay bang PM2
Write-Host ""
Write-Host "[BUOC 5/5] Dang cau hinh PM2 chay ngam 24/7..." -ForegroundColor Yellow
cmd.exe /c "npm install -g pm2 pm2-windows-startup --silent"
cmd.exe /c "pm2-startup install 2>nul"

$port = 80
$port80Used = Get-NetTCPConnection -LocalPort 80 -State Listen -ErrorAction SilentlyContinue
if ($port80Used) {
    Write-Host "[THONG BAO] Cong 80 dang ban (co the do IIS dang chay). Website se chay o cong 3000!" -ForegroundColor Yellow
    $port = 3000
}

cmd.exe /c "pm2 delete carweb 2>nul"
cmd.exe /c "pm2 start node_modules/next/dist/bin/next --name carweb -- start -p $port"
cmd.exe /c "pm2 save"

Write-Host ""
cmd.exe /c "pm2 status"

$vpsIp = "127.0.0.1"
try {
    $ipObj = Get-NetIPAddress -AddressFamily IPv4 | Where-Object { $_.InterfaceAlias -notlike '*Loopback*' -and $_.IPAddress -notlike '169.254*' } | Select-Object -First 1
    if ($ipObj) { $vpsIp = $ipObj.IPAddress }
} catch {}

Write-Host ""
Write-Host "=====================================================" -ForegroundColor Green
Write-Host "         WEBSITE DA HOAT DONG 24/7 TREN VPS!" -ForegroundColor Green
Write-Host "=====================================================" -ForegroundColor Green
Write-Host " - Xem tren VPS:           http://localhost:$port" -ForegroundColor Cyan
Write-Host " - Truy cap tu ben ngoai:  http://$($vpsIp):$port" -ForegroundColor Cyan
if ($port -eq 80) {
    Write-Host " - Hoac vao truc tiep:     http://$($vpsIp)" -ForegroundColor Cyan
}
Write-Host ""
Write-Host "Website dang chay ngam 24/7 (dong Remote Desktop van hoat dong)." -ForegroundColor Gray
Write-Host "=====================================================" -ForegroundColor Green
Write-Host ""
Read-Host "Nhan phim Enter de hoan tat..."
