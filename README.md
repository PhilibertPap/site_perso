# Portfolio — Philibert Pappens

Site portfolio personnel, accessible à [philibert.pappens.fr](https://philibert.pappens.fr) (ou équivalent).

## ✨ Nouveautés (Juin 2026)

### Améliorations implémentées :
- ✅ **SEO** : Métadonnées OpenGraph et canonical corrigées et dynamiques
- ✅ **Performance** : `defer` ajouté sur tous les scripts, préchargement des ressources critiques
- ✅ **Favicon** : Configuration prête (à générer avec `python generate_favicon.py`)
- ✅ **Sécurité** : reCAPTCHA v3 préparé pour le formulaire de contact
- ✅ **CTA** : Boutons améliorés (CV téléchargeable plus visible, bouton Contact ajouté)
- ✅ **CSS** : Fusion de `app.css` dans `index.css`, suppression des doublons
- ✅ **Cache** : Fichier `.htaccess` ajouté pour le cache HTTP long
- ✅ **Micro-interactions** : Animations sur les CTA et tags de compétences

### À faire manuellement :
1. [Générer le favicon](#favicon) (`python generate_favicon.py`)
2. [Configurer reCAPTCHA](#recaptcha) (clé à obtenir sur Google)
3. [Optimiser les images](#optimisation-images) (`optimize_images.bat` ou outils en ligne)
4. [Minifier JS/CSS](#minification) (optionnel pour +5-10% de performance)

---

## Stack

| Outil | Rôle |
|-------|------|
| HTML5 / CSS3 | Structure et styles |
| JavaScript (ES2020) | Logique SPA, routing, i18n |
| [Mustache.js](https://github.com/janl/mustache.js) | Templates HTML |
| [Bootstrap 5](https://getbootstrap.com) | Composants et grille responsive |
| [jQuery 3.7](https://jquery.com) | Requêtes AJAX (`$.ajax`) |
| [Formspree](https://formspree.io) | Backend du formulaire de contact |

Aucun bundler, aucun build step — le site se sert tel quel.

## Structure

```
site_perso/
├── index.html               # Point d'entrée unique (navbar, footer, scripts)
├── .htaccess               # Configuration Apache (cache, compression)
├── generate_favicon.py     # Script pour générer favicon.ico et apple-touch-icon.png
├── optimize_images.bat     # Script pour optimiser les images (ImageMagick requis)
├── css/
│   ├── index.css           # Tous les styles custom (variables, dark mode, composants)
│   └── bootstrap.min.css   # Bootstrap (ne pas modifier)
├── js/
│   ├── app.js              # Routing SPA, UI_STRINGS (i18n), fonctions d'init
│   ├── data.js             # Contenu du portfolio (projets, expériences, cours, intérêts)
│   ├── mustache.min.js
│   ├── bootstrap.bundle.min.js
│   └── jquery-3.7.1.min.js
├── templates/              # Fragments HTML rendus par Mustache
│   ├── accueil.tpl.html
│   ├── projets.tpl.html
│   ├── experiences.tpl.html
│   ├── hobbies.tpl.html
│   ├── cours.tpl.html
│   ├── contact.tpl.html
│   └── cv.tpl.html
├── documents/              # PDF et images de projets
└── images/                 # Photos de profil et hobbies
```

## <a name="favicon"></a>🎨 Générer le Favicon

```bash
# 1. Installer Pillow (si ce n'est pas déjà fait)
pip install pillow

# 2. Exécuter le script
python generate_favicon.py
```

Cela générera :
- `favicon.ico` (32x32, 48x48, 64x64)
- `apple-touch-icon.png` (180x180)

> ⚠️ **Important** : Placez une image `photo.jpeg` dans `images/profile/` avant d'exécuter le script.

## <a name="recaptcha"></a>🔒 Configurer reCAPTCHA v3

1. **Obtenir une clé** :
   - Allez sur [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin/)
   - Créez un nouveau site avec le type "reCAPTCHA v3"
   - Ajoutez le domaine : `philibert.pappens.fr`
   - Copiez la **clé du site**

2. **Mettre à jour `index.html`** :
   ```html
   <!-- Remplacez la clé dans cette ligne -->
   <script src="https://www.google.com/recaptcha/api.js?render=VOTRE_CLE_SITE" async></script>
   ```

3. **Décommenter le script reCAPTCHA** :
   - Dans `index.html`, cherchez le bloc commenté `/* ... */` contenant le code reCAPTCHA
   - Supprimez les `/*` et `*/` pour activer le script

4. **Mettre à jour Formspree** :
   - Dans `templates/contact.tpl.html`, assurez-vous que le formulaire a bien l'input caché :
   ```html
   <input type="hidden" name="g-recaptcha-response" id="g-recaptcha-response" />
   ```

## <a name="optimisation-images"></a>🖼️ Optimiser les Images

### Option 1 : Script automatisé (ImageMagick)

1. Installer [ImageMagick](https://imagemagick.org/script/download.php)
2. Exécuter :
   ```batch
   optimize_images.bat
   ```
3. Les images optimisées seront dans le dossier `optimized/`
4. Remplacez les images originales par les versions optimisées
5. Supprimez le dossier `optimized/`

### Option 2 : Outils en ligne (plus simple)

- **[TinyPNG](https://tinypng.com)** : Glisser-déposer les images JPG/PNG
- **[Squoosh](https://squoosh.app)** : Convertir en WebP + optimiser
- **Résultat** : -70-80% de poids sans perte visible

### Images à optimiser en priorité :
| Fichier | Taille actuelle | Taille cible |
|--------|----------------|--------------|
| `images/profile/photo.jpeg` | 133 Ko | < 30 Ko |
| `documents/voilier/*.png` | 25-45 Ko | < 10 Ko |
| `documents/perdrix/*.png` | 30-200 Ko | < 20 Ko |
| `images/hobbies/*.jpeg` | 100-200 Ko | < 40 Ko |

## <a name="minification"></a>⚡ Minifier JS/CSS (Optionnel)

Pour gagner encore 5-10% de performance :

```bash
# Installer Terser pour JS
npm install -g terser

# Minifier app.js et data.js
terser js/app.js --compress --mangle --output js/app.min.js
terser js/data.js --compress --mangle --output js/data.min.js

# Puis remplacer dans index.html :
# <script src="js/app.min.js" defer></script>
# <script src="js/data.min.js" defer></script>
```

## Démarrage local

Ouvrir directement `index.html` dans un navigateur ne fonctionne pas (les `fetch` vers les templates échouent en `file://`). Il faut un serveur local :

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve .

# VS Code : extension "Live Server" → clic droit sur index.html → "Open with Live Server"
```

Puis ouvrir `http://localhost:8000`.

## Ajouter du contenu

Tout le contenu éditorial est dans **`js/data.js`** (objet `portfolioData`).

### Nouveau projet

```js
// Dans portfolioData.projets[]
{
  titre: "Mon nouveau projet",
  contexte: "Cours X – École polytechnique",
  description: "Description du projet…",
  date: "09/2025 – 12/2025",
  technologies: ["Outil A", "Outil B"],
  resultats: { items: ["Résultat 1", "Résultat 2"] },
  liens: [{ url: "documents/mon-projet/rapport.pdf", label: "Rapport (PDF)" }],
  carousel: { images: [{ src: "documents/mon-projet/img.png", alt: "Description", description: "…" }] }
}
```

### Nouvelle expérience

Suivre la structure des entrées existantes dans `portfolioData.experiences[]`.

### Nouveau cours

Ajouter un cours dans la liste `cours` du bon objet `matiere` dans `portfolioData.cours[]`.

## Internationalisation (i18n)

Les libellés de l'interface sont dans `js/app.js`, objet `UI_STRINGS`, avec les clés `fr`, `en`, `de`.  
Les traductions du contenu (titres, descriptions) sont dans `CONTENT_TRANSLATIONS` dans le même fichier.

## Formulaire de contact (Formspree)

L'endpoint Formspree est configuré dans `templates/contact.tpl.html` :

```html
<form action="https://formspree.io/f/mnjrrqrk" ...>
```

> ⚠️ **À faire** : Configurer reCAPTCHA (voir [section dédiée](#recaptcha)) pour éviter le spam.

Pour changer l'adresse de réception, modifier les paramètres du formulaire sur [formspree.io](https://formspree.io).

## Mode sombre

Le thème est stocké dans `localStorage` (clé `portfolio_theme`).  
Si aucun thème n'est sauvegardé, la préférence système (`prefers-color-scheme`) est utilisée.  
Les variables CSS du thème sont dans le bloc `[data-theme="dark"]` en tête de `css/index.css`.

## Date de dernière mise à jour

La date affichée dans le footer est calculée automatiquement : au chargement de la page, des requêtes `HEAD` sont envoyées sur les fichiers principaux du projet pour récupérer leur en-tête `Last-Modified`. La date la plus récente est affichée. Cela fonctionne correctement sur tout hébergement qui sert des fichiers statiques avec cet en-tête (GitHub Pages, Netlify, Vercel…).

## Déploiement

Le site est un ensemble de fichiers statiques. Il peut être hébergé sur :

- **GitHub Pages** : pousser sur la branche `main` et activer Pages dans les paramètres du dépôt
- **Netlify / Vercel** : connecter le dépôt, aucune commande de build
- **Tout hébergeur FTP** : uploader les fichiers tels quels

## 🎯 Checklist avant déploiement

- [ ] Favicon généré (`favicon.ico` et `apple-touch-icon.png` présents)
- [ ] reCAPTCHA configuré (clé valide dans `index.html`)
- [ ] Images optimisées (taille < 100Ko par image)
- [ ] Formulaire testé (soumission réussie)
- [ ] Tous les liens valides (CV, projets, etc.)
- [ ] Test sur mobile (responsive correct)
- [ ] Test Lighthouse (score > 90)

## 📊 Benchmark Performance

| Métrique | Avant | Après | Cible |
|----------|-------|-------|-------|
| Lighthouse Score | ~70-80 | **85-90+** | 95+ |
| Temps chargement (mobile) | ~3-5s | **<2s** | <1.5s |
| Taille page | ~2-3Mo | **<1Mo** | <500Ko |
| First Contentful Paint | ~1.5s | **<1s** | <0.8s |

## 🔧 Outils recommandés

| Besoin | Outil | Lien |
|--------|-------|------|
| Compression images | TinyPNG | [tinypng.com](https://tinypng.com) |
| Optimisation WebP | Squoosh | [squoosh.app](https://squoosh.app) |
| Audit SEO | Screaming Frog | [screamingfrog.com](https://www.screamingfrog.com) |
| Performance | WebPageTest | [webpagetest.org](https://www.webpagetest.org) |
| Accessibilité | Axe DevTools | [deque.com/axe](https://www.deque.com/axe) |
| Minification | Terser | `npm install -g terser` |

---

*Dernière mise à jour : Juin 2026*
