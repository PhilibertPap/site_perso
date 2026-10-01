# CV — sources LaTeX

- `cv_fr.tex`, `cv_en.tex` : contenu de chaque version
- `preamble.tex` : mise en page commune (marges, en-tête, styles) — modifier ici pour changer les deux CV à la fois

## Compiler

Windows : double-cliquer sur `build.bat` (ou `.\build.bat` dans un terminal).
Linux/macOS : `./build.sh`.

Le script compile les deux CV dans `build/` puis les copie dans `../documents/` :
- `documents/cv.pdf` → CV français (bouton du site en FR)
- `documents/cv_en.pdf` → CV anglais (bouton du site en EN et DE)

Prérequis : une distribution LaTeX avec `pdflatex` (MiKTeX ou TeX Live). Avec MiKTeX, les paquets manquants (fontawesome5, paracol…) s'installent automatiquement à la première compilation.

Ensuite : commit + push pour mettre le site à jour.
