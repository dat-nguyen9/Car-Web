@echo off
chcp 65001 >nul
setlocal EnableDelayedExpansion
cd /d "%~dp0"
title QUANG ANH SKODA - AUTO SETUP VA DEPLOY VPS

set "PATH=%ProgramFiles%\nodejs;%APPDATA%\npm;%PATH%"

echo =====================================================================
echo       QUANG ANH SKODA - AUTO SETUP VA DEPLOY CHO VPS
echo =====================================================================
echo.

:: 1. Kiem tra quyen Administrator
net session >nul 2>&1
if %errorlevel% neq 0 (
    if "%1"=="admin" (
        echo [LOI] Khong the lay quyen Administrator. Vui long click chuot phai vao file va chon 'Run as administrator'!
        echo.
        pause
        exit /b 1
    )
    echo [INFO] Dang mo lai voi quyen Administrator de cau hinh tuong lua va dich vu...
    powershell -NoProfile -ExecutionPolicy Bypass -Command "Start-Process cmd.exe -WorkingDirectory '%~dp0.' -ArgumentList '/k \"\"%~f0\"\" admin' -Verb RunAs"
    exit /b
)

echo [OK] Da xac nhan quyen Administrator. Bat dau thiet lap...
echo.

:: 2. Kiem tra Node.js
echo [BUOC 1/5] Kiem tra Node.js...
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo [!] Chua tim thay Node.js. Dang tu dong tai Node.js v20 LTS tu nodejs.org...
    if exist "%SystemRoot%\System32\curl.exe" (
        curl.exe -L -o node_setup.msi https://nodejs.org/dist/v20.18.0/node-v20.18.0-x64.msi
    ) else (
        powershell -NoProfile -ExecutionPolicy Bypass -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; (New-Object Net.WebClient).DownloadFile('https://nodejs.org/dist/v20.18.0/node-v20.18.0-x64.msi', 'node_setup.msi')"
    )
    if not exist "node_setup.msi" (
        echo [LOI] Khong the tai bo cai Node.js. Vui long tai thu cong tu https://nodejs.org
        echo.
        pause
        exit /b 1
    )
    echo [INFO] Dang cai dat Node.js v20 - vui long cho khoang 1-2 phut...
    start /wait msiexec /i node_setup.msi /qn /norestart
    del /f /q node_setup.msi >nul 2>&1
    set "PATH=%ProgramFiles%\nodejs;%APPDATA%\npm;%PATH%"
    echo [OK] Da cai dat xong Node.js!
)

call node -v >nul 2>&1
if %errorlevel% neq 0 (
    set "PATH=%ProgramFiles%\nodejs;%APPDATA%\npm;%PATH%"
)
echo Phien ban Node:
call node -v
echo Phien ban NPM:
call npm -v

:: 3. Cai dat thu vien du an
echo.
echo [BUOC 2/5] Dang cai dat thu vien du an (npm install)...
call npm install
if %errorlevel% neq 0 (
    echo [LOI] npm install that bai. Vui long kiem tra ket noi mang.
    echo.
    pause
    exit /b %errorlevel%
)
echo [OK] Da cai dat xong thu vien!

:: 4. Build du an Next.js
echo.
echo [BUOC 3/5] Dang bien dich du an (npm run build)...
call npm run build
if %errorlevel% neq 0 (
    echo [LOI] Bien dich Next.js that bai!
    echo.
    pause
    exit /b %errorlevel%
)
echo [OK] Bien dich Next.js thanh cong!

:: 5. Mo cong Windows Firewall
echo.
echo [BUOC 4/5] Dang cau hinh Windows Firewall mo cong 80 va 3000...
netsh advfirewall firewall delete rule name="CarWeb_Port_80" >nul 2>&1
netsh advfirewall firewall add rule name="CarWeb_Port_80" dir=in action=allow protocol=TCP localport=80 >nul 2>&1
netsh advfirewall firewall delete rule name="CarWeb_Port_3000" >nul 2>&1
netsh advfirewall firewall add rule name="CarWeb_Port_3000" dir=in action=allow protocol=TCP localport=3000 >nul 2>&1
echo [OK] Da mo cong 80 va 3000 tren Tuong lua VPS!

:: 6. Khoi chay bang PM2
echo.
echo [BUOC 5/5] Dang khoi chay website chay ngam 24/7 bang PM2...
where pm2 >nul 2>&1
if %errorlevel% neq 0 (
    call npm install -g pm2 pm2-windows-startup --silent
    set "PATH=%ProgramFiles%\nodejs;%APPDATA%\npm;%PATH%"
    call pm2-startup install >nul 2>&1
)

set "APP_PORT=80"
netstat -ano | findstr /R /C:":80 .*LISTENING" >nul 2>&1
if %errorlevel% equ 0 (
    echo [THONG BAO] Cong 80 dang ban. He thong tu dong chuyen sang cong 3000.
    set "APP_PORT=3000"
)

set "PORT=!APP_PORT!"
call pm2 delete carweb >nul 2>&1
call pm2 start ecosystem.config.js --update-env
call pm2 save >nul 2>&1

echo.
call pm2 status

set "VPS_IP=localhost"
for /f "tokens=*" %%a in ('powershell -NoProfile -Command "(Get-NetIPAddress -AddressFamily IPv4 -InterfaceAlias 'Ethernet*').IPAddress"') do set "VPS_IP=%%a"
if "!VPS_IP!"=="localhost" (
    for /f "tokens=*" %%a in ('powershell -NoProfile -Command "(Get-NetIPAddress -AddressFamily IPv4 | Where-Object IPAddress -ne '127.0.0.1' | Select-Object -ExpandProperty IPAddress -First 1)"') do set "VPS_IP=%%a"
)

echo.
echo =====================================================================
echo             XONG! WEBSITE DA HOAT DONG 24/7 TREN VPS!
echo =====================================================================
echo.
echo  - Xem tren VPS:           http://localhost:!APP_PORT!
echo  - Truy cap tu ben ngoai:  http://!VPS_IP!:!APP_PORT!
if "!APP_PORT!"=="80" (
    echo  - Hoac vao truc tiep:     http://!VPS_IP!
)
echo.
echo  * Website da duoc cai dat chay ngam 24/7 qua PM2.
echo  * Tu dong bat lai khi VPS khoi dong lai.
echo =====================================================================
echo.
pause
