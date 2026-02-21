const routes = {
  accueil: "templates/accueil.tpl.html",
  projets: "templates/projets.tpl.html",
  cv: "templates/cv.tpl.html",
  hobbies: "templates/hobbies.tpl.html",
  cours: "templates/cours.tpl.html"
};

const DEFAULT_LANG = "fr";
const SUPPORTED_LANGS = ["fr", "en", "de"];
const LANG_STORAGE_KEY = "portfolio_lang";
const VIEW_MODE_STORAGE_KEY = "portfolio_view_mode";
const COURSE_VIEW_MODE_STORAGE_KEY = "portfolio_course_view_mode";
const MOBILE_VIEW_MAX_WIDTH = 991;
const EMAIL_ADDRESS = "philibert.pappens@gmail.com";
const LINKEDIN_URL = "https://linkedin.com/in/philibert-pappens-993468313";
const GITHUB_URL = "https://github.com/PhilibertPap";
const LAST_UPDATED_PATHS = [
  "index.html",
  "css/index.css",
  "js/app.js",
  "js/data.js",
  "templates/accueil.tpl.html",
  "templates/projets.tpl.html",
  "templates/cours.tpl.html",
  "templates/hobbies.tpl.html"
];

let latestUpdateDateCache = null;

const UI_STRINGS = {
  fr: {
    page_title: "Philibert Pappens - Portfolio",
    nav: {
      brand: "Philibert Pappens - Portfolio",
      home: "Accueil",
      projects: "Projets",
      hobbies: "Centres d'intérêt",
      courses: "Cours suivis",
      skip_content: "Aller au contenu",
      main_aria: "Navigation principale",
      language_aria: "Sélecteur de langue",
      menu_aria: "Ouvrir le menu"
    },
    words: { course_singular: "cours", course_plural: "cours", year_singular: "année", year_plural: "années" },
    accueil: {
      badge: "Élève-officier - École polytechnique",
      subtitle: "Études d'ingénierie en mécanique des structures et des matériaux. Passionné par le monde maritime.",
      skills: ["Culture pluridisciplinaire", "Curiosité intellectuelle", "Discipline personnelle", "Sens du détail et rigueur"],
      cta_projects: "Voir mes projets",
      cta_courses: "Cours suivis",
      cta_hobbies: "Centres d'intérêt",
      cta_cv: "Télécharger mon CV (PDF)",
      currently: "Actuellement",
      info_items: [
        { icon: "📚", text: "Élève en 3ème année à l'École polytechnique" },
        { icon: "⚙️", text: "Étudiant en mécanique - matériaux et structures" },
        { icon: "⛵", text: "Attrait pour l'architecture navale et le monde maritime" }
      ]
    },
    projets: {
      title: "Projets",
      subtitle: "Sélection de mes principaux projets et réalisations",
      results_title: "Résultats clés",
      carousel_prev: "Image précédente",
      carousel_next: "Image suivante"
    },
    hobbies: { title: "Centres d'intérêt", subtitle: "Au-delà de l'ingénierie, je cultive des passions qui me définissent" },
    cours: {
      title: "Formations et cours",
      subtitle: "Cours suivis en classes préparatoires et à l'École polytechnique.",
      filter_label: "Filtrer par matière",
      search_label: "Rechercher un cours",
      search_placeholder: "Rechercher par titre ou mot-clé",
      search_clear: "Effacer",
      no_results: "Aucun cours ne correspond à cette recherche.",
      filter_aria: "Filtre des matières",
      filter_on_label: "Filtrer sur",
      all_label: "Toutes",
      open_visible: "Ouvrir visibles",
      close_visible: "Fermer visibles",
      reset_filters: "Réinitialiser filtres",
      view_label: "Mode d'affichage des cours",
      view_detailed: "Détaillé",
      view_compact: "Compact",
      showing_all: "Affichage: toutes les matières.",
      showing_selected_prefix: "Affichage: ",
      showing_selected_joiner: " + "
    },
    cv: { title: "Curriculum Vitae", placeholder: "CV à compléter (formation, expériences, compétences)." },
    footer: {
      title: "Philibert Pappens - Portfolio",
      subtitle: "École polytechnique • Lycée Sainte-Geneviève",
      updated_label: "Dernière mise à jour :",
      updated_value: "21 février 2026",
      link_home: "Accueil",
      link_projects: "Projets",
      link_courses: "Cours",
      link_hobbies: "Centres d'intérêt",
      contact_label: "Contact",
      contact_linkedin: "Profil LinkedIn",
      contact_github: "Profil GitHub",
      back_to_top: "Remonter",
      switch_to_desktop: "Version ordinateur",
      switch_to_mobile: "Version mobile"
    },
    seo: {
      description: "Portfolio de Philibert Pappens: projets, cours et centres d'intérêt en ingénierie, mécanique et sciences.",
      keywords: "Philibert Pappens, portfolio, École polytechnique, mécanique, structures, matériaux, projets, cours",
      og_locale: "fr_FR",
      page: {
        accueil: "Accueil - Philibert Pappens",
        projets: "Projets - Philibert Pappens",
        cours: "Cours - Philibert Pappens",
        hobbies: "Centres d'intérêt - Philibert Pappens"
      }
    },
    errors: { template_load: "Erreur de chargement du template." }
  },
  en: {
    page_title: "Philibert Pappens - Portfolio",
    nav: {
      brand: "Philibert Pappens - Portfolio",
      home: "Home",
      projects: "Projects",
      hobbies: "Interests",
      courses: "Courses",
      skip_content: "Skip to content",
      main_aria: "Main navigation",
      language_aria: "Language selector",
      menu_aria: "Open menu"
    },
    words: { course_singular: "course", course_plural: "courses", year_singular: "year", year_plural: "years" },
    accueil: {
      badge: "Officer cadet - École polytechnique",
      subtitle: "Engineering studies in structural and material mechanics. Passionate about maritime systems.",
      skills: ["Multidisciplinary culture", "Intellectual curiosity", "Personal discipline", "Attention to detail and rigor"],
      cta_projects: "View my projects",
      cta_courses: "Courses",
      cta_hobbies: "Interests",
      cta_cv: "Download my CV (PDF)",
      currently: "Currently",
      info_items: [
        { icon: "📚", text: "Third-year student at École polytechnique" },
        { icon: "⚙️", text: "Student in mechanics - materials and structures" },
        { icon: "⛵", text: "Strong interest in naval architecture and maritime systems" }
      ]
    },
    projets: {
      title: "Projects",
      subtitle: "Selection of my main projects and achievements",
      results_title: "Key results",
      carousel_prev: "Previous image",
      carousel_next: "Next image"
    },
    hobbies: { title: "Interests", subtitle: "Beyond engineering, I cultivate passions that shape who I am" },
    cours: {
      title: "Education and courses",
      subtitle: "Courses taken in preparatory classes and at École polytechnique.",
      filter_label: "Filter by subject",
      search_label: "Search courses",
      search_placeholder: "Search by title or keyword",
      search_clear: "Clear",
      no_results: "No courses match this search.",
      filter_aria: "Subject filters",
      filter_on_label: "Filter on",
      all_label: "All",
      open_visible: "Open visible",
      close_visible: "Close visible",
      reset_filters: "Reset filters",
      view_label: "Course display mode",
      view_detailed: "Detailed",
      view_compact: "Compact",
      showing_all: "Display: all subjects.",
      showing_selected_prefix: "Display: ",
      showing_selected_joiner: " + "
    },
    cv: { title: "Curriculum Vitae", placeholder: "CV section to complete (education, experience, skills)." },
    footer: {
      title: "Philibert Pappens - Portfolio",
      subtitle: "École polytechnique • Lycée Sainte-Geneviève",
      updated_label: "Last updated:",
      updated_value: "February 21, 2026",
      link_home: "Home",
      link_projects: "Projects",
      link_courses: "Courses",
      link_hobbies: "Interests",
      contact_label: "Contact",
      contact_linkedin: "LinkedIn profile",
      contact_github: "GitHub profile",
      back_to_top: "Top",
      switch_to_desktop: "Desktop version",
      switch_to_mobile: "Mobile version"
    },
    seo: {
      description: "Portfolio of Philibert Pappens: projects, courses, and interests in engineering, mechanics, and science.",
      keywords: "Philibert Pappens, portfolio, École polytechnique, mechanics, structures, materials, projects, courses",
      og_locale: "en_US",
      page: {
        accueil: "Home - Philibert Pappens",
        projets: "Projects - Philibert Pappens",
        cours: "Courses - Philibert Pappens",
        hobbies: "Interests - Philibert Pappens"
      }
    },
    errors: { template_load: "Template loading error." }
  },
  de: {
    page_title: "Philibert Pappens - Portfolio",
    nav: {
      brand: "Philibert Pappens - Portfolio",
      home: "Start",
      projects: "Projekte",
      hobbies: "Interessen",
      courses: "Lehrveranstaltungen",
      skip_content: "Zum Inhalt springen",
      main_aria: "Hauptnavigation",
      language_aria: "Sprachauswahl",
      menu_aria: "Menü öffnen"
    },
    words: { course_singular: "Kurs", course_plural: "Kurse", year_singular: "Jahr", year_plural: "Jahre" },
    accueil: {
      badge: "Offiziersschüler - École polytechnique",
      subtitle: "Ingenieurstudium in Struktur- und Werkstoffmechanik. Leidenschaft für die maritime Welt.",
      skills: ["Interdisziplinäre Kultur", "Intellektuelle Neugier", "Persönliche Disziplin", "Sorgfalt und Genauigkeit"],
      cta_projects: "Meine Projekte ansehen",
      cta_courses: "Lehrveranstaltungen",
      cta_hobbies: "Interessen",
      cta_cv: "Lebenslauf herunterladen (PDF)",
      currently: "Derzeit",
      info_items: [
        { icon: "📚", text: "Student im 3. Jahr an der École polytechnique" },
        { icon: "⚙️", text: "Student der Mechanik - Werkstoffe und Strukturen" },
        { icon: "⛵", text: "Interesse an Schiffsarchitektur und maritimen Themen" }
      ]
    },
    projets: {
      title: "Projekte",
      subtitle: "Auswahl meiner wichtigsten Projekte und Arbeiten",
      results_title: "Wichtigste Ergebnisse",
      carousel_prev: "Vorheriges Bild",
      carousel_next: "Nächstes Bild"
    },
    hobbies: { title: "Interessen", subtitle: "Neben dem Ingenieurwesen pflege ich Leidenschaften, die mich prägen" },
    cours: {
      title: "Ausbildung und Kurse",
      subtitle: "Belegte Kurse in den Vorbereitungsklassen und an der École polytechnique.",
      filter_label: "Nach Fach filtern",
      search_label: "Kurse suchen",
      search_placeholder: "Nach Titel oder Stichwort suchen",
      search_clear: "Löschen",
      no_results: "Keine Kurse entsprechen dieser Suche.",
      filter_aria: "Fachfilter",
      filter_on_label: "Filtern nach",
      all_label: "Alle",
      open_visible: "Sichtbare öffnen",
      close_visible: "Sichtbare schließen",
      reset_filters: "Filter zurücksetzen",
      view_label: "Darstellungsmodus der Kurse",
      view_detailed: "Detailliert",
      view_compact: "Kompakt",
      showing_all: "Anzeige: alle Fächer.",
      showing_selected_prefix: "Anzeige: ",
      showing_selected_joiner: " + "
    },
    cv: { title: "Lebenslauf", placeholder: "Lebenslauf wird ergänzt (Ausbildung, Erfahrung, Kompetenzen)." },
    footer: {
      title: "Philibert Pappens - Portfolio",
      subtitle: "École polytechnique • Lycée Sainte-Geneviève",
      updated_label: "Zuletzt aktualisiert:",
      updated_value: "21. Februar 2026",
      link_home: "Start",
      link_projects: "Projekte",
      link_courses: "Kurse",
      link_hobbies: "Interessen",
      contact_label: "Kontakt",
      contact_linkedin: "LinkedIn-Profil",
      contact_github: "GitHub-Profil",
      back_to_top: "Nach oben",
      switch_to_desktop: "Desktop-Version",
      switch_to_mobile: "Mobile-Version"
    },
    seo: {
      description: "Portfolio von Philibert Pappens: Projekte, Kurse und Interessen in Ingenieurwesen, Mechanik und Naturwissenschaften.",
      keywords: "Philibert Pappens, Portfolio, École polytechnique, Mechanik, Strukturen, Werkstoffe, Projekte, Kurse",
      og_locale: "de_DE",
      page: {
        accueil: "Start - Philibert Pappens",
        projets: "Projekte - Philibert Pappens",
        cours: "Kurse - Philibert Pappens",
        hobbies: "Interessen - Philibert Pappens"
      }
    },
    errors: { template_load: "Fehler beim Laden der Vorlage." }
  }
};

