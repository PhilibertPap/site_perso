#!/usr/bin/env bash
# Compile les CV FR et EN puis les copie dans ../documents/ (utilisés par le site).
set -e
cd "$(dirname "$0")"
mkdir -p build
for L in fr en; do
    pdflatex -interaction=nonstopmode -halt-on-error -output-directory=build "cv_$L.tex" >/dev/null \
        || { echo "[ERREUR] cv_$L.tex : voir build/cv_$L.log"; exit 1; }
    echo "[OK] build/cv_$L.pdf"
done
cp build/cv_fr.pdf ../documents/cv.pdf
cp build/cv_en.pdf ../documents/cv_en.pdf
echo "CV copiés dans documents/ (cv.pdf = FR, cv_en.pdf = EN)"
