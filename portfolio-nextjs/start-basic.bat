@echo off
echo 🚀 Starting Nishchal's Basic Portfolio...
echo ========================================

:: Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    pause
    exit /b 1
)

echo ✅ Node.js detected
node -v

:: Install dependencies
echo 📦 Installing dependencies...
call npm install

if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo ✅ Dependencies installed successfully!

:: Start development server
echo 🔥 Starting development server...
echo 📱 Your basic portfolio will be available at: http://localhost:3000
echo ✨ Current features:
echo    - Responsive design
echo    - Clean modern UI
echo    - Contact form
echo    - Professional layout
echo.
echo 🎯 Next steps after this works:
echo    - Add animations with Framer Motion
echo    - Add scroll effects
echo    - Add custom cursor
echo    - Add more sections
echo.
echo Press Ctrl+C to stop the server
echo ========================================

call npm run dev