const CONTENT_TRANSLATIONS = {
  en: {
    matiere: {
      "Mécanique": "Mechanics",
      "Mathématiques": "Mathematics",
      "Physique": "Physics",
      "Informatique": "Computer Science",
      "Mathématiques appliquées": "Applied Mathematics",
      "Économie": "Economics",
      "Humanités et Sciences Sociales": "Humanities and Social Sciences",
      "Management de l'innovation et entrepreneuriat": "Innovation Management and Entrepreneurship"
    },
    annee: {
      "Prépa MPSI": "Preparatory class MPSI (Lycée Sainte-Geneviève, Versailles)",
      "Prépa MP* (option informatique)": "Preparatory class MP* - Computer Science option (Lycée Sainte-Geneviève, Versailles)",
      "1A": "Year 1 (X)",
      "2A": "Year 2 (X)",
      "3A": "Year 3 (X)"
    },
    titre: {
      "Analyse structurelle du gréement d'un voilier": "Structural analysis of a sailboat rigging",
      "Solution au problème d'isomorphisme de graphes": "Solution to the graph isomorphism problem",
      "PerdriX – Réseau social de récupération d'objets perdus": "PerdriX - Social network for lost-and-found items",
      "TRON 3D – Jeu vidéo multijoueur": "TRON 3D - Multiplayer video game",
      "Mécanique des milieux continus 1": "Continuum Mechanics 1",
      "Mécanique des milieux continus 2": "Continuum Mechanics 2",
      "Mécanique des fluides": "Fluid Mechanics",
      "Comportement des matériaux": "Material behavior",
      "Méthodes numériques en mécanique des solides": "Numerical methods in solid mechanics",
      "Dynamique des solides et structures": "Dynamics of solids and structures",
      "Analyse et dimensionnement des structures et composants": "Analysis and design of structures and components",
      "Mécanique et couplages multiphysiques": "Mechanics and multiphysics couplings",
      "Mécanique de la rupture": "Fracture mechanics",
      "Solides en grandes transformations": "Solids under large transformations",
      "Ingénierie informatique de la mécanique des solides": "Computational engineering of solid mechanics",
      "Mathématiques (MPSI)": "Mathematics (MPSI)",
      "Mathématiques (MP*)": "Mathematics (MP*)",
      "Analyse réelle et méthodes variationnelles": "Real analysis and variational methods",
      "Calcul différentiel et fonctions holomorphes": "Differential calculus and holomorphic functions",
      "Physique-Chimie (MPSI)": "Physics and Chemistry (MPSI)",
      "Physique-Chimie (MP*)": "Physics and Chemistry (MP*)",
      "Mécanique quantique": "Quantum mechanics",
      "Physique quantique avancée": "Advanced quantum physics",
      "Relativité et principes variationnels": "Relativity and variational principles",
      "Physique statistique": "Statistical physics",
      "Ondes électromagnétiques": "Electromagnetic waves",
      "Informatique tronc commun (MPSI)": "Computer Science core module (MPSI)",
      "Option informatique (MPSI, S2)": "Computer Science option (MPSI, semester 2)",
      "Informatique tronc commun (MP*)": "Computer Science core module (MP*)",
      "Informatique renforcée (MP*, option informatique)": "Advanced Computer Science (MP*, option)",
      "Mécanismes de la programmation orientée objet": "Object-oriented programming mechanisms",
      "Informatique graphique 3D": "3D computer graphics",
      "Aléatoire": "Probability",
      "Modélisation de phénomènes aléatoires": "Modeling random phenomena",
      "Introduction aux sciences économiques": "Introduction to economics",
      "Scoutisme marin": "Sea scouting",
      "Chant choral": "Choral singing",
      "Orgue": "Organ",
      "Piano": "Piano",
      "Football": "Football",
      "Langue allemande et culture germanique": "German language and Germanic culture",
      "Équilibres mondiaux et enjeux de défense": "Global balances and defense issues",
      "Pouvons-nous aimer la démocratie ?": "Can we love democracy?",
      "Histoires d'Empires": "Histories of Empires",
      "Introduction aux problèmes institutionnels": "Introduction to institutional issues",
      "Histoire politique et culturelle de la France : de la Commune à la Belle Époque": "Political and cultural history of France: from the Commune to the Belle Epoque",
      "Stratégie et géopolitique": "Strategy and geopolitics",
      "Découverte de l'Opéra": "Discovering Opera",
      "Français-Philosophie (thème : L'enfance)": "French Literature and Philosophy (theme: Childhood)",
      "Français-Philosophie (thème : Le travail)": "French Literature and Philosophy (theme: Work)",
      "Fondamentaux des Organisations": "Fundamentals of Organizations",
      "Gouvernance d'entreprise et finance durable": "Corporate governance and sustainable finance"
    },
    description: {
      "Étude complète du comportement mécanique du gréement et du mât sous différents chargements. Le projet combine modélisation numérique par éléments finis, analyse dynamique et optimisation structurale pour un voilier classique dont la géométrie peut varier.": "Comprehensive study of rigging and mast mechanical behavior under multiple load cases, combining finite element modeling, dynamic analysis, and structural optimization for a classical sailboat with variable geometry.",
      "Résolution du problème de l'isomorphisme de graphes à l'aide du théorème adiabatique quantique, implémentation dans Qiskit et réduction du bruit.": "Solving the graph isomorphism problem using the quantum adiabatic theorem, implemented in Qiskit with noise-reduction techniques.",
      "Application mobile collaborative pour signaler et retrouver les objets perdus à l'École polytechnique. Fonctionnalités de réseau social type Facebook : création de posts pour les objets trouvés, système de messagerie privée entre utilisateurs, et notifications en temps réel pour faciliter les retrouvailles.": "Collaborative mobile app to report and recover lost items at Ecole polytechnique, with social-network features (posts, private messaging, and real-time notifications).",
      "Jeu vidéo en 3D inspiré de TRON, jouable à 2 joueurs sur le même ordinateur. Deux motos naviguent sur une grille noire brillante et traînent des fils lumineux derrière elles. Les joueurs visent à faire entrer en collision la moto adverse avec les fils (leur ou les leurs), ce qui entraîne la mort du joueur touché. Entièrement codé en C++.": "TRON-inspired 3D game for two local players: two light bikes race on a dark grid and leave trails, and each player tries to trap the other into a collision. Fully coded in C++.",
      "Troupe Saint François-Xavier (Paris VI)": "Saint François-Xavier troop (Paris 6th district)",
      "Ensemble Vocal de l'École polytechnique": "Ecole polytechnique vocal ensemble",
      "Formation au conservatoire et en cours particuliers": "Conservatory training and private lessons",
      "Cours particuliers": "Private lessons",
      "Gardien de but": "Goalkeeper",
      "Allemand C1, littérature, musique et histoire": "German C1, literature, music, and history",
      "Formation intensive en algèbre, analyse et géométrie, avec un volume de 12h par semaine (hors colles et devoirs surveillés), au Lycée Sainte-Geneviève (Versailles).": "Intensive training in algebra, analysis, and geometry (12h/week, excluding oral exams and supervised tests) at Lycée Sainte-Geneviève in Versailles.",
      "Approfondissement des outils d'algèbre et d'analyse en deuxième année, avec 12h hebdomadaires (hors colles et devoirs surveillés), au Lycée Sainte-Geneviève (Versailles).": "Second-year advanced algebra and analysis (12h/week, excluding oral exams and supervised tests) at Lycée Sainte-Geneviève in Versailles.",
      "Socle de physique-chimie de première année (6h de physique + 2h de chimie par semaine, hors colles et devoirs surveillés), au Lycée Sainte-Geneviève (Versailles).": "First-year physics-chemistry core (6h physics + 2h chemistry per week, excluding oral exams and supervised tests) at Lycée Sainte-Geneviève in Versailles.",
      "Approfondissement en deuxième année avec 7h de physique et 2h de chimie par semaine (hors colles et devoirs surveillés), au Lycée Sainte-Geneviève (Versailles).": "Second-year advanced physics-chemistry (7h physics + 2h chemistry per week, excluding oral exams and supervised tests) at Lycée Sainte-Geneviève in Versailles.",
      "Bases de l'algorithmique et de la programmation scientifique, avec 2h hebdomadaires en tronc commun, au Lycée Sainte-Geneviève (Versailles).": "Core algorithmics and scientific programming (2h/week) at Lycée Sainte-Geneviève in Versailles.",
      "Approfondissement de l'algorithmique en option, avec 2h hebdomadaires supplémentaires au second semestre, au Lycée Sainte-Geneviève (Versailles).": "Advanced algorithmics in the optional track (2h additional weekly hours in semester 2) at Lycée Sainte-Geneviève in Versailles.",
      "Consolidation des bases algorithmiques en deuxième année, avec 1h hebdomadaire en tronc commun, au Lycée Sainte-Geneviève (Versailles).": "Second-year consolidation of algorithmic foundations (1h/week core module) at Lycée Sainte-Geneviève in Versailles.",
      "Approfondissement en option informatique en MP*, avec 2h hebdomadaires dédiées, au Lycée Sainte-Geneviève (Versailles).": "Advanced MP* computer-science option (2 dedicated weekly hours) at Lycée Sainte-Geneviève in Versailles.",
      "Travail annuel de culture générale et de dissertation sur le thème de « l'enfance » en CPGE scientifique, au Lycée Sainte-Geneviève (Versailles).": "Year-long humanities and essay training on the theme of childhood in scientific CPGE at Lycée Sainte-Geneviève in Versailles.",
      "Approfondissement des méthodes d'analyse et de dissertation autour du thème de « le travail » en deuxième année de prépa, au Lycée Sainte-Geneviève (Versailles).": "Advanced analytical and essay methods around the theme of work in second-year preparatory classes at Lycée Sainte-Geneviève in Versailles.",
      "Éléments finis (Cast3M)": "Finite elements (Cast3M)",
      "Mécanique des structures": "Structural mechanics",
      "Analyse modale": "Modal analysis",
      "Optimisation structurale": "Structural optimization",
      "Modèle numérique 3D complet du système de gréement et mât": "Complete 3D numerical model of the rigging and mast system",
      "Analyse modale : identification des premiers modes propres": "Modal analysis: identification of the first natural modes",
      "Étude du comportement en plasticité et flambement sous différents chargements": "Study of plasticity and buckling behavior under multiple load cases",
      "Dimensionnement de la structure": "Structural sizing",
      "Informatique quantique": "Quantum computing",
      "Théorie des graphes": "Graph theory",
      "Réduction du bruit": "Noise reduction",
      "Etude analytique puis numérique du problème": "Analytical then numerical study of the problem",
      "Optimisation et réduction du bruit dans les simulations quantiques": "Optimization and noise reduction in quantum simulations",
      "Développement mobile": "Mobile development",
      "Messagerie": "Messaging",
      "Réseau social": "Social network",
      "Application mobile fonctionnelle avec interface utilisateur intuitive": "Functional mobile application with an intuitive user interface",
      "Système de messagerie interne": "Internal messaging system",
      "Gestion des objets perdus et trouvés": "Lost-and-found management",
      "Développement 3D": "3D development",
      "Graphique 3D": "3D graphics",
      "Jeux vidéo": "Video games",
      "Moteur de jeu 3D entièrement fonctionnel": "Fully functional 3D game engine",
      "Système de collision en temps réel": "Real-time collision system",
      "Mode multijoueur local (2 joueurs)": "Local multiplayer mode (2 players)",
      "Graphisme 3D avec grille et effets lumineux": "3D graphics with grid and light effects",
      "Structures élancées, équilibre, flambement et formulation variationnelle.": "Slender structures, equilibrium, buckling, and variational formulation.",
      "Mécanique des milieux continus tridimensionnels et principes variationnels.": "Three-dimensional continuum mechanics and variational principles.",
      "Bases de la mécanique des fluides pour l’analyse et la modélisation des écoulements.": "Fundamentals of fluid mechanics for flow analysis and modeling.",
      "Étude des déformations irréversibles au-delà du domaine d’élasticité et modélisation des comportements non linéaires en petites déformations.": "Study of irreversible deformations beyond elasticity and modeling of nonlinear behavior in small strains.",
      "Introduction approfondie aux méthodes numériques pour la mécanique des milieux continus, des systèmes algébriques à la méthode des éléments finis.": "In-depth introduction to numerical methods for continuum mechanics, from algebraic systems to finite elements.",
      "Panorama des phénomènes dynamiques des solides et structures, de l’analyse modale aux ondes en milieux continus.": "Overview of dynamic phenomena in solids and structures, from modal analysis to waves in continua.",
      "Cours-projet de conception et de dimensionnement appliqué à des cas industriels en mécanique des structures.": "Project-based course on design and sizing applied to industrial structural-mechanics cases.",
      "Outils théoriques et numériques pour modéliser des matériaux et systèmes couplés (thermiques, mécaniques, chimiques, électriques) en contexte d’ingénierie.": "Theoretical and numerical tools to model coupled materials and systems (thermal, mechanical, chemical, electrical) in engineering.",
      "Introduction aux concepts fondamentaux de fissuration et de rupture, de l’élasticité aux modèles variationnels et à leur implémentation numérique.": "Introduction to the core concepts of cracking and fracture, from elasticity to variational models and numerical implementation.",
      "Étude des matériaux élastiques en grandes transformations, avec prise en compte des précontraintes et des contraintes résiduelles.": "Study of elastic materials under large transformations, including prestress and residual stress effects.",
      "Cours-projet à l’interface entre mécanique, microfluidique, nanophysique et bioingénierie, avec un fort volet transfert technologique.": "Project course at the interface of mechanics, microfluidics, nanophysics, and bioengineering, with a strong technology-transfer component.",
      "Analyse réelle, espaces de Hilbert et introduction aux méthodes variationnelles.": "Real analysis, Hilbert spaces, and introduction to variational methods.",
      "Analyse complexe et calcul différentiel dans des espaces de dimension finie et de Banach.": "Complex analysis and differential calculus in finite-dimensional and Banach spaces.",
      "Introduction à la physique quantique et à ses principales applications modernes.": "Introduction to quantum physics and its main modern applications.",
      "Méthodes avancées de mécanique quantique pour systèmes à une ou plusieurs particules.": "Advanced quantum-mechanics methods for one- and many-particle systems.",
      "Relativité restreinte, mécanique analytique et liens avec la mécanique quantique.": "Special relativity, analytical mechanics, and links with quantum mechanics.",
      "Concepts et méthodes de la physique statistique pour systèmes à grand nombre de particules.": "Concepts and methods of statistical physics for many-particle systems.",
      "Propagation, rayonnement et interaction lumière–matière à partir des équations de Maxwell.": "Propagation, radiation, and light-matter interaction based on Maxwell’s equations.",
      "Mécanismes avancés des langages et traits orientés objet en Java.": "Advanced language mechanisms and object-oriented features in Java.",
      "Création, animation et rendu interactif de mondes virtuels 3D.": "Creation, animation, and interactive rendering of 3D virtual worlds.",
      "Introduction à la théorie des probabilités et aux premières notions de statistique.": "Introduction to probability theory and first notions of statistics.",
      "Processus stochastiques pour la modélisation de données corrélées dans le temps.": "Stochastic processes for modeling time-correlated data.",
      "Principes fondamentaux de l’analyse économique et fonctionnement des économies de marché.": "Fundamental principles of economic analysis and market-economy functioning.",
      "Introduction aux grands équilibres internationaux et à leur impact direct sur les politiques de défense contemporaines.": "Introduction to major global balances and their direct impact on contemporary defense policies.",
      "Réflexion philosophique sur le paradoxe démocratique contemporain : triomphe de la démocratie comme référence et crise de la confiance politique.": "Philosophical reflection on the contemporary democratic paradox: democracy as an ideal reference and crisis of political trust.",
      "Approche historique de la notion d’empire, de ses formes anciennes à ses reconfigurations contemporaines.": "Historical approach to the concept of empire, from ancient forms to contemporary reconfigurations.",
      "Analyse des cadres institutionnels et de la pratique du pouvoir, principalement sous la Ve République française.": "Analysis of institutional frameworks and the practice of power, mainly under the French Fifth Republic.",
      "Étude de la République, de la démocratie et de la citoyenneté en France entre 1871 et 1914.": "Study of the Republic, democracy, and citizenship in France between 1871 and 1914.",
      "Analyse des conflictualités internationales contemporaines à partir des concepts clés des relations internationales.": "Analysis of contemporary international conflicts through key international-relations concepts.",
      "Introduction au monde de l’opéra comme art total et comme organisation complexe, entre esthétique, technique et management culturel.": "Introduction to opera as a total art form and as a complex organization, between aesthetics, technique, and cultural management.",
      "Introduction aux dynamiques des organisations et aux outils de management pour agir dans des environnements complexes.": "Introduction to organizational dynamics and management tools to act in complex environments.",
      "Mise en perspective des travaux récents sur la gouvernance des entreprises et la finance responsable.": "Putting recent work on corporate governance and responsible finance into perspective.",
      "Le compte Instagram de l'Ensemble Vocal": "The Vocal Ensemble Instagram account",
      "Une interprétation des petits préludes et fugues de Bach": "An interpretation of Bach’s little preludes and fugues",
      "Le concerto pour clavier n°1 de Bach, interprété par Glenn Gould": "Bach’s Keyboard Concerto No. 1, performed by Glenn Gould",
      "J'ai commencé le scoutisme à la troupe Vé Brest marine, avec un premier camp d'été et deux années de troupe.": "I began scouting in the Vé Brest marine troop, with a first summer camp and two years in troop activities.",
      "Je suis actuellement assistant chef de troupe à la SUF Saint François-Xavier à Notre-Dame-des-Champs (Paris VI).": "I am currently an assistant troop leader in the SUF Saint François-Xavier group at Notre-Dame-des-Champs (Paris 6th district).",
      "J'ai participé à un camp d'été en 2024, un autre en 2025 et je préparerai mon dernier camp en 2026.": "I took part in a summer camp in 2024, another in 2025, and I will prepare my final camp in 2026.",
      "La particularité de ces groupes est d'être des scouts marins : les camps comprennent une partie voile, en plus des activités scoutes habituelles.": "A specific feature of these groups is that they are sea scouts: camps include a sailing component in addition to regular scouting activities.",
      "Je suis titulaire du CEP1 et du PSC1.": "I hold CEP1 and PSC1 certifications.",
      "Je fais partie de l'Ensemble Vocal de l'École polytechnique depuis deux ans.": "I have been a member of the École polytechnique Vocal Ensemble for two years.",
      "J'ai été responsable de la communication pendant une année : réalisation des affiches, gestion du site web et des comptes Instagram / Facebook, préparation des concerts avec le bureau.": "I was in charge of communication for one year: poster design, website management, Instagram/Facebook accounts, and concert preparation with the board.",
      "La chorale fait partie des activités qui structurent mon année à l'école, autant sur le plan musical que collectif.": "The choir is one of the activities that structures my year at school, both musically and collectively.",
      "J'ai commencé l'orgue au conservatoire pendant le primaire, puis j'ai poursuivi tout le collège avec un professeur particulier.": "I started learning organ at the conservatory in primary school, then continued throughout middle school with a private teacher.",
      "Au lycée, j'ai continué une année avec un professeur particulier, organiste dans une église.": "In high school, I continued for one year with a private teacher who was a church organist.",
      "Je suis particulièrement attaché à la musique de Bach": "I am particularly attached to Bach’s music.",
      "J'ai pris un an de cours particuliers de piano au lycée.": "I took private piano lessons for one year in high school.",
      "Même si je ne joue pas à un niveau avancé, j'apprécie beaucoup le répertoire pour piano.": "Even though I do not play at an advanced level, I greatly enjoy piano repertoire.",
      "En particulier, j'aime beaucoup Bach, mais également Chopin, Beethoven, Mozart ...": "In particular, I really like Bach, as well as Chopin, Beethoven, and Mozart.",
      "Je joue au football depuis le collège, essentiellement au poste de gardien de but.": "I have played football since middle school, mainly as a goalkeeper.",
      "À l'École polytechnique, je suis gardien depuis deux ans. Nous avons deux créneaux d'entraînement par semaine (un seul en troisième année), ainsi que des matchs en championnat universitaire le jeudi.": "At École polytechnique, I have played as goalkeeper for two years. We have two weekly training slots (one in third year), and university-league matches on Thursdays.",
      "Avant cela, j'ai joué deux ans en club au collège et deux ans avec l'équipe de ma prépa.": "Before that, I played two years in a club in middle school and two years with my preparatory-class team.",
      "J'ai vécu quatre ans en Allemagne, ce qui m'a donné une relation durable à la langue et à la culture germanophones.": "I lived four years in Germany, which gave me a lasting relationship with the language and German-speaking culture.",
      "À l'École polytechnique, je suis des cours d'allemand de niveau C1, en particulier un cours de philosophie et un autre sur la musique chorale classique allemande.": "At École polytechnique, I follow C1-level German courses, especially one in philosophy and another on German classical choral music.",
      "J'apprécie la littérature allemande et la musique classique de l'espace germanique, notamment Bach, Mozart, Schubert et Schumann.": "I appreciate German literature and classical music from the Germanic sphere, notably Bach, Mozart, Schubert, and Schumann.",
      "J'ai effectué un stage de trois mois à la Deutsche Telekom, à Bonn, ce qui m'a permis de renforcer ma pratique professionnelle de l'allemand.": "I completed a three-month internship at Deutsche Telekom in Bonn, which strengthened my professional use of German.",
      "Je m'intéresse aussi beaucoup à l'histoire des Etats allemands et de l'Autriche.": "I am also very interested in the history of the German states and Austria.",
      "Rapport complet (PDF)": "Full report (PDF)",
      "Structure du gréement": "Rigging structure",
      "Couture entre le maillage du mât et celui de la barre de mât": "Mesh coupling between mast and spreader bar",
      "Mode 1 de la structure": "Structure mode 1",
      "Mode 1": "Mode 1",
      "Mode 2 de la structure": "Structure mode 2",
      "Mode 2": "Mode 2",
      "Mode 3 de la structure": "Structure mode 3",
      "Mode 3": "Mode 3",
      "Mode 4 de la structure": "Structure mode 4",
      "Mode 4": "Mode 4",
      "Mode 5 de la structure": "Structure mode 5",
      "Mode 5": "Mode 5",
      "Représentation 3D du voilier": "3D representation of the sailboat",
      "Effet du poids propre du voilier": "Effect of the sailboat self-weight",
      "Logo PerdriX": "PerdriX logo",
      "Logo de l'application PerdriX": "PerdriX app logo",
      "Interface utilisateur": "User interface",
      "Interface exemple de l'application": "Example application interface",
      "Architecture base de données": "Database architecture",
      "Architecture de la base de données": "Database architecture",
      "Structure client": "Client structure",
      "Architecture client de l'application": "Application client architecture"
    },
    contexte: {
      "Projet de recherche – École polytechnique": "Research project - Ecole polytechnique",
      "Projet scientifique collectif – École polytechnique": "Collaborative scientific project - Ecole polytechnique",
      "MODAL (Module Appliqué en Laboratoire) – École polytechnique": "MODAL (Applied Laboratory Module) - Ecole polytechnique",
      "Cours d'Informatique 3D – École polytechnique": "3D Computer Science course - Ecole polytechnique"
    }
  },
  de: {
    matiere: {
      "Mécanique": "Mechanik",
      "Mathématiques": "Mathematik",
      "Physique": "Physik",
      "Informatique": "Informatik",
      "Mathématiques appliquées": "Angewandte Mathematik",
      "Économie": "Volkswirtschaftslehre",
      "Humanités et Sciences Sociales": "Geistes- und Sozialwissenschaften",
      "Management de l'innovation et entrepreneuriat": "Innovationsmanagement und Unternehmertum"
    },
    annee: {
      "Prépa MPSI": "Vorklasse MPSI (Lycée Sainte-Geneviève, Versailles)",
      "Prépa MP* (option informatique)": "Vorklasse MP* - Informatikoption (Lycée Sainte-Geneviève, Versailles)",
      "1A": "1. Jahr (X)",
      "2A": "2. Jahr (X)",
      "3A": "3. Jahr (X)"
    },
    titre: {
      "Analyse structurelle du gréement d'un voilier": "Strukturanalyse der Takelage eines Segelboots",
      "Solution au problème d'isomorphisme de graphes": "Lösung des Graphisomorphieproblems",
      "PerdriX – Réseau social de récupération d'objets perdus": "PerdriX - Soziales Netzwerk für Fundgegenstände",
      "TRON 3D – Jeu vidéo multijoueur": "TRON 3D - Mehrspieler-Videospiel",
      "Mécanique des milieux continus 1": "Kontinuumsmechanik 1",
      "Mécanique des milieux continus 2": "Kontinuumsmechanik 2",
      "Mécanique des fluides": "Strömungsmechanik",
      "Comportement des matériaux": "Werkstoffverhalten",
      "Méthodes numériques en mécanique des solides": "Numerische Methoden in der Festkörpermechanik",
      "Dynamique des solides et structures": "Dynamik von Festkörpern und Strukturen",
      "Analyse et dimensionnement des structures et composants": "Analyse und Auslegung von Strukturen und Bauteilen",
      "Mécanique et couplages multiphysiques": "Mechanik und multiphysikalische Kopplungen",
      "Mécanique de la rupture": "Bruchmechanik",
      "Solides en grandes transformations": "Festkörper bei großen Deformationen",
      "Ingénierie informatique de la mécanique des solides": "Computergestützte Ingenieurmethoden der Festkörpermechanik",
      "Mathématiques (MPSI)": "Mathematik (MPSI)",
      "Mathématiques (MP*)": "Mathematik (MP*)",
      "Analyse réelle et méthodes variationnelles": "Reelle Analysis und Variationsmethoden",
      "Calcul différentiel et fonctions holomorphes": "Differentialrechnung und holomorphe Funktionen",
      "Physique-Chimie (MPSI)": "Physik-Chemie (MPSI)",
      "Physique-Chimie (MP*)": "Physik-Chemie (MP*)",
      "Mécanique quantique": "Quantenmechanik",
      "Physique quantique avancée": "Fortgeschrittene Quantenphysik",
      "Relativité et principes variationnels": "Relativität und Variationsprinzipien",
      "Physique statistique": "Statistische Physik",
      "Ondes électromagnétiques": "Elektromagnetische Wellen",
      "Informatique tronc commun (MPSI)": "Informatik - gemeinsames Modul (MPSI)",
      "Option informatique (MPSI, S2)": "Informatikoption (MPSI, Semester 2)",
      "Informatique tronc commun (MP*)": "Informatik - gemeinsames Modul (MP*)",
      "Informatique renforcée (MP*, option informatique)": "Vertiefte Informatik (MP*, Informatikoption)",
      "Mécanismes de la programmation orientée objet": "Mechanismen der objektorientierten Programmierung",
      "Informatique graphique 3D": "3D-Computergrafik",
      "Aléatoire": "Wahrscheinlichkeit",
      "Modélisation de phénomènes aléatoires": "Modellierung zufälliger Phänomene",
      "Introduction aux sciences économiques": "Einführung in die Wirtschaftswissenschaften",
      "Scoutisme marin": "Seepfadfinder",
      "Chant choral": "Chorgesang",
      "Orgue": "Orgel",
      "Piano": "Klavier",
      "Football": "Fußball",
      "Langue allemande et culture germanique": "Deutsche Sprache und germanische Kultur",
      "Équilibres mondiaux et enjeux de défense": "Weltgleichgewichte und Verteidigungsfragen",
      "Pouvons-nous aimer la démocratie ?": "Können wir die Demokratie lieben?",
      "Histoires d'Empires": "Geschichten der Imperien",
      "Introduction aux problèmes institutionnels": "Einführung in institutionelle Probleme",
      "Histoire politique et culturelle de la France : de la Commune à la Belle Époque": "Politische und kulturelle Geschichte Frankreichs: von der Kommune bis zur Belle Epoque",
      "Stratégie et géopolitique": "Strategie und Geopolitik",
      "Découverte de l'Opéra": "Oper entdecken",
      "Français-Philosophie (thème : L'enfance)": "Französisch-Philosophie (Thema: Kindheit)",
      "Français-Philosophie (thème : Le travail)": "Französisch-Philosophie (Thema: Arbeit)",
      "Fondamentaux des Organisations": "Grundlagen von Organisationen",
      "Gouvernance d'entreprise et finance durable": "Unternehmensführung und nachhaltige Finanzen"
    },
    description: {
      "Étude complète du comportement mécanique du gréement et du mât sous différents chargements. Le projet combine modélisation numérique par éléments finis, analyse dynamique et optimisation structurale pour un voilier classique dont la géométrie peut varier.": "Umfassende Untersuchung des mechanischen Verhaltens von Takelage und Mast unter verschiedenen Lasten mit FEM-Modellierung, Dynamikanalyse und Strukturoptimierung.",
      "Résolution du problème de l'isomorphisme de graphes à l'aide du théorème adiabatique quantique, implémentation dans Qiskit et réduction du bruit.": "Lösung des Graphisomorphieproblems mit dem quantenadiabatischen Theorem, Implementierung in Qiskit und Rauschreduktion.",
      "Application mobile collaborative pour signaler et retrouver les objets perdus à l'École polytechnique. Fonctionnalités de réseau social type Facebook : création de posts pour les objets trouvés, système de messagerie privée entre utilisateurs, et notifications en temps réel pour faciliter les retrouvailles.": "Kollaborative App zum Melden und Wiederfinden verlorener Gegenstände an der École polytechnique mit sozialen Funktionen (Posts, private Nachrichten, Echtzeit-Benachrichtigungen).",
      "Jeu vidéo en 3D inspiré de TRON, jouable à 2 joueurs sur le même ordinateur. Deux motos naviguent sur une grille noire brillante et traînent des fils lumineux derrière elles. Les joueurs visent à faire entrer en collision la moto adverse avec les fils (leur ou les leurs), ce qui entraîne la mort du joueur touché. Entièrement codé en C++.": "Von TRON inspiriertes 3D-Spiel für zwei lokale Spieler: Lichtmotorräder auf einem dunklen Raster, Ziel ist es, den Gegner in eine Kollision zu zwingen. Vollständig in C++ entwickelt.",
      "Troupe Saint François-Xavier (Paris VI)": "Stamm Saint François-Xavier (Paris 6.)",
      "Ensemble Vocal de l'École polytechnique": "Vokalensemble der Ecole polytechnique",
      "Formation au conservatoire et en cours particuliers": "Konservatorium und Privatunterricht",
      "Cours particuliers": "Privatunterricht",
      "Gardien de but": "Torwart",
      "Allemand C1, littérature, musique et histoire": "Deutsch C1, Literatur, Musik und Geschichte",
      "Formation intensive en algèbre, analyse et géométrie, avec un volume de 12h par semaine (hors colles et devoirs surveillés), au Lycée Sainte-Geneviève (Versailles).": "Intensive Ausbildung in Algebra, Analysis und Geometrie (12h/Woche, ohne Mündliche und Klausuren) am Lycée Sainte-Geneviève in Versailles.",
      "Approfondissement des outils d'algèbre et d'analyse en deuxième année, avec 12h hebdomadaires (hors colles et devoirs surveillés), au Lycée Sainte-Geneviève (Versailles).": "Vertiefung von Algebra und Analysis im zweiten Jahr (12h/Woche, ohne Mündliche und Klausuren) am Lycée Sainte-Geneviève in Versailles.",
      "Socle de physique-chimie de première année (6h de physique + 2h de chimie par semaine, hors colles et devoirs surveillés), au Lycée Sainte-Geneviève (Versailles).": "Physik-Chemie-Grundausbildung im ersten Jahr (6h Physik + 2h Chemie pro Woche, ohne Mündliche und Klausuren) am Lycée Sainte-Geneviève in Versailles.",
      "Approfondissement en deuxième année avec 7h de physique et 2h de chimie par semaine (hors colles et devoirs surveillés), au Lycée Sainte-Geneviève (Versailles).": "Vertiefung im zweiten Jahr mit 7h Physik und 2h Chemie pro Woche (ohne Mündliche und Klausuren) am Lycée Sainte-Geneviève in Versailles.",
      "Bases de l'algorithmique et de la programmation scientifique, avec 2h hebdomadaires en tronc commun, au Lycée Sainte-Geneviève (Versailles).": "Grundlagen der Algorithmik und wissenschaftlichen Programmierung (2h/Woche im Kernmodul) am Lycée Sainte-Geneviève in Versailles.",
      "Approfondissement de l'algorithmique en option, avec 2h hebdomadaires supplémentaires au second semestre, au Lycée Sainte-Geneviève (Versailles).": "Vertiefung der Algorithmik im Wahlfach (2 zusätzliche Wochenstunden im 2. Semester) am Lycée Sainte-Geneviève in Versailles.",
      "Consolidation des bases algorithmiques en deuxième année, avec 1h hebdomadaire en tronc commun, au Lycée Sainte-Geneviève (Versailles).": "Festigung der algorithmischen Grundlagen im zweiten Jahr (1h/Woche im Kernmodul) am Lycée Sainte-Geneviève in Versailles.",
      "Approfondissement en option informatique en MP*, avec 2h hebdomadaires dédiées, au Lycée Sainte-Geneviève (Versailles).": "Vertiefte Informatikoption in MP* (2 zusätzliche Wochenstunden) am Lycée Sainte-Geneviève in Versailles.",
      "Travail annuel de culture générale et de dissertation sur le thème de « l'enfance » en CPGE scientifique, au Lycée Sainte-Geneviève (Versailles).": "Jahreskurs in Allgemeinbildung und Essayarbeit zum Thema Kindheit in wissenschaftlicher CPGE am Lycée Sainte-Geneviève in Versailles.",
      "Approfondissement des méthodes d'analyse et de dissertation autour du thème de « le travail » en deuxième année de prépa, au Lycée Sainte-Geneviève (Versailles).": "Vertiefung der Analyse- und Essaymethoden zum Thema Arbeit im zweiten Vorklassenjahr am Lycée Sainte-Geneviève in Versailles.",
      "Éléments finis (Cast3M)": "Finite Elemente (Cast3M)",
      "Mécanique des structures": "Strukturmechanik",
      "Analyse modale": "Modale Analyse",
      "Optimisation structurale": "Strukturoptimierung",
      "Modèle numérique 3D complet du système de gréement et mât": "Vollständiges 3D-Numerikmodell des Takelage- und Mastsystems",
      "Analyse modale : identification des premiers modes propres": "Modale Analyse: Identifikation der ersten Eigenmoden",
      "Étude du comportement en plasticité et flambement sous différents chargements": "Untersuchung des plastischen und knickrelevanten Verhaltens unter verschiedenen Lastfällen",
      "Dimensionnement de la structure": "Dimensionierung der Struktur",
      "Informatique quantique": "Quanteninformatik",
      "Théorie des graphes": "Graphentheorie",
      "Réduction du bruit": "Rauschreduktion",
      "Etude analytique puis numérique du problème": "Analytische und anschließend numerische Untersuchung des Problems",
      "Optimisation et réduction du bruit dans les simulations quantiques": "Optimierung und Rauschreduktion in Quantensimulationen",
      "Développement mobile": "Mobile Entwicklung",
      "Messagerie": "Nachrichtenfunktionen",
      "Réseau social": "Soziales Netzwerk",
      "Application mobile fonctionnelle avec interface utilisateur intuitive": "Funktionsfähige mobile Anwendung mit intuitiver Benutzeroberfläche",
      "Système de messagerie interne": "Internes Nachrichtensystem",
      "Gestion des objets perdus et trouvés": "Verwaltung von Fundgegenständen",
      "Développement 3D": "3D-Entwicklung",
      "Graphique 3D": "3D-Grafik",
      "Jeux vidéo": "Videospiele",
      "Moteur de jeu 3D entièrement fonctionnel": "Voll funktionsfähige 3D-Spiel-Engine",
      "Système de collision en temps réel": "Echtzeit-Kollisionssystem",
      "Mode multijoueur local (2 joueurs)": "Lokaler Mehrspielermodus (2 Spieler)",
      "Graphisme 3D avec grille et effets lumineux": "3D-Grafik mit Raster und Lichteffekten",
      "Structures élancées, équilibre, flambement et formulation variationnelle.": "Schlanke Strukturen, Gleichgewicht, Knicken und Variationsformulierung.",
      "Mécanique des milieux continus tridimensionnels et principes variationnels.": "Dreidimensionale Kontinuumsmechanik und Variationsprinzipien.",
      "Bases de la mécanique des fluides pour l’analyse et la modélisation des écoulements.": "Grundlagen der Strömungsmechanik zur Analyse und Modellierung von Strömungen.",
      "Étude des déformations irréversibles au-delà du domaine d’élasticité et modélisation des comportements non linéaires en petites déformations.": "Untersuchung irreversibler Verformungen jenseits des Elastizitätsbereichs und Modellierung nichtlinearer Materialgesetze bei kleinen Dehnungen.",
      "Introduction approfondie aux méthodes numériques pour la mécanique des milieux continus, des systèmes algébriques à la méthode des éléments finis.": "Vertiefte Einführung in numerische Methoden der Kontinuumsmechanik, von algebraischen Systemen bis zur Finite-Elemente-Methode.",
      "Panorama des phénomènes dynamiques des solides et structures, de l’analyse modale aux ondes en milieux continus.": "Überblick über dynamische Phänomene in Festkörpern und Strukturen, von der modalen Analyse bis zu Wellen in Kontinua.",
      "Cours-projet de conception et de dimensionnement appliqué à des cas industriels en mécanique des structures.": "Projektkurs zu Entwurf und Dimensionierung für industrielle Fälle der Strukturmechanik.",
      "Outils théoriques et numériques pour modéliser des matériaux et systèmes couplés (thermiques, mécaniques, chimiques, électriques) en contexte d’ingénierie.": "Theoretische und numerische Werkzeuge zur Modellierung gekoppelter Werkstoffe und Systeme (thermisch, mechanisch, chemisch, elektrisch) im Ingenieurkontext.",
      "Introduction aux concepts fondamentaux de fissuration et de rupture, de l’élasticité aux modèles variationnels et à leur implémentation numérique.": "Einführung in grundlegende Konzepte von Rissbildung und Bruch, von der Elastizität bis zu Variationsmodellen und ihrer numerischen Umsetzung.",
      "Étude des matériaux élastiques en grandes transformations, avec prise en compte des précontraintes et des contraintes résiduelles.": "Untersuchung elastischer Materialien bei großen Deformationen unter Berücksichtigung von Vorspannungen und Eigenspannungen.",
      "Cours-projet à l’interface entre mécanique, microfluidique, nanophysique et bioingénierie, avec un fort volet transfert technologique.": "Projektkurs an der Schnittstelle von Mechanik, Mikrofluidik, Nanophysik und Bioingenieurwesen mit starkem Technologietransfer-Fokus.",
      "Analyse réelle, espaces de Hilbert et introduction aux méthodes variationnelles.": "Reelle Analysis, Hilbert-Räume und Einführung in Variationsmethoden.",
      "Analyse complexe et calcul différentiel dans des espaces de dimension finie et de Banach.": "Komplexe Analysis und Differentialrechnung in endlichdimensionalen Räumen und Banach-Räumen.",
      "Introduction à la physique quantique et à ses principales applications modernes.": "Einführung in die Quantenphysik und ihre wichtigsten modernen Anwendungen.",
      "Méthodes avancées de mécanique quantique pour systèmes à une ou plusieurs particules.": "Fortgeschrittene Methoden der Quantenmechanik für Ein- und Vielteilchensysteme.",
      "Relativité restreinte, mécanique analytique et liens avec la mécanique quantique.": "Spezielle Relativität, analytische Mechanik und Verbindungen zur Quantenmechanik.",
      "Concepts et méthodes de la physique statistique pour systèmes à grand nombre de particules.": "Konzepte und Methoden der statistischen Physik für Vielteilchensysteme.",
      "Propagation, rayonnement et interaction lumière–matière à partir des équations de Maxwell.": "Ausbreitung, Strahlung und Licht-Materie-Wechselwirkung auf Basis der Maxwell-Gleichungen.",
      "Mécanismes avancés des langages et traits orientés objet en Java.": "Fortgeschrittene Sprachmechanismen und objektorientierte Konzepte in Java.",
      "Création, animation et rendu interactif de mondes virtuels 3D.": "Erstellung, Animation und interaktives Rendering virtueller 3D-Welten.",
      "Introduction à la théorie des probabilités et aux premières notions de statistique.": "Einführung in die Wahrscheinlichkeitstheorie und erste Grundlagen der Statistik.",
      "Processus stochastiques pour la modélisation de données corrélées dans le temps.": "Stochastische Prozesse zur Modellierung zeitkorrelierter Daten.",
      "Principes fondamentaux de l’analyse économique et fonctionnement des économies de marché.": "Grundprinzipien der ökonomischen Analyse und Funktionsweise von Marktwirtschaften.",
      "Introduction aux grands équilibres internationaux et à leur impact direct sur les politiques de défense contemporaines.": "Einführung in die globalen Gleichgewichte und ihren direkten Einfluss auf heutige Verteidigungspolitiken.",
      "Réflexion philosophique sur le paradoxe démocratique contemporain : triomphe de la démocratie comme référence et crise de la confiance politique.": "Philosophische Reflexion über das zeitgenössische demokratische Paradox: Sieg der Demokratie als Referenz und Krise des politischen Vertrauens.",
      "Approche historique de la notion d’empire, de ses formes anciennes à ses reconfigurations contemporaines.": "Historischer Zugang zum Begriff des Imperiums von antiken Formen bis zu heutigen Neuordnungen.",
      "Analyse des cadres institutionnels et de la pratique du pouvoir, principalement sous la Ve République française.": "Analyse institutioneller Rahmenbedingungen und Machtpraxis, insbesondere unter der Fünften Französischen Republik.",
      "Étude de la République, de la démocratie et de la citoyenneté en France entre 1871 et 1914.": "Untersuchung von Republik, Demokratie und Bürgerschaft in Frankreich zwischen 1871 und 1914.",
      "Analyse des conflictualités internationales contemporaines à partir des concepts clés des relations internationales.": "Analyse gegenwärtiger internationaler Konflikte anhand zentraler Begriffe der Internationalen Beziehungen.",
      "Introduction au monde de l’opéra comme art total et comme organisation complexe, entre esthétique, technique et management culturel.": "Einführung in die Oper als Gesamtkunstwerk und komplexe Organisation zwischen Ästhetik, Technik und Kulturmanagement.",
      "Introduction aux dynamiques des organisations et aux outils de management pour agir dans des environnements complexes.": "Einführung in Organisationsdynamiken und Managementwerkzeuge für Handeln in komplexen Umgebungen.",
      "Mise en perspective des travaux récents sur la gouvernance des entreprises et la finance responsable.": "Einordnung jüngerer Arbeiten zu Unternehmensführung und verantwortungsvoller Finanzierung.",
      "Le compte Instagram de l'Ensemble Vocal": "Instagram-Konto des Vokalensembles",
      "Une interprétation des petits préludes et fugues de Bach": "Eine Interpretation von Bachs kleinen Präludien und Fugen",
      "Le concerto pour clavier n°1 de Bach, interprété par Glenn Gould": "Bachs Klavierkonzert Nr. 1, interpretiert von Glenn Gould",
      "J'ai commencé le scoutisme à la troupe Vé Brest marine, avec un premier camp d'été et deux années de troupe.": "Ich habe mit dem Pfadfinden in der maritimen Gruppe Vé Brest begonnen, mit einem ersten Sommerlager und zwei Jahren in der Gruppe.",
      "Je suis actuellement assistant chef de troupe à la SUF Saint François-Xavier à Notre-Dame-des-Champs (Paris VI).": "Derzeit bin ich Assistenz-Gruppenleiter bei der SUF Saint François-Xavier in Notre-Dame-des-Champs (Paris 6.).",
      "J'ai participé à un camp d'été en 2024, un autre en 2025 et je préparerai mon dernier camp en 2026.": "Ich habe 2024 an einem Sommerlager teilgenommen, 2025 an einem weiteren und bereite mein letztes Lager 2026 vor.",
      "La particularité de ces groupes est d'être des scouts marins : les camps comprennent une partie voile, en plus des activités scoutes habituelles.": "Die Besonderheit dieser Gruppen ist ihre maritime Ausrichtung: Die Lager umfassen einen Segelteil zusätzlich zu den üblichen Pfadfinderaktivitäten.",
      "Je suis titulaire du CEP1 et du PSC1.": "Ich bin Inhaber von CEP1 und PSC1.",
      "Je fais partie de l'Ensemble Vocal de l'École polytechnique depuis deux ans.": "Ich gehöre seit zwei Jahren zum Vokalensemble der École polytechnique.",
      "J'ai été responsable de la communication pendant une année : réalisation des affiches, gestion du site web et des comptes Instagram / Facebook, préparation des concerts avec le bureau.": "Ein Jahr lang war ich für Kommunikation verantwortlich: Plakatgestaltung, Betreuung der Website und der Instagram-/Facebook-Konten sowie Konzertvorbereitung mit dem Vorstand.",
      "La chorale fait partie des activités qui structurent mon année à l'école, autant sur le plan musical que collectif.": "Der Chor gehört zu den Aktivitäten, die mein Schuljahr musikalisch wie auch gemeinschaftlich prägen.",
      "J'ai commencé l'orgue au conservatoire pendant le primaire, puis j'ai poursuivi tout le collège avec un professeur particulier.": "Ich begann in der Grundschule am Konservatorium mit Orgel und setzte den Unterricht während der gesamten Mittelstufe mit einem Privatlehrer fort.",
      "Au lycée, j'ai continué une année avec un professeur particulier, organiste dans une église.": "Im Gymnasium setzte ich ein Jahr lang den Unterricht bei einem Privatlehrer fort, der Organist in einer Kirche war.",
      "Je suis particulièrement attaché à la musique de Bach": "Ich bin besonders mit der Musik von Bach verbunden.",
      "J'ai pris un an de cours particuliers de piano au lycée.": "Ich nahm im Gymnasium ein Jahr lang privaten Klavierunterricht.",
      "Même si je ne joue pas à un niveau avancé, j'apprécie beaucoup le répertoire pour piano.": "Auch wenn ich nicht auf fortgeschrittenem Niveau spiele, schätze ich das Klavierrepertoire sehr.",
      "En particulier, j'aime beaucoup Bach, mais également Chopin, Beethoven, Mozart ...": "Ich mag besonders Bach, aber auch Chopin, Beethoven und Mozart.",
      "Je joue au football depuis le collège, essentiellement au poste de gardien de but.": "Ich spiele seit der Mittelstufe Fußball, hauptsächlich als Torwart.",
      "À l'École polytechnique, je suis gardien depuis deux ans. Nous avons deux créneaux d'entraînement par semaine (un seul en troisième année), ainsi que des matchs en championnat universitaire le jeudi.": "An der École polytechnique bin ich seit zwei Jahren Torwart. Wir haben zwei Trainingszeiten pro Woche (eine im dritten Jahr) sowie donnerstags Spiele in der Hochschulliga.",
      "Avant cela, j'ai joué deux ans en club au collège et deux ans avec l'équipe de ma prépa.": "Davor spielte ich zwei Jahre im Verein in der Mittelstufe und zwei Jahre im Team meiner Vorbereitungsklasse.",
      "J'ai vécu quatre ans en Allemagne, ce qui m'a donné une relation durable à la langue et à la culture germanophones.": "Ich habe vier Jahre in Deutschland gelebt, was mir eine dauerhafte Beziehung zur Sprache und zur deutschsprachigen Kultur gegeben hat.",
      "À l'École polytechnique, je suis des cours d'allemand de niveau C1, en particulier un cours de philosophie et un autre sur la musique chorale classique allemande.": "An der École polytechnique besuche ich Deutschkurse auf C1-Niveau, insbesondere einen Philosophiekurs und einen weiteren zur deutschen klassischen Chormusik.",
      "J'apprécie la littérature allemande et la musique classique de l'espace germanique, notamment Bach, Mozart, Schubert et Schumann.": "Ich schätze die deutsche Literatur und die klassische Musik des deutschsprachigen Raums, insbesondere Bach, Mozart, Schubert und Schumann.",
      "J'ai effectué un stage de trois mois à la Deutsche Telekom, à Bonn, ce qui m'a permis de renforcer ma pratique professionnelle de l'allemand.": "Ich absolvierte ein dreimonatiges Praktikum bei der Deutschen Telekom in Bonn, wodurch ich mein berufliches Deutsch vertiefen konnte.",
      "Je m'intéresse aussi beaucoup à l'histoire des Etats allemands et de l'Autriche.": "Ich interessiere mich außerdem sehr für die Geschichte der deutschen Staaten und Österreichs.",
      "Rapport complet (PDF)": "Vollständiger Bericht (PDF)",
      "Structure du gréement": "Takelagestruktur",
      "Couture entre le maillage du mât et celui de la barre de mât": "Kopplung zwischen dem Netz des Masts und dem der Maststange",
      "Mode 1 de la structure": "Eigenform 1 der Struktur",
      "Mode 1": "Modus 1",
      "Mode 2 de la structure": "Eigenform 2 der Struktur",
      "Mode 2": "Modus 2",
      "Mode 3 de la structure": "Eigenform 3 der Struktur",
      "Mode 3": "Modus 3",
      "Mode 4 de la structure": "Eigenform 4 der Struktur",
      "Mode 4": "Modus 4",
      "Mode 5 de la structure": "Eigenform 5 der Struktur",
      "Mode 5": "Modus 5",
      "Représentation 3D du voilier": "3D-Darstellung des Segelboots",
      "Effet du poids propre du voilier": "Eigengewichtseffekt des Segelboots",
      "Logo PerdriX": "PerdriX-Logo",
      "Logo de l'application PerdriX": "Logo der PerdriX-Anwendung",
      "Interface utilisateur": "Benutzeroberfläche",
      "Interface exemple de l'application": "Beispieloberfläche der Anwendung",
      "Architecture base de données": "Datenbankarchitektur",
      "Architecture de la base de données": "Architektur der Datenbank",
      "Structure client": "Client-Struktur",
      "Architecture client de l'application": "Client-Architektur der Anwendung"
    },
    contexte: {
      "Projet de recherche – École polytechnique": "Forschungsprojekt - École polytechnique",
      "Projet scientifique collectif – École polytechnique": "Kollektives wissenschaftliches Projekt - École polytechnique",
      "MODAL (Module Appliqué en Laboratoire) – École polytechnique": "MODAL (Angewandtes Labormodul) - École polytechnique",
      "Cours d'Informatique 3D – École polytechnique": "3D-Informatikkurs - École polytechnique"
    }
  }
};

