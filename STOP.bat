@echo off
chcp 65001 >nul
title QUANG ANH SKODA - DUNG WEBSITE

set "PATH=%ProgramFiles%\nodejs;%APPDATA%\npm;%PATH%"

cd /d "%~dp0"
echo Dang dung tien trinh website...
call pm2 stop carweb
call pm2 status
echo.
echo Website da duoc dung.
pause