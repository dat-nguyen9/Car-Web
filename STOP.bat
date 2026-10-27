@echo off
chcp 65001 >nul
title QUANG ANH SKODA - DUNG WEBSITE

cd /d "%~dp0"
echo Dang dung tien trinh website...
call pm2 stop carweb
call pm2 status
echo Website da duoc dung.
pause
