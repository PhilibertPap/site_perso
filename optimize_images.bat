@echo off
chcp 65001 >nul
:: Script pour optimiser les images du portfolio avec ImageMagick
:: Télécharger ImageMagick : https://imagemagick.org/script/download.php
:: Ou utiliser Squoosh CLI : npm install -g @squoosh/cli

SETLOCAL

:: Vérifier si ImageMagick est installé
where magick >nul 2>&1
IF %ERRORLEVEL% EQU 0 (
    echo ✅ ImageMagick est installé
    GOTO :OPTIMIZE_WITH_IM
) ELSE (
    echo ❌ ImageMagick non trouvé
    GOTO :INSTALL_OPTIONS
)

:INSTALL_OPTIONS
echo.
echo ============================================
echo Options pour optimiser les images :
echo ============================================
echo.
echo 1. Installer ImageMagick (recommandé) :
echo    - Télécharger depuis : https://imagemagick.org/script/download.php
    echo    - Cocher "Add application directory to your system path"
    echo.
echo 2. Utiliser Squoosh CLI (Node.js requis) :
echo    - npm install -g @squoosh/cli
    echo    - Puis exécuter : squoosh-cli --help
    echo.
echo 3. Optimiser manuellement avec :
echo    - https://tinypng.com (glisser-déposer)
echo    - https://squoosh.app (navigateur)
    echo.
GOTO :EOF

:OPTIMIZE_WITH_IM
echo.
echo 🔧 Optimisation des images avec ImageMagick...
echo.

:: Dossiers à traiter
SET "DIRS=images documents"

:: Pour chaque dossier
FOR %%D IN (%DIRS%) DO (
    echo 📁 Traitement du dossier : %%D
    
    :: Trouver toutes les images (JPG, PNG, JPEG)
    FOR /R %%D %%F IN (*.jpg *.jpeg *.png) DO (
        echo   🔄 %%F
        
        :: Créer le répertoire de sortie (même structure)
        SET "REL_PATH=%%~pF"
        SET "REL_PATH=!REL_PATH:\%~d0\%~p0=!"
        SET "OUT_DIR=optimized\!REL_PATH!"
        
        :: Créer le répertoire s'il n'existe pas
        IF NOT EXIST "!OUT_DIR!" MKDIR "!OUT_DIR!"
        
        :: Nom du fichier de sortie
        SET "OUT_FILE=!OUT_DIR!\%%~nF.optimized%%~xF"
        
        :: Optimiser selon le type
        IF /I "%%~xF" == ".jpg" (
            magick "%%F" -quality 85 -sampling-factor 4:2:0 "!OUT_FILE!"
        ) ELSE IF /I "%%~xF" == ".jpeg" (
            magick "%%F" -quality 85 -sampling-factor 4:2:0 "!OUT_FILE!"
        ) ELSE IF /I "%%~xF" == ".png" (
            magick "%%F" -quality 80 -compress fast "!OUT_FILE!"
        )
        
        echo     ✅ Optimisé : !OUT_FILE!
    )
)

echo.
echo ✅ Optimisation terminée !
echo Les images optimisées sont dans le dossier "optimized"
echo.
echo Pour les utiliser :
echo 1. Vérifiez la qualité des images dans "optimized"
echo 2. Remplacez les images originales par les versions optimisées
echo 3. Supprimez le dossier "optimized"

ENDLOCAL
