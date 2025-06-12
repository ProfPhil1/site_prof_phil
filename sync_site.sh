#!/bin/bash

cd "$(dirname "$0")"

echo "=== Git Synchronisation ==="
git add .
git commit -m "Mise à jour du site"
git push
echo "=== Terminé ==="