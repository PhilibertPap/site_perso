@echo off
chcp 65001 >nul
echo ============================================
echo OPTIMISATION MANUELLE DES IMAGES
echo ============================================
echo.
echo Ce script te guide pour optimiser les images de ton portfolio.
echo Utilise TinyPNG (gratuit) pour compresser sans perte de qualité.
echo.
echo 1. Ouvre ton navigateur et va sur : https://tinypng.com
echo 2. Glisse-dépose ces images dans la zone :
echo.
echo IMAGES PRIORITAIRES (gain : 70-80%%):
echo -------------------------------------
echo images/profile/photo.jpeg          (actuellement: ~133 Ko → cible: <30 Ko)
echo images/hobbies/concert_chorale.jpeg (actuellement: ~140 Ko → cible: <40 Ko)
echo images/hobbies/football.jpeg        (actuellement: ~198 Ko → cible: <50 Ko)
echo images/hobbies/orgue.jpeg           (actuellement: ~187 Ko → cible: <50 Ko)
echo images/hobbies/scout.jpeg          (actuellement: ~100 Ko → cible: <30 Ko)
echo images/hobbies/voile_scout.jpeg    (actuellement: ~181 Ko → cible: <50 Ko)
echo.
echo 3. Télécharge les images optimisées
echo 4. Remplace les originales par les versions optimisées
echo.
echo AUTRES IMAGES (si tu as le temps):
echo -------------------------------------
echo documents/voilier/*.png    (25-45 Ko → <10 Ko chacun)
echo documents/perdrix/*.png    (30-200 Ko → <20 Ko chacun)
echo documents/exp/*.png       (16-24 Ko → <8 Ko chacun)
echo.
echo ASTUCE : Tu peux aussi utiliser Squoosh (https://squoosh.app) pour convertir en WebP
echo.
echo ============================================
pause
