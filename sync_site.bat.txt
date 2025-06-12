@echo off
cd /d %~dp0

echo === Git Synchronisation ===
git add .
git commit -m "Mise à jour du site"
git push
echo === Terminé ===
pause