function parseProjectEndDate(dateRange) {
  if (!dateRange) return 0;
  const value = String(dateRange).trim();
  if (/aujourd|today|heute/i.test(value)) {
    const now = new Date();
    return now.getFullYear() * 100 + (now.getMonth() + 1);
  }
  const parts = value.split(/\s*[–-]\s*/);
  const endPart = parts.length > 1 ? parts[parts.length - 1] : parts[0];
  const match = endPart.match(/(0[1-9]|1[0-2])\/(\d{4})/);
  if (!match) return 0;
  return parseInt(match[2] + match[1], 10);
}

function slugify(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

function getStoredLanguage() {
  const raw = localStorage.getItem(LANG_STORAGE_KEY);
  return SUPPORTED_LANGS.includes(raw) ? raw : DEFAULT_LANG;
}

function setStoredLanguage(lang) {
  localStorage.setItem(LANG_STORAGE_KEY, lang);
}

function getUi(lang) {
  return UI_STRINGS[lang] || UI_STRINGS.fr;
}

function getStoredViewMode() {
  const raw = localStorage.getItem(VIEW_MODE_STORAGE_KEY);
  return raw === "desktop" ? "desktop" : "auto";
}

function setStoredViewMode(mode) {
  localStorage.setItem(VIEW_MODE_STORAGE_KEY, mode === "desktop" ? "desktop" : "auto");
}

function getStoredCourseViewMode() {
  const raw = localStorage.getItem(COURSE_VIEW_MODE_STORAGE_KEY);
  return raw === "compact" ? "compact" : "detailed";
}

function setStoredCourseViewMode(mode) {
  localStorage.setItem(COURSE_VIEW_MODE_STORAGE_KEY, mode === "compact" ? "compact" : "detailed");
}

function isMobileViewport() {
  return window.matchMedia(`(max-width: ${MOBILE_VIEW_MAX_WIDTH}px)`).matches;
}

function getEffectiveViewMode() {
  const preferred = getStoredViewMode();
  const isMobile = isMobileViewport();
  if (preferred === "desktop" && isMobile) return "desktop";
  return isMobile ? "mobile" : "desktop";
}

function applyViewportMode(lang) {
  const ui = getUi(lang);
  const effectiveMode = getEffectiveViewMode();
  const isMobile = isMobileViewport();
  const forceDesktop = isMobile && effectiveMode === "desktop";

  const viewportMeta = document.getElementById("viewport-meta");
  if (viewportMeta) {
    viewportMeta.setAttribute(
      "content",
      forceDesktop ? "width=1280" : "width=device-width, initial-scale=1.0"
    );
  }

  document.documentElement.classList.toggle("force-desktop-view", forceDesktop);
  document.documentElement.classList.toggle("mobile-layout", isMobile && !forceDesktop);

  document.querySelectorAll("[data-view-toggle]").forEach((btn) => {
    if (!isMobile) {
      btn.classList.add("d-none");
      return;
    }

    btn.classList.remove("d-none");
    const toDesktop = !forceDesktop;
    btn.dataset.viewTarget = toDesktop ? "desktop" : "mobile";
    const label = toDesktop ? ui.footer.switch_to_desktop : ui.footer.switch_to_mobile;
    btn.textContent = label;
    btn.setAttribute("aria-label", label);
    btn.setAttribute("title", label);
  });
}

function formatDateLabel(date, lang) {
  const locale = lang === "de" ? "de-DE" : lang === "en" ? "en-US" : "fr-FR";
  return new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(date);
}

function getDocumentLastModifiedDate() {
  const fallbackDate = new Date();
  const parsedDate = document.lastModified ? new Date(document.lastModified) : fallbackDate;
  return Number.isNaN(parsedDate.getTime()) ? fallbackDate : parsedDate;
}

function refreshFooterUpdatedDate(lang) {
  const footerUpdated = document.getElementById("footer-updated-value");
  if (!footerUpdated) return;

  const fallbackDate = getDocumentLastModifiedDate();
  footerUpdated.textContent = formatDateLabel(latestUpdateDateCache || fallbackDate, lang);

  if (latestUpdateDateCache) return;

  Promise.all(
    LAST_UPDATED_PATHS.map((path) =>
      fetch(path, { method: "HEAD", cache: "no-store" })
        .then((response) => {
          const headerValue = response.headers.get("last-modified");
          if (!headerValue) return null;
          const parsedDate = new Date(headerValue);
          return Number.isNaN(parsedDate.getTime()) ? null : parsedDate;
        })
        .catch(() => null)
    )
  ).then((dates) => {
    const validDates = [fallbackDate, ...dates.filter(Boolean)];
    const newestDate = validDates.reduce((latest, current) => (current > latest ? current : latest), fallbackDate);
    latestUpdateDateCache = newestDate;
    const node = document.getElementById("footer-updated-value");
    if (node) node.textContent = formatDateLabel(newestDate, lang);
  });
}

function normalizeForSearch(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function applySeoMetadata(ui, page, lang) {
  if (!ui || !ui.seo) return;
  const pageKey = routes[page] ? page : "accueil";
  const pageTitle = (ui.seo.page && ui.seo.page[pageKey]) || ui.page_title;
  const description = ui.seo.description || "";
  const keywords = ui.seo.keywords || "";
  const ogLocale = ui.seo.og_locale || "fr_FR";
  const url = window.location.href;

  const titleTag = document.querySelector("title");
  if (titleTag) titleTag.textContent = pageTitle;

  const fields = [
    { id: "meta-description", value: description },
    { id: "meta-keywords", value: keywords },
    { id: "meta-og-title", value: pageTitle },
    { id: "meta-og-description", value: description },
    { id: "meta-og-url", value: url },
    { id: "meta-og-locale", value: ogLocale },
    { id: "meta-twitter-title", value: pageTitle },
    { id: "meta-twitter-description", value: description }
  ];

  fields.forEach((field) => {
    const node = document.getElementById(field.id);
    if (node) node.setAttribute("content", field.value);
  });

  const canonicalNode = document.getElementById("meta-canonical");
  if (canonicalNode) canonicalNode.setAttribute("href", url);

  document.documentElement.setAttribute("lang", lang);
}

function tr(value, map) {
  if (!value || !map) return value;
  if (Object.prototype.hasOwnProperty.call(map, value)) return map[value];
  const normValue = value.normalize("NFC");
  if (Object.prototype.hasOwnProperty.call(map, normValue)) return map[normValue];
  for (const key of Object.keys(map)) {
    if (key.normalize("NFC") === normValue) return map[key];
  }
  return value;
}

function trOrNull(value, map) {
  if (!value || !map) return null;
  if (Object.prototype.hasOwnProperty.call(map, value)) return map[value];
  const normValue = value.normalize("NFC");
  if (Object.prototype.hasOwnProperty.call(map, normValue)) return map[normValue];
  for (const key of Object.keys(map)) {
    if (key.normalize("NFC") === normValue) return map[key];
  }
  return null;
}

function localizeContent(data, lang) {
  if (lang === "fr") return data;
  const dict = CONTENT_TRANSLATIONS[lang];
  if (!dict) return data;

  (data.projets || []).forEach((projet) => {
    projet.titre = tr(projet.titre, dict.titre);
    projet.description = tr(projet.description, dict.description);
    projet.contexte = tr(projet.contexte, dict.contexte);
    projet.technologies = (projet.technologies || []).map((it) => tr(it, dict.description));
    if (projet.resultats && Array.isArray(projet.resultats.items)) {
      projet.resultats.items = projet.resultats.items.map((it) => tr(it, dict.description));
    }
    (projet.liens || []).forEach((lien) => {
      if (lien.label) lien.label = tr(lien.label, dict.description);
      if (lien.texte) lien.texte = tr(lien.texte, dict.description);
    });
    if (projet.carousel && Array.isArray(projet.carousel.images)) {
      projet.carousel.images.forEach((img) => {
        if (img.alt) img.alt = tr(img.alt, dict.description);
        if (img.description) img.description = tr(img.description, dict.description);
      });
    }
  });

  (data.cours || []).forEach((matiere) => {
    matiere.matiere = tr(matiere.matiere, dict.matiere);
    (matiere.annees || []).forEach((annee) => {
      annee.annee = tr(annee.annee, dict.annee);
      (annee.cours || []).forEach((cours) => {
        cours.titre = tr(cours.titre, dict.titre);
        cours.description = tr(cours.description, dict.description);
        cours.paragraphes = (cours.paragraphes || [])
          .map((p) => tr(p, dict.description))
          .filter((p) => p && p.trim());
      });
    });
  });

  (data.interets || []).forEach((interet) => {
    interet.titre = tr(interet.titre, dict.titre);
    interet.sous_titre = tr(interet.sous_titre, dict.description);
    interet.paragraphes = (interet.paragraphes || [])
      .map((p) => tr(p, dict.description))
      .filter((p) => p && p.trim());
    (interet.liens || []).forEach((lien) => {
      if (lien.texte) lien.texte = tr(lien.texte, dict.description);
      if (lien.label) lien.label = tr(lien.label, dict.description);
    });
  });

  return data;
}

function formatMatterMeta(courseCount, yearCount, ui) {
  const cWord = courseCount > 1 ? ui.words.course_plural : ui.words.course_singular;
  const yWord = yearCount > 1 ? ui.words.year_plural : ui.words.year_singular;
  return `${courseCount} ${cWord} · ${yearCount} ${yWord}`;
}

function formatYearMeta(courseCount, ui) {
  const cWord = courseCount > 1 ? ui.words.course_plural : ui.words.course_singular;
  return `${courseCount} ${cWord}`;
}

function getData(lang) {
  const ui = getUi(lang);
  const data = JSON.parse(JSON.stringify(portfolioData));
  localizeContent(data, lang);

  data.projets.sort((a, b) => parseProjectEndDate(b.date) - parseProjectEndDate(a.date));

  data.cours.forEach((matiere) => {
    let courseCount = 0;
    const anneeList = Array.isArray(matiere.annees) ? matiere.annees : [];
    anneeList.forEach((annee, index) => {
      const count = Array.isArray(annee.cours) ? annee.cours.length : 0;
      annee.course_count = count;
      annee.course_meta_label = formatYearMeta(count, ui);
      annee.annee_id = `${matiere.matiere_id || "mat"}-${index}-${slugify(annee.annee)}`;
      courseCount += count;
    });
    matiere.course_count = courseCount;
    matiere.annee_count = anneeList.length;
    matiere.course_meta_label = formatMatterMeta(courseCount, anneeList.length, ui);
  });

  data.ui = ui;
  data.current_lang = lang;
  return data;
}

function applyStaticUi(ui, lang) {
  document.documentElement.lang = lang;
  document.title = ui.page_title;

  const brand = document.querySelector(".navbar-brand");
  if (brand) brand.textContent = ui.nav.brand;

  document.querySelectorAll("[data-i18n-nav]").forEach((el) => {
    const key = el.dataset.i18nNav;
    if (ui.nav[key]) el.textContent = ui.nav[key];
  });

  document.querySelectorAll("[data-i18n-nav-aria]").forEach((el) => {
    const key = el.dataset.i18nNavAria;
    if (ui.nav[key]) el.setAttribute("aria-label", ui.nav[key]);
  });

  const toggler = document.querySelector(".navbar-toggler");
  if (toggler) toggler.setAttribute("aria-label", ui.nav.menu_aria);

  const langSwitcher = document.querySelector(".lang-switcher");
  if (langSwitcher) langSwitcher.setAttribute("aria-label", ui.nav.language_aria);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  document.querySelectorAll("[data-i18n-footer]").forEach((el) => {
    const key = el.dataset.i18nFooter;
    if (ui.footer && ui.footer[key]) el.textContent = ui.footer[key];
  });

  refreshFooterUpdatedDate(lang);

  document.querySelectorAll("[data-email-link]").forEach((el) => {
    el.setAttribute("href", `mailto:${EMAIL_ADDRESS}`);
    const label = EMAIL_ADDRESS;
    el.setAttribute("aria-label", label);
    el.setAttribute("title", label);
  });

  document.querySelectorAll("[data-github-link]").forEach((el) => {
    el.setAttribute("href", GITHUB_URL);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
    const label = "GitHub";
    el.setAttribute("aria-label", label);
    el.setAttribute("title", label);
  });

  document.querySelectorAll("[data-linkedin-link]").forEach((el) => {
    el.setAttribute("href", LINKEDIN_URL);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
    const label = "LinkedIn";
    el.setAttribute("aria-label", label);
    el.setAttribute("title", label);
  });

  document.querySelectorAll("[data-scroll-peek], .footer-top-btn").forEach((el) => {
    const label = ui.footer && ui.footer.back_to_top ? ui.footer.back_to_top : "Top";
    el.setAttribute("aria-label", label);
    el.setAttribute("title", label);
  });

  applyViewportMode(lang);
}

function initBottomDock() {
  const dock = document.querySelector("[data-bottom-dock]");
  if (!dock) return;

  function updateVisibility() {
    const scrolledEnough = window.scrollY > 260;
    const visible = scrolledEnough;
    dock.classList.toggle("is-visible", visible);
    dock.setAttribute("aria-hidden", visible ? "false" : "true");
  }

  window.addEventListener("scroll", updateVisibility, { passive: true });
  window.addEventListener("resize", updateVisibility, { passive: true });
  updateVisibility();
}

function initCourseFilters(ui) {
  const filterButtons = Array.from(document.querySelectorAll("[data-cours-filter]"));
  if (!filterButtons.length) return;

  const matiereItems = Array.from(document.querySelectorAll(".matiere-item"));
  if (!matiereItems.length) return;

  const allButton = filterButtons.find((btn) => btn.dataset.coursFilter === "ALL");
  const matiereButtons = filterButtons.filter((btn) => btn.dataset.coursFilter !== "ALL");
  const actionButtons = Array.from(document.querySelectorAll("[data-cours-action]"));
  const activeFiltersEl = document.querySelector("[data-cours-active-filters]");
  const searchInput = document.querySelector("[data-cours-search]");
  const searchClearBtn = document.querySelector("[data-cours-search-clear]");
  const emptyStateEl = document.querySelector("[data-cours-empty]");
  const activeFilterIds = new Set();
  const searchIndex = new Map();
  let currentSearchQuery = "";

  matiereItems.forEach((item) => {
    searchIndex.set(item, normalizeForSearch(item.textContent));
  });

  function getTopCollapse(item) {
    return item.querySelector(":scope > .accordion-collapse") || item.querySelector(".accordion-collapse");
  }

  function hideOpenCollapses(item) {
    item.querySelectorAll(".accordion-collapse.show").forEach((collapseEl) => {
      bootstrap.Collapse.getOrCreateInstance(collapseEl, { toggle: false }).hide();
    });
  }

  function setTopCollapseVisible(item, shouldShow) {
    const collapseEl = getTopCollapse(item);
    if (!collapseEl) return;
    if (shouldShow) bootstrap.Collapse.getOrCreateInstance(collapseEl, { toggle: false }).show();
    else if (collapseEl.classList.contains("show")) bootstrap.Collapse.getOrCreateInstance(collapseEl, { toggle: false }).hide();
  }

  function applyFilters(options = {}) {
    const { openSelected = false } = options;
    const hasSelection = activeFilterIds.size > 0;
    const hasQuery = currentSearchQuery.length > 0;
    const visibleItems = [];

    if (allButton) allButton.classList.toggle("is-active", !hasSelection);
    matiereButtons.forEach((btn) => btn.classList.toggle("is-active", activeFilterIds.has(btn.dataset.coursFilter)));

    matiereItems.forEach((item) => {
      const matchFilter = !hasSelection || activeFilterIds.has(item.dataset.matiereId);
      const matchSearch = !hasQuery || (searchIndex.get(item) || "").includes(currentSearchQuery);
      const isVisible = matchFilter && matchSearch;
      item.classList.toggle("d-none", !isVisible);
      if (!isVisible) hideOpenCollapses(item);
      else visibleItems.push(item);
    });

    if (hasSelection && openSelected) {
      visibleItems.forEach((item) => setTopCollapseVisible(item, true));
    }

    if (emptyStateEl) emptyStateEl.classList.toggle("d-none", visibleItems.length > 0);
    if (searchClearBtn) searchClearBtn.classList.toggle("d-none", !hasQuery);

    if (activeFiltersEl) {
      const filterText = !hasSelection
        ? ui.cours.showing_all
        : (() => {
        const labels = matiereButtons.filter((btn) => activeFilterIds.has(btn.dataset.coursFilter)).map((btn) => btn.dataset.coursLabel || btn.dataset.coursFilter);
        return `${ui.cours.showing_selected_prefix}${labels.join(ui.cours.showing_selected_joiner)}`;
      })();
      const searchText = hasQuery && searchInput ? ` ${ui.cours.search_label}: "${searchInput.value.trim()}".` : "";
      activeFiltersEl.textContent = `${filterText}${searchText}`;
    }
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filterId = btn.dataset.coursFilter || "ALL";
      if (filterId === "ALL") {
        activeFilterIds.clear();
        applyFilters();
        return;
      }
      if (activeFilterIds.has(filterId)) activeFilterIds.delete(filterId);
      else activeFilterIds.add(filterId);
      applyFilters({ openSelected: true });
    });
  });

  actionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const action = btn.dataset.coursAction;
      const visibleItems = matiereItems.filter((item) => !item.classList.contains("d-none"));
      if (action === "open-visible") visibleItems.forEach((item) => setTopCollapseVisible(item, true));
      else if (action === "close-visible") visibleItems.forEach((item) => hideOpenCollapses(item));
      else if (action === "clear-filters") {
        activeFilterIds.clear();
        currentSearchQuery = "";
        if (searchInput) searchInput.value = "";
        applyFilters();
      }
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      currentSearchQuery = normalizeForSearch(searchInput.value);
      applyFilters({ openSelected: true });
    });
  }

  if (searchInput && searchClearBtn) {
    searchClearBtn.addEventListener("click", () => {
      searchInput.value = "";
      currentSearchQuery = "";
      applyFilters();
      searchInput.focus();
    });
  }

  applyFilters();
}

