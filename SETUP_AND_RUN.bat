@echo off
chcp 65001 >nul
setlocal EnableDelayedExpansion
title QUANG ANH SKODA - TỰ ĐỘNG CÀI ĐẶT & KHỞI CHẠY VPS

echo =====================================================================
echo       QUANG ANH SKODA - HỆ THỐNG AUTO SETUP & DEPLOY VPS
echo =====================================================================
echo.

:: 1. Kiểm tra và yêu cầu quyền Administrator
net session >nul 2>&1
if %errorLevel% neq 0 (
    echo [INFO] Đang yêu cầu quyền Administrator để cấu hình tường lửa và dịch vụ...
    powershell -Command "Start-Process cmd -ArgumentList '/c \"\"%~f0\"\"' -Verb RunAs"
    exit /b
)

cd /d "%~dp0"

:: 2. Kiểm tra môi trường Node.js
echo [BƯỚC 1/5] Kiểm tra môi trường Node.js...
where node >nul 2>&1
if %errorLevel% neq 0 (
    echo [!] Chưa tìm thấy Node.js trên máy. Đang tự động tải Node.js v20 LTS...
    powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; (New-Object Net.WebClient).DownloadFile('https://nodejs.org/dist/v20.18.0/node-v20.18.0-x64.msi', 'nodejs_installer.msi')"
    echo [INFO] Đang cài đặt Node.js v20 vào VPS (vui lòng chờ khoảng 1 phút)...
    msiexec /i nodejs_installer.msi /qn /norestart
    del nodejs_installer.msi >nul 2>&1
    set "PATH=%ProgramFiles%\nodejs;%APPDATA%\npm;%PATH%"
    echo [✓] Đã cài đặt Node.js thành công!
) else (
    for /f "tokens=*" %%v in ('node -v') do echo [✓] Node.js đã có sẵn: %%v
)

:: 3. Cài đặt các gói thư viện (npm install)
echo.
echo [BƯỚC 2/5] Đang cài đặt thư viện dự án (npm install)...
call npm install --loglevel=error
if %errorLevel% neq 0 (
    echo [X] Cài đặt thư viện thất bại. Vui lòng kiểm tra kết nối mạng.
    pause
    exit /b %errorLevel%
)
echo [✓] Đã cài đặt xong tất cả các gói thư viện!

:: 4. Biên dịch dự án Next.js (npm run build)
echo.
echo [BƯỚC 3/5] Đang biên dịch dự án Next.js (npm run build)...
call npm run build
if %errorLevel% neq 0 (
    echo [X] Biên dịch dự án thất bại.
    pause
    exit /b %errorLevel%
)
echo [✓] Biên dịch dự án thành công!

:: 5. Mở cổng tường lửa Windows Firewall
echo.
echo [BƯỚC 4/5] Đang mở cổng tường lửa Windows Firewall (Cổng 80 và 3000)...
netsh advfirewall firewall delete rule name="NextJS_CarWeb_80" >nul 2>&1
netsh advfirewall firewall add rule name="NextJS_CarWeb_80" dir=in action=allow protocol=TCP localport=80 >nul 2>&1
netsh advfirewall firewall delete rule name="NextJS_CarWeb_3000" >nul 2>&1
netsh advfirewall firewall add rule name="NextJS_CarWeb_3000" dir=in action=allow protocol=TCP localport=3000 >nul 2>&1
echo [✓] Đã mở cổng tường lửa sẵn sàng đón khách truy cập!

:: 6. Cấu hình PM2 chạy ngầm 24/7
echo.
echo [BƯỚC 5/5] Đang cấu hình website chạy ngầm 24/7 với PM2...
call npm install -g pm2 pm2-windows-startup --silent >nul 2>&1
call pm2-startup install >nul 2>&1

set "APP_PORT=80"
netstat -ano | findstr /R /C:":80 .*LISTENING" >nul 2>&1
if %errorLevel% equ 0 (
    echo [!] Cổng 80 đang bận (ví dụ: IIS đang chạy). Hệ thống tự chuyển sang cổng 3000.
    set "APP_PORT=3000"
)

call pm2 delete carweb >nul 2>&1
call pm2 start node_modules/next/dist/bin/next --name "carweb" -- start -p !APP_PORT!
call pm2 save >nul 2>&1

:: Lấy địa chỉ IP của VPS
for /f "tokens=*" %%a in ('powershell -Command "(Get-NetIPAddress -AddressFamily IPv4 | Where-Object { $_.InterfaceAlias -notlike '*Loopback*' -and $_.IPAddress -notlike '169.254*' } | Select-Object -First 1).IPAddress"') do set "VPS_IP=%%a"

echo.
echo =====================================================================
echo                CHÚC MỪNG! WEBSITE ĐÃ CHẠY THÀNH CÔNG!
echo =====================================================================
echo.
echo  - Địa chỉ xem trên VPS:       http://localhost:!APP_PORT!
echo  - Địa chỉ truy cập từ xa:     http://!VPS_IP!:!APP_PORT!
if "!APP_PORT!"=="80" (
    echo  - Hoặc vào trực tiếp:         http://!VPS_IP!  (không cần gõ :80)
)
echo.
echo  * Website đã được cấu hình chạy ngầm 24/7 (tắt Remote Desktop web vẫn chạy).
echo  * Tự động khởi động lại khi VPS reboot.
echo =====================================================================
echo.
pause
