# Portfolio — Philibert Pappens

Site portfolio personnel, accessible à [philibert.pappens.fr](https://philibert.pappens.fr) (ou équivalent).

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
├── css/
│   ├── index.css            # Tous les styles custom (variables, dark mode, composants)
│   └── bootstrap.min.css    # Bootstrap (ne pas modifier)
├── js/
│   ├── app.js               # Routing SPA, UI_STRINGS (i18n), fonctions d'init
│   ├── data.js              # Contenu du portfolio (projets, expériences, cours, intérêts)
│   ├── mustache.min.js
│   ├── bootstrap.bundle.min.js
│   └── jquery-3.7.1.min.js
├── templates/               # Fragments HTML rendus par Mustache
│   ├── accueil.tpl.html
│   ├── projets.tpl.html
│   ├── experiences.tpl.html
│   ├── hobbies.tpl.html
│   ├── cours.tpl.html
│   ├── contact.tpl.html
│   └── cv.tpl.html
├── documents/               # PDF et images de projets
└── images/                  # Photos de profil et hobbies
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
  carousel: { images: [{ src: "documents/mon-projet/img.png", alt: "…", description: "…" }] }
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
<form action="https://formspree.io/f/VOTRE_ID" ...>
```

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