function initCourseViewMode() {
  const coursSection = document.querySelector(".cours-section");
  if (!coursSection) return;

  const buttons = Array.from(document.querySelectorAll("[data-cours-view]"));
  if (!buttons.length) return;

  let currentMode = getStoredCourseViewMode();

  function applyMode(mode) {
    currentMode = mode === "compact" ? "compact" : "detailed";
    const isCompact = currentMode === "compact";
    coursSection.classList.toggle("cours-mode-compact", isCompact);
    setStoredCourseViewMode(currentMode);

    buttons.forEach((btn) => {
      const isActive = btn.dataset.coursView === currentMode;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    if (isCompact) {
      coursSection.querySelectorAll(".course-details[open]").forEach((detailsNode) => {
        detailsNode.removeAttribute("open");
      });
    }
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => applyMode(btn.dataset.coursView));
  });

  coursSection.addEventListener("click", (event) => {
    if (currentMode !== "compact") return;
    const summaryNode = event.target.closest(".course-summary");
    if (summaryNode) event.preventDefault();
  });

  coursSection.addEventListener("keydown", (event) => {
    if (currentMode !== "compact") return;
    const summaryNode = event.target.closest(".course-summary");
    if (!summaryNode) return;
    if (event.key === "Enter" || event.key === " ") event.preventDefault();
  });

  applyMode(currentMode);
}

