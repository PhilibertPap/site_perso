@echo off
REM Compile les CV FR et EN puis les copie dans ..\documents\ (utilisés par le site).
REM Prérequis : MiKTeX ou TeX Live (pdflatex dans le PATH).
cd /d "%~dp0"
if not exist build mkdir build
for %%L in (fr en) do (
    pdflatex -interaction=nonstopmode -halt-on-error -output-directory=build cv_%%L.tex >nul
    if errorlevel 1 (
        echo [ERREUR] cv_%%L.tex : voir build\cv_%%L.log
        pause
        exit /b 1
    )
    echo [OK] build\cv_%%L.pdf
)
copy /Y build\cv_fr.pdf ..\documents\cv.pdf >nul
copy /Y build\cv_en.pdf ..\documents\cv_en.pdf >nul
echo CV copies dans documents\ (cv.pdf = FR, cv_en.pdf = EN)
pause
