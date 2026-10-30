@echo off
chcp 65001 >nul
title Public Web qua Internet - Cloudflare Tunnel
echo ============================================================
echo      QUANG ANH SKODA - PUBLIC WEBSITE RA INTERNET
echo ============================================================
echo.
echo Đang kết nối Cloudflare Tunnel...
echo Khi kết nối thành công, bạn sẽ thấy đường link dạng:
echo    https://xxxx-xxxx.trycloudflare.com
echo.
echo Hãy copy link đó gửi cho người khác hoặc mở trên điện thoại!
echo (Nhấn giữ cửa sổ này để duy trì kết nối)
echo ============================================================
echo.

"%~dp0cloudflared.exe" tunnel --url http://localhost:3000
pause