function applyDynamicPageUi(ui) {
  document.querySelectorAll("[data-i18n-projets-aria]").forEach((node) => {
    const key = node.dataset.i18nProjetsAria;
    const label = ui.projets && ui.projets[key];
    if (label) {
      node.setAttribute("aria-label", label);
      node.setAttribute("title", label);
    }
  });
}

function optimizeMediaLoading() {
  const images = Array.from(document.querySelectorAll("#content img"));
  images.forEach((img) => {
    if (!img.getAttribute("loading")) img.setAttribute("loading", "lazy");
    if (!img.getAttribute("decoding")) img.setAttribute("decoding", "async");
    if (!img.getAttribute("fetchpriority")) img.setAttribute("fetchpriority", "low");

    if (img.closest(".project-carousel-container")) {
      if (!img.getAttribute("sizes")) img.setAttribute("sizes", "(max-width: 768px) 100vw, 78vw");
    } else if (img.closest(".hobby-card")) {
      if (!img.getAttribute("sizes")) img.setAttribute("sizes", "(max-width: 768px) 100vw, 33vw");
    } else if (img.closest(".profile-image-container")) {
      if (!img.getAttribute("sizes")) img.setAttribute("sizes", "(max-width: 991px) 100vw, 42vw");
    }
  });

  const firstHeroImage = document.querySelector(".profile-image");
  if (firstHeroImage) {
    firstHeroImage.setAttribute("loading", "eager");
    firstHeroImage.setAttribute("fetchpriority", "high");
  }

  const firstCarouselImage = document.querySelector(".carousel-item img");
  if (firstCarouselImage) {
    firstCarouselImage.setAttribute("loading", "eager");
    firstCarouselImage.setAttribute("fetchpriority", "high");
  }
}

