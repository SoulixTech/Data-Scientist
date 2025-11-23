@echo off
echo ========================================
echo   Data Scientist Group - Mobile App
echo ========================================
echo.

cd /d "%~dp0mobile-app"

echo Installing dependencies...
call npm install
echo.

echo Starting Expo development server...
echo Scan QR code with Expo Go app on your phone
echo.

call npx expo start

pause
