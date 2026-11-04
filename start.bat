@echo off
cd /d "%~dp0"
echo Starting ClothTravel prototype...
start "ClothTravel Server" cmd /c "python -m http.server 4173 -d public"
timeout /t 2 /nobreak >nul
start "" http://127.0.0.1:4173