function loadPage(page, lang) {
  const path = routes[page] || routes.accueil;
  const ui = getUi(lang);
  const contentNode = document.getElementById("content");
  if (contentNode) contentNode.setAttribute("aria-busy", "true");

  $.ajax({ url: path, method: "GET", dataType: "text" })
    .done((templateText) => {
      const rendered = Mustache.render(templateText, getData(lang));
      $("#content").html(rendered);
      applyDynamicPageUi(ui);
      optimizeMediaLoading();

      document.querySelectorAll(".carousel").forEach((carouselEl) => {
        const firstItem = carouselEl.querySelector(".carousel-item");
        const activeItem = carouselEl.querySelector(".carousel-item.active");
        if (firstItem && !activeItem) firstItem.classList.add("active");

        const prevBtn = carouselEl.querySelector(".carousel-control-prev");
        const nextBtn = carouselEl.querySelector(".carousel-control-next");

        if (prevBtn) {
          prevBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const currentItem = carouselEl.querySelector(".carousel-item.active");
            if (!currentItem) return;
            const previousItem = currentItem.previousElementSibling || carouselEl.querySelector(".carousel-item:last-child");
            currentItem.classList.remove("active");
            previousItem.classList.add("active");
          });
        }

        if (nextBtn) {
          nextBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const currentItem = carouselEl.querySelector(".carousel-item.active");
            if (!currentItem) return;
            const followingItem = currentItem.nextElementSibling || carouselEl.querySelector(".carousel-item:first-child");
            currentItem.classList.remove("active");
            followingItem.classList.add("active");
          });
        }
      });

      initCourseFilters(ui);
      initCourseViewMode();
      if (contentNode) contentNode.setAttribute("aria-busy", "false");
    })
    .fail(() => {
      $("#content").html(`<p class='text-danger'>${ui.errors.template_load}</p>`);
      if (contentNode) contentNode.setAttribute("aria-busy", "false");
    });
}

