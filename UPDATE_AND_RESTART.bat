@echo off
chcp 65001 >nul
title QUANG ANH SKODA - CAP NHAT VA KHOI DONG LAI

set "PATH=%ProgramFiles%\nodejs;%APPDATA%\npm;%PATH%"

echo =====================================================================
echo       QUANG ANH SKODA - CAP NHAT PHIEN BAN MOI (GIT PULL)
echo =====================================================================
echo.

cd /d "%~dp0"

echo [1/3] Dang keo code moi nhat ve (git pull)...
git pull
if %errorLevel% neq 0 (
    echo [!] Khong the git pull hoac khong co ket noi git. Dang tiep tuc build...
)

echo.
echo [2/3] Dang bien dich lai website (npm run build)...
call npm run build
if %errorLevel% neq 0 (
    echo [X] Build that bai. Vui long kiem tra lai code.
    pause
    exit /b %errorLevel%
)

echo.
echo [3/3] Dang khoi dong lai website tren PM2...
call pm2 restart carweb || call pm2 start ecosystem.config.js
call pm2 status

echo.
echo =====================================================================
echo                CAP NHAT THANH CONG!
echo =====================================================================
echo.
pause