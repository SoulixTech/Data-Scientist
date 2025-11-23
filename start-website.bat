@echo off
echo ========================================
echo   Data Scientist Group - Website
echo ========================================
echo.

cd /d "%~dp0website"

echo Installing dependencies...
call npm install
echo.

echo Starting development server...
echo Website will be available at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev

pause