$(function () {
  let currentLang = getStoredLanguage();
  const initialHashPage = window.location.hash ? window.location.hash.replace(/^#/, "") : "";
  let currentPage = routes[initialHashPage] ? initialHashPage : "accueil";

  function setActiveNavigation(page) {
    document.querySelectorAll(".nav-link[data-page]").forEach((link) => {
      const isActive = link.dataset.page === page;
      link.classList.toggle("active", isActive);
      link.setAttribute("aria-current", isActive ? "page" : "false");
    });
  }

  function goTo(page) {
    currentPage = page;
    loadPage(page, currentLang);
    setActiveNavigation(page);
    if (window.location.hash !== `#${page}`) window.history.replaceState(null, "", `#${page}`);
    applySeoMetadata(getUi(currentLang), page, currentLang);
  }

  function applyLanguage(lang) {
    currentLang = SUPPORTED_LANGS.includes(lang) ? lang : DEFAULT_LANG;
    setStoredLanguage(currentLang);
    applyStaticUi(getUi(currentLang), currentLang);
    goTo(currentPage);
  }

  $(".nav-link, .navbar-brand").on("click", function (e) {
    e.preventDefault();
    const page = $(this).data("page");
    if (!page) return;
    goTo(page);

    const navbarCollapseEl = document.getElementById("navbarMain");
    if (navbarCollapseEl && navbarCollapseEl.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(navbarCollapseEl).hide();
    }
  });

  $(document).on("click", ".js-nav", function (e) {
    e.preventDefault();
    const page = $(this).data("page");
    if (page) goTo(page);
  });

  $(".lang-btn").on("click", function () {
    const nextLang = $(this).data("lang");
    if (nextLang && nextLang !== currentLang) applyLanguage(nextLang);
  });

  $(document).on("click", "[data-view-toggle]", function () {
    const target = this.dataset.viewTarget === "mobile" ? "auto" : "desktop";
    setStoredViewMode(target);
    applyViewportMode(currentLang);
    window.location.reload();
  });

  $(document).on("click", "[data-scroll-top]", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("resize", () => applyViewportMode(currentLang), { passive: true });
  window.addEventListener("hashchange", () => {
    const hashPage = window.location.hash.replace(/^#/, "");
    if (hashPage && routes[hashPage] && hashPage !== currentPage) goTo(hashPage);
  });

  initBottomDock();
  applyStaticUi(getUi(currentLang), currentLang);
  goTo(currentPage);
});
