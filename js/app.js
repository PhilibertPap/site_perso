const routes = {
  accueil: "templates/accueil.tpl.html",
  projets: "templates/projets.tpl.html",
  experiences: "templates/experiences.tpl.html",
  cv: "templates/cv.tpl.html",
  hobbies: "templates/hobbies.tpl.html",
  cours: "templates/cours.tpl.html",
  contact: "templates/contact.tpl.html"
};

const DEFAULT_LANG = "fr";
const SUPPORTED_LANGS = ["fr", "en", "de"];
const LANG_STORAGE_KEY = "portfolio_lang";
const COURSE_VIEW_MODE_STORAGE_KEY = "portfolio_course_view_mode";
const THEME_STORAGE_KEY = "portfolio_theme";
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
  "templates/experiences.tpl.html",
  "templates/cours.tpl.html",
  "templates/hobbies.tpl.html",
  "templates/contact.tpl.html"
];

let latestUpdateDateCache = null;
const templateCache = new Map();

const UI_STRINGS = {
  fr: {
    page_title: "Philibert Pappens - Portfolio",
    nav: {
      brand: "Philibert Pappens - Portfolio",
      home: "Accueil",
      projects: "Projets",
      experiences: "Expériences",
      hobbies: "Centres d'intérêt",
      courses: "Cours suivis",
      skip_content: "Aller au contenu",
      main_aria: "Navigation principale",
      language_aria: "Sélecteur de langue",
      menu_aria: "Ouvrir le menu",
      contact: "Contact",
      theme_toggle: "Basculer le mode sombre"
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
    experiences: {
      title: "Expériences professionnelles",
      subtitle: "Stages et immersions qui ont structuré ma compréhension du travail en organisation.",
      timeline_label: "Frise chronologique",
      timeline_aria: "Frise des expériences",
      select_prompt: "Cliquez sur un point de la frise pour afficher le détail d'une expérience.",
      period_label: "Période :",
      location_label: "Lieu :",
      context_label: "Contexte",
      mission_label: "Mission",
      highlights_label: "Points clés",
      environment_label: "Environnement",
      impact_label: "Ce que cela m'a apporté",
      close_card: "Fermer",
      kind_professional: "Expérience",
      kind_volunteer: "Bénévolat"
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
    contact: {
      title: "Contact",
      subtitle: "Une question, une opportunité ? Écrivez-moi.",
      name_label: "Nom",
      name_placeholder: "Votre nom",
      email_label: "Adresse e-mail",
      email_placeholder: "votre@email.com",
      message_label: "Message",
      message_placeholder: "Votre message…",
      submit: "Envoyer",
      success: "Message envoyé ! Je vous répondrai dès que possible.",
      error: "Une erreur est survenue. Essayez de m'écrire directement à philibert.pappens@gmail.com."
    },
    footer: {
      title: "Philibert Pappens - Portfolio",
      subtitle: "École polytechnique • Lycée Sainte-Geneviève",
      updated_label: "Dernière mise à jour :",
      updated_value: "21 février 2026",
      link_home: "Accueil",
      link_projects: "Projets",
      link_experiences: "Expériences",
      link_courses: "Cours",
      link_hobbies: "Centres d'intérêt",
      link_contact: "Contact",
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
        experiences: "Expériences - Philibert Pappens",
        cours: "Cours - Philibert Pappens",
        hobbies: "Centres d'intérêt - Philibert Pappens",
        contact: "Contact - Philibert Pappens"
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
      experiences: "Experience",
      hobbies: "Interests",
      courses: "Courses",
      skip_content: "Skip to content",
      main_aria: "Main navigation",
      language_aria: "Language selector",
      menu_aria: "Open menu",
      contact: "Contact",
      theme_toggle: "Toggle dark mode"
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
    experiences: {
      title: "Professional Experience",
      subtitle: "Internships and immersive experiences that shaped how I understand work in organizations.",
      timeline_label: "Timeline",
      timeline_aria: "Experience timeline",
      select_prompt: "Click a point on the timeline to display an experience card.",
      period_label: "Period:",
      location_label: "Location:",
      context_label: "Context",
      mission_label: "Mission",
      highlights_label: "Key points",
      environment_label: "Environment",
      impact_label: "What it brought me",
      close_card: "Close",
      kind_professional: "Experience",
      kind_volunteer: "Volunteer"
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
    contact: {
      title: "Contact",
      subtitle: "A question, an opportunity? Get in touch.",
      name_label: "Name",
      name_placeholder: "Your name",
      email_label: "Email address",
      email_placeholder: "your@email.com",
      message_label: "Message",
      message_placeholder: "Your message…",
      submit: "Send",
      success: "Message sent! I'll get back to you as soon as possible.",
      error: "Something went wrong. Please write to me directly at philibert.pappens@gmail.com."
    },
    footer: {
      title: "Philibert Pappens - Portfolio",
      subtitle: "École polytechnique • Lycée Sainte-Geneviève",
      updated_label: "Last updated:",
      updated_value: "February 21, 2026",
      link_home: "Home",
      link_projects: "Projects",
      link_experiences: "Experience",
      link_courses: "Courses",
      link_hobbies: "Interests",
      link_contact: "Contact",
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
        experiences: "Experience - Philibert Pappens",
        cours: "Courses - Philibert Pappens",
        hobbies: "Interests - Philibert Pappens",
        contact: "Contact - Philibert Pappens"
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
      experiences: "Erfahrungen",
      hobbies: "Interessen",
      courses: "Lehrveranstaltungen",
      skip_content: "Zum Inhalt springen",
      main_aria: "Hauptnavigation",
      language_aria: "Sprachauswahl",
      menu_aria: "Menü öffnen",
      contact: "Kontakt",
      theme_toggle: "Dunkelmodus umschalten"
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
    experiences: {
      title: "Berufserfahrungen",
      subtitle: "Praktika und berufliche Einblicke, die mein Verständnis von Arbeit in Organisationen geprägt haben.",
      timeline_label: "Zeitleiste",
      timeline_aria: "Zeitleiste der Erfahrungen",
      select_prompt: "Klicken Sie auf einen Punkt der Zeitleiste, um die Detailkarte einer Erfahrung anzuzeigen.",
      period_label: "Zeitraum:",
      location_label: "Ort:",
      context_label: "Kontext",
      mission_label: "Aufgabe",
      highlights_label: "Wichtige Punkte",
      environment_label: "Umfeld",
      impact_label: "Was es mir gebracht hat",
      close_card: "Schließen",
      kind_professional: "Erfahrung",
      kind_volunteer: "Ehrenamt"
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
    contact: {
      title: "Kontakt",
      subtitle: "Eine Frage, eine Möglichkeit? Schreiben Sie mir.",
      name_label: "Name",
      name_placeholder: "Ihr Name",
      email_label: "E-Mail-Adresse",
      email_placeholder: "ihre@email.com",
      message_label: "Nachricht",
      message_placeholder: "Ihre Nachricht…",
      submit: "Senden",
      success: "Nachricht gesendet! Ich antworte Ihnen so bald wie möglich.",
      error: "Es ist ein Fehler aufgetreten. Schreiben Sie mir bitte direkt an philibert.pappens@gmail.com."
    },
    footer: {
      title: "Philibert Pappens - Portfolio",
      subtitle: "École polytechnique • Lycée Sainte-Geneviève",
      updated_label: "Zuletzt aktualisiert:",
      updated_value: "21. Februar 2026",
      link_home: "Start",
      link_projects: "Projekte",
      link_experiences: "Erfahrungen",
      link_courses: "Kurse",
      link_hobbies: "Interessen",
      link_contact: "Kontakt",
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
        experiences: "Erfahrungen - Philibert Pappens",
        cours: "Kurse - Philibert Pappens",
        hobbies: "Interessen - Philibert Pappens",
        contact: "Kontakt - Philibert Pappens"
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
      "J'ai commencé le scoutisme à la troupe Vème (cinquième) marine Brest, avec un premier camp d'été puis pendant 2 ans en troupe.": "I started scouting with the Vème (fifth) Brest sea-scout troop, with an initial summer camp followed by two years in the troop.",
      "Je suis actuellement chef assistant à la troupe Saint François-Xavier (SUF) de la paroisse Notre-Dame-des-Champs (Paris VI).": "I am currently an assistant troop leader in the Saint François-Xavier troop (SUF) of the Notre-Dame-des-Champs parish (Paris 6th district).",
      "J'ai participé à un camp d'été en 2024, un autre en 2025 et je préparerai mon dernier camp en 2026.": "I took part in a summer camp in 2024, another in 2025, and I will prepare my final camp in 2026.",
      "La particularité de ces groupes est d'être des scouts marins : les camps comprennent une partie voile, en plus des activités scoutes habituelles.": "A specific feature of these groups is that they are sea scouts: camps include a sailing component in addition to regular scouting activities.",
      "Je suis titulaire du CEP1 (qualification d'encadrement scout, proche dans son rôle du BAFA) et du PSC1.": "I hold the CEP1 (a scouting leadership qualification, similar in purpose to the BAFA youth-leadership certificate) and the PSC1 first-aid certificate.",
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
      "J'ai vécu quatre ans en Allemagne, ce qui m'a donné un lien durable avec la langue et la culture germanophones.": "I lived in Germany for four years, which gave me a lasting connection to the German language and German-speaking culture.",
      "À l'École polytechnique, je suis des cours d'allemand de niveau C1, en particulier un cours de philosophie et un autre sur la musique chorale classique allemande.": "At École polytechnique, I follow C1-level German courses, especially one in philosophy and another on German classical choral music.",
      "J'apprécie la littérature allemande et la musique classique de l'espace germanique, notamment Bach, Mozart, Schubert et Schumann.": "I appreciate German literature and classical music from the Germanic sphere, notably Bach, Mozart, Schubert, and Schumann.",
      "J'ai effectué un stage de trois mois chez Deutsche Telekom, à Bonn, ce qui m'a permis de renforcer ma pratique professionnelle de l'allemand.": "I completed a three-month internship at Deutsche Telekom in Bonn, which strengthened my professional use of German.",
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
      "J'ai commencé le scoutisme à la troupe Vème (cinquième) marine Brest, avec un premier camp d'été puis pendant 2 ans en troupe.": "Ich habe mit dem Pfadfinden in der Vème (fünften) marinen Truppe in Brest begonnen, mit einem ersten Sommerlager und anschließend zwei Jahren in der Truppe.",
      "Je suis actuellement chef assistant à la troupe Saint François-Xavier (SUF) de la paroisse Notre-Dame-des-Champs (Paris VI).": "Ich bin derzeit Assistenz-Truppführer in der Truppe Saint François-Xavier (SUF) der Pfarrei Notre-Dame-des-Champs (Paris VI).",
      "J'ai participé à un camp d'été en 2024, un autre en 2025 et je préparerai mon dernier camp en 2026.": "Ich habe 2024 an einem Sommerlager teilgenommen, 2025 an einem weiteren und bereite mein letztes Lager 2026 vor.",
      "La particularité de ces groupes est d'être des scouts marins : les camps comprennent une partie voile, en plus des activités scoutes habituelles.": "Die Besonderheit dieser Gruppen ist ihre maritime Ausrichtung: Die Lager umfassen einen Segelteil zusätzlich zu den üblichen Pfadfinderaktivitäten.",
      "Je suis titulaire du CEP1 (qualification d'encadrement scout, proche dans son rôle du BAFA) et du PSC1.": "Ich bin Inhaber des CEP1 (eine Pfadfinder-Leitungsqualifikation, in ihrer Funktion dem BAFA ähnlich) und des PSC1.",
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
      "J'ai vécu quatre ans en Allemagne, ce qui m'a donné un lien durable avec la langue et la culture germanophones.": "Ich habe vier Jahre in Deutschland gelebt, was mir eine dauerhafte Verbundenheit mit der Sprache und der deutschsprachigen Kultur gegeben hat.",
      "À l'École polytechnique, je suis des cours d'allemand de niveau C1, en particulier un cours de philosophie et un autre sur la musique chorale classique allemande.": "An der École polytechnique besuche ich Deutschkurse auf C1-Niveau, insbesondere einen Philosophiekurs und einen weiteren zur deutschen klassischen Chormusik.",
      "J'apprécie la littérature allemande et la musique classique de l'espace germanique, notamment Bach, Mozart, Schubert et Schumann.": "Ich schätze die deutsche Literatur und die klassische Musik des deutschsprachigen Raums, insbesondere Bach, Mozart, Schubert und Schumann.",
      "J'ai effectué un stage de trois mois chez Deutsche Telekom, à Bonn, ce qui m'a permis de renforcer ma pratique professionnelle de l'allemand.": "Ich absolvierte ein dreimonatiges Praktikum bei der Deutschen Telekom in Bonn, wodurch ich mein berufliches Deutsch vertiefen konnte.",
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

// BEGIN GENERATED CONTENT TRANSLATION PATCH
const CONTENT_TRANSLATIONS_PATCH = {
  "en": {
    "description": {
      "Qiskit": "Qiskit",
      "Jeu vidéo en 3D inspiré de TRON, jouable à 2 joueurs sur le même ordinateur. Deux motos navigent sur une grille noire brillante et traînent des fils lumineux derrière elles. Les joueurs visent à faire entrer en collision la moto adverse avec les fils (leur ou les leurs), ce qui entraîne la mort du joueur touché. Entièrement codé en C++.": "3D video game inspired by TRON, playable by 2 players on the same computer. Two motorcycles navigate a shiny black grid and trail light wires behind them. Players aim to cause the opposing motorcycle to collide with the wires (theirs), resulting in the death of the affected player. Entirely coded in C++.",
      "C++": "C++",
      "Introduction aux concepts fondamentaux de la mécanique des milieux continus dans le cadre simplifié des structures élancées (fils, tiges, poutres, arcs élastiques).": "Introduction to the fundamental concepts of continuum mechanics in the simplified framework of slender structures (wires, rods, beams, elastic arcs).",
      "Formulation des problèmes mécaniques : efforts intérieurs et extérieurs, équations d'équilibre, conditions aux limites et lois de comportement élastiques.": "Formulation of mechanical problems: interior and exterior forces, equilibrium equations, boundary conditions and elastic behavior laws.",
      "Étude de la statique et des instabilités (flambement) et introduction à la formulation variationnelle et aux approches énergétiques, en vue de la méthode des éléments finis.": "Study of statics and instabilities (buckling) and introduction to variational formulation and energy approaches, with a view to the finite element method.",
      "Cinématique des milieux continus en trois dimensions : transformations, tenseurs de déformation, descriptions lagrangienne et eulérienne.": "Kinematics of continuous media in three dimensions: transformations, deformation tensors, Lagrangian and Eulerian descriptions.",
      "Lois de bilan (masse, quantité de mouvement, moment cinétique), tenseur des contraintes et lois de comportement (élasticité isotrope, hyperélasticité).": "Balance laws (mass, momentum, angular momentum), stress tensor and behavioral laws (isotropic elasticity, hyperelasticity).",
      "Formulation et résolution de problèmes d'élasticité en petites et grandes déformations, avec introduction aux principes variationnelles et aux méthodes énergétiques.": "Formulation and resolution of elasticity problems in small and large deformations, with introduction to variational principles and energy methods.",
      "Définition d'un fluide, propriétés physiques et forces qui génèrent ou limitent son mouvement.": "Definition of a fluid, physical properties and forces that generate or limit its movement.",
      "Équations de Navier–Stokes, écoulements incompressibles et compressibles.": "Navier–Stokes equations, incompressible and compressible flows.",
      "Analyse dimensionnelle, similitude et applications aux écoulements réels : régimes où l’inertie ou la viscosité domine, couches limites, écoulements autour des corps et premières notions d’instabilités.": "Dimensional analysis, similarity and applications to real flows: regimes where inertia or viscosity dominates, boundary layers, flows around bodies and first notions of instabilities.",
      "Le cours traite des comportements non linéaires des matériaux en petites déformations, avec un accent sur la viscoélasticité, la plasticité et la viscoplasticité.": "The course deals with the nonlinear behaviors of materials in small deformations, with an emphasis on viscoelasticity, plasticity and viscoplasticity.",
      "Il relie les mécanismes physiques aux lois de comportement macroscopiques, dans un cadre mécanique puis thermomécanique, et présente les essais utilisés pour identifier les paramètres des modèles.": "It links physical mechanisms to macroscopic behavioral laws, in a mechanical then thermomechanical framework, and presents the tests used to identify the model parameters.",
      "Une partie est consacrée à l’implémentation numérique des lois de comportement et au passage du matériau à la structure sur des cas de chargements thermomécaniques.": "A part is devoted to the digital implementation of the laws of behavior and the transition from material to structure on cases of thermomechanical loading.",
      "Ce cours m’a permis de mieux relier phénomènes physiques, modélisation constitutive et analyse de structures au-delà du domaine élastique.": "This course allowed me to better connect physical phenomena, constitutive modeling and analysis of structures beyond the elastic domain.",
      "Le cours présente les bases de la résolution numérique en mécanique des milieux continus : systèmes linéaires et non linéaires, équations différentielles ordinaires et partielles, problèmes aux valeurs initiales et aux limites.": "The course presents the basics of numerical resolution in continuum mechanics: linear and nonlinear systems, ordinary and partial differential equations, problems with initial values ​​and limits.",
      "Il développe ensuite la méthode des éléments finis, de la formulation variationnelle à la discrétisation, puis ses étapes de mise en œuvre : maillage, fonctions de forme, intégration numérique, assemblage et post-traitement.": "He then develops the finite element method, from variational formulation to discretization, then its implementation stages: meshing, shape functions, numerical integration, assembly and post-processing.",
      "Les notions sont appliquées à des cas de poutres, plaques et solides en statique et en dynamique, avec des implémentations progressives en Python dans des notebooks Jupyter.": "The concepts are applied to cases of beams, plates and solids in statics and dynamics, with progressive implementations in Python in Jupyter notebooks.",
      "Ce cours m’a apporté une vraie autonomie sur la chaîne complète d’un calcul numérique, de la modélisation à l’interprétation des résultats.": "This course gave me real autonomy over the entire chain of a numerical calculation, from modeling to interpretation of the results.",
      "Le cours donne une vision d’ensemble des phénomènes dynamiques en mécanique des solides, en régimes harmonique et transitoire, en reliant vibrations, ondes et dynamique structurale.": "The course gives an overview of dynamic phenomena in solid mechanics, in harmonic and transient regimes, by linking vibrations, waves and structural dynamics.",
      "La progression va des systèmes discrets (un degré de liberté puis N degrés de liberté) vers les milieux continus, avec des applications sur les poutres, les solides élastiques et les problèmes de stabilité.": "The progression goes from discrete systems (one degree of freedom then N degrees of freedom) to continuous media, with applications on beams, elastic solids and stability problems.",
      "Des thèmes avancés sont abordés, notamment la dynamique des milieux structurés et la dynamique non linéaire, avec un appui fort sur les PC et l’implémentation numérique en Python.": "Advanced themes are covered, notably the dynamics of structured environments and nonlinear dynamics, with strong support on PCs and digital implementation in Python.",
      "Ce cours m’a permis de mieux passer du modèle physique à l’outil de calcul pour analyser des phénomènes vibratoires complexes.": "This course allowed me to better move from the physical model to the calculation tool to analyze complex vibrational phenomena.",
      "Après des rappels sur les poutres et les plaques, le cours est centré sur des projets concrets de conception et de dimensionnement issus de problématiques industrielles.": "After reminders about beams and plates, the course focuses on concrete design and sizing projects arising from industrial issues.",
      "Les sujets couvrent le génie civil, le génie mécanique et la modélisation de composants, avec des approches analytiques, numériques ou expérimentales selon le besoin.": "Topics cover civil engineering, mechanical engineering and component modeling, with analytical, numerical or experimental approaches as appropriate.",
      "Le travail en binôme met l’accent sur la démarche d’ingénieur : hypothèses de modélisation, choix des méthodes, justification des résultats et prise en compte des contraintes de conception.": "Pair work emphasizes the engineering approach: modeling hypotheses, choice of methods, justification of results and consideration of design constraints.",
      "Ce cours m’a apporté une expérience proche des pratiques industrielles, avec une meilleure capacité d’argumentation technique sur des choix de dimensionnement.": "This course gave me experience close to industrial practices, with a better capacity for technical argumentation on sizing choices.",
      "Le cours fournit un cadre unifié pour modéliser des systèmes où interagissent plusieurs physiques, notamment en énergétique, biomédical, durabilité des structures et capteurs/actionneurs.": "The course provides a unified framework for modeling systems where several physics interact, notably in energy, biomedical, structural durability and sensors/actuators.",
      "Il aborde le point de vue énergétique et thermodynamique, puis la construction de lois de comportement adaptées aux sollicitations multiphysiques, avec de nombreux exemples industriels.": "It addresses the energy and thermodynamic point of view, then the construction of behavioral laws adapted to multiphysics demands, with numerous industrial examples.",
      "Les applications traitées incluent les couplages chimio-mécaniques, la thermo-mécanique des matériaux actifs, la thermo-piézo-électricité et les schémas numériques dédiés aux problèmes d’évolution.": "The applications covered include chemo-mechanical couplings, thermo-mechanics of active materials, thermo-piezo-electricity and numerical schemes dedicated to evolution problems.",
      "Ce cours m’a donné une vision intégrée des couplages physiques et des outils pour construire des modèles robustes de systèmes complexes.": "This course gave me an integrated vision of physical couplings and the tools to build robust models of complex systems.",
      "Le cours relie les bases d’élasticité à la modélisation des phénomènes de fissuration et de rupture, à partir d’observations expérimentales et d’exemples d’incidents structuraux.": "The course links the bases of elasticity to the modeling of cracking and rupture phenomena, based on experimental observations and examples of structural incidents.",
      "L’approche repose sur des concepts énergétiques et variationnels pour construire des modèles utiles au calcul et au dimensionnement de structures sollicitées mécaniquement.": "The approach is based on energy and variational concepts to build models useful for the calculation and sizing of mechanically stressed structures.",
      "Une partie numérique met en œuvre ces modèles par éléments finis en Python, avec analyse des champs de contraintes et simulation de propagation de fissures en 2D.": "A numerical part implements these finite element models in Python, with analysis of stress fields and simulation of crack propagation in 2D.",
      "Ce cours m’a permis d’articuler compréhension physique de la rupture, cadre théorique et simulation pour anticiper les mécanismes de défaillance.": "This course allowed me to combine the physical understanding of rupture, the theoretical framework and simulation to anticipate failure mechanisms.",
      "Le cours complète la mécanique des milieux continus en traitant les non-linéarités géométriques et le comportement des solides hors du cadre des petites perturbations.": "The course completes the mechanics of continuous media by treating geometric nonlinearities and the behavior of solids outside the framework of small disturbances.",
      "Il reprend la cinématique en grandes transformations, les tenseurs de contraintes associés, puis les lois de comportement non linéaires isotropes et anisotropes.": "It takes up the kinematics in large transformations, the associated stress tensors, then the isotropic and anisotropic nonlinear laws of behavior.",
      "Il aborde aussi les effets des précontraintes et contraintes résiduelles, les vibrations autour d’un état tendu, ainsi que des comportements non standards (croissance, polymérisation induite, viscoélasticité).": "It also addresses the effects of prestresses and residual stresses, vibrations around a tense state, as well as non-standard behaviors (growth, induced polymerization, viscoelasticity).",
      "Ce cours m’a permis de mieux modéliser des structures soumises à de fortes déformations et d’intégrer l’effet des contraintes internes dans l’analyse mécanique.": "This course allowed me to better model structures subjected to strong deformations and to integrate the effect of internal stresses into the mechanical analysis.",
      "Le cours combine des présentations sur la microfluidique, la nanophysique et la bioingénierie avec une réflexion sur la propriété intellectuelle, le transfert technologique et l’entrepreneuriat scientifique.": "The course combines presentations on microfluidics, nanophysics and bioengineering with reflection on intellectual property, technology transfer and scientific entrepreneurship.",
      "Il s’appuie sur des projets courts pour acquérir des briques expérimentales (mesures de fluorescence, culture de bactéries) puis sur un projet long de conception-réalisation d’un laboratoire sur puce.": "It is based on short projects to acquire experimental building blocks (fluorescence measurements, bacteria culture) then on a long project to design and build a laboratory on a chip.",
      "L’ensemble relie état de l’art scientifique, prototypage et applications industrielles innovantes dans une démarche de projet en groupe.": "The whole combines state of the scientific art, prototyping and innovative industrial applications in a group project approach.",
      "Ce cours m’a apporté une expérience concrète de projet interdisciplinaire et une meilleure compréhension du continuum recherche-innovation-industrie.": "This course gave me concrete experience of an interdisciplinary project and a better understanding of the research-innovation-industry continuum.",
      "Le programme couvre les fondamentaux de l'algèbre linéaire, de l'analyse (suites, séries, fonctions, intégration) et de la géométrie, avec une forte exigence de rigueur dans les démonstrations.": "The program covers the fundamentals of linear algebra, analysis (sequences, series, functions, integration) and geometry, with a strong requirement for rigor in the demonstrations.",
      "Une place importante est donnée à la résolution de problèmes, à la modélisation et à l'articulation entre intuition et formalisation mathématique.": "An important place is given to problem solving, modeling and the articulation between intuition and mathematical formalization.",
      "Le rythme soutenu de la prépa m'a permis de consolider des automatismes solides en calcul, en raisonnement et en rédaction mathématique.": "The sustained pace of the preparation allowed me to consolidate solid automatisms in calculation, reasoning and mathematical writing.",
      "Ce cours m'a donné une base très robuste pour aborder ensuite les mathématiques de niveau supérieur à l'École polytechnique.": "This course gave me a very solid foundation to then tackle higher level mathematics at École Polytechnique.",
      "La deuxième année approfondit les structures algébriques, l'analyse différentielle et intégrale, les équations différentielles et les raisonnements de haut niveau attendus aux concours.": "The second year delves deeper into algebraic structures, differential and integral analysis, differential equations and high-level reasoning expected in competitive exams.",
      "Le cadre MP* pousse plus loin la technicité, la rapidité d'exécution et la capacité à relier plusieurs chapitres dans une même résolution.": "The MP* framework pushes further the technicality, the speed of execution and the ability to link several chapters in the same resolution.",
      "Le travail régulier sur des problèmes exigeants m'a fait progresser en synthèse, en précision et en stratégie de résolution.": "Regular work on demanding problems has made me progress in synthesis, precision and resolution strategy.",
      "Ce cours m'a apporté une vraie maturité mathématique, utile ensuite en mécanique, en physique théorique et en modélisation.": "This course gave me real mathematical maturity, which was then useful in mechanics, theoretical physics and modeling.",
      "Socle de compétences en analyse fonctionnelle pour aborder les cours avancés de mathématiques, mécanique et physique théorique.": "Skill base in functional analysis to tackle advanced courses in mathematics, mechanics and theoretical physics.",
      "Étude de la mesure et de l’intégration de Lebesgue, de la transformation de Fourier et de la théorie des espaces de Hilbert.": "Study of Lebesgue measurement and integration, Fourier transformation and Hilbert space theory.",
      "Introduction aux méthodes variationnelles comme cadre unifié pour formuler et analyser des problèmes aux dérivées partielles et de physique mathématique.": "Introduction to variational methods as a unified framework for formulating and analyzing partial differential and mathematical physics problems.",
      "Première partie consacrée à la théorie des fonctions holomorphes : propriétés des fonctions analytiques, intégrale de contour et outils classiques de l’analyse complexe.": "First part devoted to the theory of holomorphic functions: properties of analytical functions, contour integral and classic tools of complex analysis.",
      "Seconde partie dédiée au calcul différentiel dans les espaces de Banach : différentiabilité, théorèmes d’inversion et des fonctions implicites, applications aux équations différentielles.": "Second part dedicated to differential calculus in Banach spaces: differentiability, inversion theorems and implicit functions, applications to differential equations.",
      "Outils mathématiques de base pour les cours de mathématiques appliquées, de physique, de mécanique et d’économie, ainsi que pour les enseignements de niveau M1.": "Basic mathematical tools for courses in applied mathematics, physics, mechanics and economics, as well as for M1 level teaching.",
      "Le programme de physique traite notamment la mécanique, l'électromagnétisme, l'optique et la thermodynamique, en articulant modélisation et expériences.": "The physics program deals in particular with mechanics, electromagnetism, optics and thermodynamics, combining modeling and experiments.",
      "La partie chimie introduit les équilibres, la cinétique, les transformations de la matière et les outils de raisonnement physico-chimique.": "The chemistry part introduces equilibria, kinetics, transformations of matter and physico-chemical reasoning tools.",
      "Les TP et les exercices m'ont appris à passer d'un phénomène concret à un modèle exploitable puis à une interprétation quantitative.": "The practicals and exercises taught me to move from a concrete phenomenon to an exploitable model then to a quantitative interpretation.",
      "Ce cours m'a donné une base expérimentale et conceptuelle solide pour les enseignements de physique avancée suivis ensuite.": "This course gave me a solid experimental and conceptual basis for the advanced physics courses I followed afterwards.",
      "Le cursus MP* renforce l'analyse des systèmes dynamiques, des ondes, de l'électromagnétisme et des phénomènes de transport, avec un niveau de formalisation plus exigeant.": "The MP* course reinforces the analysis of dynamic systems, waves, electromagnetism and transport phenomena, with a more demanding level of formalization.",
      "La chimie conserve un rôle important dans la compréhension des équilibres, des transformations et des ordres de grandeur utiles en ingénierie.": "Chemistry retains an important role in understanding equilibria, transformations and orders of magnitude useful in engineering.",
      "Le travail en problèmes et en TP m'a entraîné à mobiliser rapidement des outils variés pour traiter des situations nouvelles.": "Working with problems and practical work has trained me to quickly mobilize various tools to deal with new situations.",
      "Ce cours m'a apporté des réflexes puissants de modélisation physique et de validation des hypothèses.": "This course gave me powerful reflexes in physical modeling and validation of hypotheses.",
      "Découverte de la dualité onde–corpuscule, de la fonction d’onde et des principes fondamentaux de la physique quantique.": "Discovery of wave–particle duality, the wave function and the fundamental principles of quantum physics.",
      "Étude de systèmes quantiques simples : états de polarisation d’un photon, particule en une dimension, transformée de Fourier en physique quantique.": "Study of simple quantum systems: polarization states of a photon, one-dimensional particle, Fourier transform in quantum physics.",
      "Produit tensoriel, intrication et spin 1/2, de l’expérience de Stern–Gerlach à la résonance magnétique nucléaire.": "Tensor product, entanglement and spin 1/2, from the Stern–Gerlach experiment at nuclear magnetic resonance.",
      "Étude des symétries en physique quantique (translations, rotations) et de leur impact sur les spectres d’énergie, du cristal périodique à l’atome d’hydrogène.": "Study of symmetries in quantum physics (translations, rotations) and their impact on energy spectra, from the periodic crystal to the hydrogen atom.",
      "Méthodes d’approximation (perturbations stationnaires, méthodes variationnelles) pour traiter des systèmes réalistes en mécanique quantique.": "Approximation methods (stationary disturbances, variational methods) to treat realistic systems in quantum mechanics.",
      "Introduction aux particules indiscernables et à la structure des atomes, états non stationnaires et premières applications aux technologies quantiques modernes.": "Introduction to indistinguishable particles and the structure of atoms, non-stationary states and first applications to modern quantum technologies.",
      "Fondements de la relativité restreinte : transformations de Lorentz, optique relativiste et espace-temps de Minkowski.": "Foundations of special relativity: Lorentz transformations, relativistic optics and Minkowski space-time.",
      "Principes variationnels, équations d’Euler–Lagrange, invariances du lagrangien et lois de conservation (énergie, impulsion, moment cinétique).": "Variational principles, Euler–Lagrange equations, Lagrangian invariances and conservation laws (energy, momentum, angular momentum).",
      "Mécanique relativiste et hamiltonienne, relativité et électromagnétisme, ouverture vers la relativité générale et le principe de Feynman.": "Relativistic and Hamiltonian mechanics, relativity and electromagnetism, opening towards general relativity and Feynman's principle.",
      "Ensembles statistiques, notion d’équilibre thermodynamique et dérivation des lois de la thermodynamique (température, entropie, chaleur) sur des systèmes simples comme le gaz parfait.": "Statistical ensembles, notion of thermodynamic equilibrium and derivation of the laws of thermodynamics (temperature, entropy, heat) on simple systems such as the ideal gas.",
      "Statistiques de Fermi–Dirac et de Bose–Einstein pour des particules indiscernables, applications aux métaux, semi-conducteurs et rayonnement électromagnétique.": "Fermi–Dirac and Bose–Einstein statistics for indistinguishable particles, applications to metals, semiconductors and electromagnetic radiation.",
      "Introduction aux transitions de phase et aux phénomènes collectifs, brisure spontanée de symétrie et caractère universel de nombreux comportements physiques et hors-physique.": "Introduction to phase transitions and collective phenomena, spontaneous symmetry breaking and the universal nature of many physical and non-physical behaviors.",
      "Équations de Maxwell dans les milieux matériels (conducteurs, diélectriques, milieux magnétiques) et lien entre propriétés microscopiques et grandeurs macroscopiques (indice, aimantation, conductivité).": "Maxwell's equations in material media (conductors, dielectrics, magnetic media) and link between microscopic properties and macroscopic quantities (index, magnetization, conductivity).",
      "Propagation des ondes électromagnétiques dans le vide et dans des guides, diffraction (Huyghens–Fresnel), champ proche et optique guidée.": "Propagation of electromagnetic waves in vacuum and in guides, diffraction (Huyghens–Fresnel), near field and guided optics.",
      "Rayonnement électromagnétique (particules accélérées, dipôles), diffusion par la matière, calcul de l’indice optique et introduction à la propagation dans les milieux dispersifs et non linéaires.": "Electromagnetic radiation (accelerated particles, dipoles), diffusion by matter, calculation of the optical index and introduction to propagation in dispersive and nonlinear media.",
      "Le tronc commun introduit la programmation structurée (principalement en Python), les structures de données usuelles et les premiers outils d'analyse de complexité.": "The common core introduces structured programming (mainly in Python), common data structures and the first complexity analysis tools.",
      "L'objectif est de savoir concevoir des algorithmes corrects, lisibles et efficaces pour résoudre des problèmes mathématiques et scientifiques.": "The objective is to know how to design correct, readable and efficient algorithms to solve mathematical and scientific problems.",
      "Ce cours m'a appris à formaliser une idée en étapes calculables et à vérifier la robustesse d'une solution.": "This course taught me to formalize an idea into calculable steps and to check the robustness of a solution.",
      "L'option renforce les méthodes de raisonnement algorithmique, la maîtrise des structures de données et la résolution de problèmes plus exigeants.": "The option reinforces algorithmic reasoning methods, mastery of data structures and the solving of more demanding problems.",
      "Le format m'a permis d'aller au-delà des automatismes de base pour travailler la qualité des preuves et la performance des programmes.": "The format allowed me to go beyond basic automation to work on the quality of evidence and the performance of programs.",
      "Ce cours m'a donné le goût des approches plus théoriques de l'informatique, en complément de la pratique de programmation.": "This course gave me a taste for more theoretical approaches to computer science, in addition to programming practice.",
      "Le tronc commun entretient les fondamentaux : rigueur de programmation, analyse de complexité et conception de solutions fiables.": "The common core maintains the fundamentals: programming rigor, complexity analysis and design of reliable solutions.",
      "Il sert de socle méthodologique commun pour traiter les problèmes scientifiques nécessitant une implémentation rapide et juste.": "It serves as a common methodological base to address scientific problems requiring rapid and fair implementation.",
      "Ce cours m'a permis de garder des réflexes solides d'écriture et de vérification d'algorithmes.": "This course allowed me to maintain solid reflexes for writing and verifying algorithms.",
      "Le module renforcé développe des notions plus avancées d'algorithmique et de structures discrètes, avec une exigence forte sur la qualité des raisonnements.": "The enhanced module develops more advanced notions of algorithms and discrete structures, with strong demands on the quality of reasoning.",
      "Il prépare aux problèmes d'informatique de concours, à la fois sur la conception d'algorithmes et sur leur justification.": "It prepares for competitive computer science problems, both on the design of algorithms and on their justification.",
      "Ce cours m'a apporté une meilleure capacité à traiter des problèmes abstraits d'informatique en gardant un ancrage concret d'implémentation.": "This course gave me a better ability to deal with abstract computer science problems while maintaining a concrete anchoring of implementation.",
      "Étude détaillée des fonctionnalités de Java (hors threads) et de leur traduction vers une machine abstraite, avec un lien direct vers l’architecture des ordinateurs.": "Detailed study of Java functionalities (excluding threads) and their translation to an abstract machine, with a direct link to computer architecture.",
      "Implémentation orientée objet de structures de données classiques (piles, files, tableaux dynamiques, arbres, tables de hachage) et analyse de leur représentation mémoire.": "Object-oriented implementation of classic data structures (stacks, queues, dynamic arrays, trees, hash tables) and analysis of their memory representation.",
      "Introduction à la compilation (analyse syntaxique, génération de code, optimisations), utilisation d’une bibliothèque graphique et preuves de propriétés de programmes via la logique de Hoare.": "Introduction to compilation (syntactic analysis, code generation, optimizations), use of a graphics library and proofs of program properties via Hoare logic.",
      "Concepts fondamentaux de la synthèse d’images à partir de modèles 3D : rendu projectif, éclairage, textures et bases de l’animation.": "Fundamental concepts of image synthesis from 3D models: projective rendering, lighting, textures and basics of animation.",
      "Techniques de modélisation géométrique et approches procédurales ou interactives pour construire des scènes 3D virtuelles.": "Geometric modeling techniques and procedural or interactive approaches to construct virtual 3D scenes.",
      "Programmation graphique interactive en C++/OpenGL à travers TPs et mini-projet de monde virtuel 3D, avec ouverture vers réalité virtuelle/augmentée et comportements « intelligents » des personnages.": "Interactive graphics programming in C++/OpenGL through TPs and mini-3D virtual world project, with opening to virtual/augmented reality and “intelligent” behavior of the characters.",
      "Notions de probabilité discrète et continue : conditionnement, indépendance, variables aléatoires, lois usuelles et espérance.": "Concepts of discrete and continuous probability: conditioning, independence, random variables, usual laws and expectation.",
      "Vecteurs aléatoires, convergence des suites de variables aléatoires, lois des grands nombres et théorème central limite.": "Random vectors, convergence of sequences of random variables, laws of large numbers and central limit theorem.",
      "Premiers outils de statistique (estimateurs, intervalles de confiance) et mise en pratique par des simulations Python et un projet de modélisation probabiliste.": "First statistical tools (estimators, confidence intervals) and practical application through Python simulations and a probabilistic modeling project.",
      "Introduction aux chaînes de Markov et aux martingales comme modèles fondamentaux de phénomènes aléatoires dépendant du temps.": "Introduction to Markov chains and martingales as fundamental models of time-dependent random phenomena.",
      "Applications à des domaines variés : télécommunications, réseaux, économie, biologie, propagation d’épidémies et physique statistique.": "Applications to various fields: telecommunications, networks, economics, biology, propagation of epidemics and statistical physics.",
      "Analyse du comportement asymptotique et outils pour la prédiction et la gestion du risque dans des systèmes soumis à l’aléa.": "Analysis of asymptotic behavior and tools for predicting and managing risk in systems subject to hazard.",
      "Présentation des notions d’offre, de demande et d’équilibre de marché, et analyse des conditions d’efficacité et des défaillances de marché.": "Presentation of the notions of supply, demand and market equilibrium, and analysis of efficiency conditions and market failures.",
      "Introduction au commerce international, à l’économie publique, à la concurrence imparfaite et à la théorie des jeux avec asymétries d’information.": "Introduction to international trade, public economics, imperfect competition and the theory of games with information asymmetries.",
      "Premiers éléments d’économie du travail, de marchés financiers et de macroéconomie, avec mise en perspective de grandes problématiques économiques contemporaines.": "First elements of labor economics, financial markets and macroeconomics, with perspective on major contemporary economic issues.",
      "Le cours articule lecture comparée d'oeuvres philosophiques et littéraires, analyse conceptuelle et entraînement méthodique à la dissertation.": "The course combines comparative reading of philosophical and literary works, conceptual analysis and methodical dissertation training.",
      "Le thème de l'enfance conduit à interroger l'éducation, la formation du sujet, la mémoire, la transmission et la construction de la liberté.": "The theme of childhood leads to questions about education, the formation of the subject, memory, transmission and the construction of freedom.",
      "Le travail hebdomadaire m'a entraîné à problématiser rapidement, structurer une argumentation solide et soigner la précision de l'expression.": "The weekly work trained me to problematize quickly, structure a solid argument and pay attention to the precision of expression.",
      "Ce cours m'a apporté une méthode durable de réflexion et de rédaction, utile bien au-delà des concours.": "This course gave me a lasting method of thinking and writing, useful well beyond competitions.",
      "Le thème du travail permet d'examiner les dimensions économiques, sociales, politiques et existentielles de l'activité humaine.": "The theme of work allows us to examine the economic, social, political and existential dimensions of human activity.",
      "Le cours combine étude d'oeuvres, clarification des concepts, confrontation des positions d'auteurs et entraînement intensif à l'écrit.": "The course combines study of works, clarification of concepts, comparison of authors' positions and intensive writing training.",
      "Il m'a aidé à mieux articuler lecture fine des textes, mise en perspective historique et argumentation personnelle rigoureuse.": "It helped me to better articulate detailed reading of texts, historical perspective and rigorous personal argumentation.",
      "Ce cours m'a renforcé en culture générale et en qualité d'expression, avec un impact direct sur mes présentations et écrits académiques.": "This course strengthened my general knowledge and quality of expression, with a direct impact on my presentations and academic writings.",
      "Le cours analyse la manière dont les enjeux de défense s’inscrivent dans un ordre mondial en recomposition, entre retour des rivalités de puissance, conflictualités hybrides et transformations de la souveraineté.": "The course analyzes the way in which defense issues are part of a world order in reorganization, between the return of power rivalries, hybrid conflicts and transformations of sovereignty.",
      "Il mobilise les cadres des relations internationales et des war studies pour étudier les logiques d’alliance, de dissuasion, d’interdépendance et de compétition stratégique.": "It mobilizes the frameworks of international relations and war studies to study the logics of alliance, deterrence, interdependence and strategic competition.",
      "Le séminaire thématique couvre notamment le lien armée-société, le rôle des organisations internationales, la dissuasion nucléaire française, la cybersécurité, les politiques industrielles de défense et l’impact des technologies émergentes.": "The thematic seminar covers in particular the army-society link, the role of international organizations, French nuclear deterrence, cybersecurity, defense industrial policies and the impact of emerging technologies.",
      "Les interventions de praticiens et d’experts permettent d’articuler concepts théoriques et enjeux opérationnels actuels.": "The interventions of practitioners and experts make it possible to articulate theoretical concepts and current operational issues.",
      "Ce cours m’a donné des repères solides pour lire les équilibres géopolitiques contemporains et comprendre leurs implications concrètes en matière de défense.": "This course gave me solid benchmarks for reading contemporary geopolitical balances and understanding their concrete implications in terms of defense.",
      "Le cours part d’un constat central : la démocratie est aujourd’hui universellement valorisée dans le langage politique, tout en faisant l’objet d’une défiance croissante dans les pratiques.": "The course starts from a central observation: democracy is today universally valued in political language, while being the subject of growing mistrust in practice.",
      "Il interroge cette tension entre idéal démocratique et désaffection civique, en analysant notamment la crise de la représentation, la montée de l’abstention et la distance entre gouvernants et gouvernés.": "He questions this tension between democratic ideal and civic disaffection, analyzing in particular the crisis of representation, the rise in abstention and the distance between those who govern and those who are governed.",
      "Le parcours mobilise des références philosophiques et historiques, de l’Antiquité à la période contemporaine, pour comprendre comment la démocratie est passée d’un régime critiqué à un horizon politique quasi incontournable.": "The route uses philosophical and historical references, from Antiquity to the contemporary period, to understand how democracy went from a criticized regime to an almost unavoidable political horizon.",
      "Ce cours m’a apporté des outils d’analyse rigoureux pour articuler concepts philosophiques et enjeux institutionnels actuels.": "This course provided me with rigorous analytical tools to articulate philosophical concepts and current institutional issues.",
      "Le cours étudie l’empire dans la longue durée, du modèle romain aux impérialismes modernes, afin de définir la notion et d’en dégager une typologie (territoriale, coloniale, idéologique).": "The course studies the empire over the long term, from the Roman model to modern imperialisms, in order to define the notion and identify a typology (territorial, colonial, ideological).",
      "Il analyse l’effacement des empires au XXe siècle, puis leur retour dans les débats géopolitiques récents, en lien avec les notions d’hégémonie, de leadership et d’ordre international.": "It analyzes the disappearance of empires in the 20th century, then their return in recent geopolitical debates, in connection with the notions of hegemony, leadership and international order.",
      "La pluralité des interventions permet de comparer des cas variés (pharaonique, assyrien, perse, romain, carolingien, arabo-islamique, austro-hongrois, coloniaux) et de comprendre les logiques de durée, de circulation et d’identités multiples.": "The plurality of interventions makes it possible to compare various cases (Pharaonic, Assyrian, Persian, Roman, Carolingian, Arab-Islamic, Austro-Hungarian, colonial) and to understand the logics of duration, circulation and multiple identities.",
      "Ce cours m’a permis d’affiner ma lecture historique des rapports de puissance et des formes politiques à grande échelle.": "This course allowed me to refine my historical reading of power relations and large-scale political forms.",
      "Le cours combine science politique et droit constitutionnel pour présenter les notions clés du constitutionnalisme, de l’État et des régimes politiques.": "The course combines political science and constitutional law to present the key notions of constitutionalism, the State and political regimes.",
      "Il étudie les interactions entre exécutif et législatif, puis les institutions en action à travers la réforme de l’État, l’organisation territoriale, l’action publique et les mécanismes électoraux.": "It studies the interactions between the executive and the legislature, then the institutions in action through state reform, territorial organization, public action and electoral mechanisms.",
      "Des comparaisons historiques et internationales permettent de situer les spécificités françaises dans un cadre plus large.": "Historical and international comparisons make it possible to situate French specificities in a broader framework.",
      "Ce cours m’a donné une base solide pour analyser les institutions, leurs acteurs et leurs transformations dans le temps.": "This course gave me a solid foundation for analyzing institutions, their actors and their transformations over time.",
      "Le cours montre comment la démocratie républicaine s’enracine au tournant des XIXe et XXe siècles, en articulant institutions, culture politique et pratiques sociales.": "The course shows how republican democracy took root at the turn of the 19th and 20th centuries, articulating institutions, political culture and social practices.",
      "L’approche est thématique : élections, presse, libertés, sociabilités politiques, question sociale, radicalisme, nationalismes, place des religions et rapports entre élus et citoyens.": "The approach is thematic: elections, press, freedoms, political sociability, social question, radicalism, nationalism, place of religions and relationships between elected officials and citizens.",
      "Une attention particulière est portée aux sources culturelles et iconographiques, ainsi qu’aux continuités et ruptures entre la Belle Époque et la période de l’après-guerre.": "Particular attention is paid to cultural and iconographic sources, as well as to the continuities and ruptures between the Belle Époque and the post-war period.",
      "Ce cours m’a aidé à relier histoire politique, histoire culturelle et enjeux contemporains de la démocratie.": "This course helped me connect political history, cultural history and contemporary issues of democracy.",
      "Le cours interroge le paradoxe de l’après-1989 : une promesse de pacification globale, mais une persistance de conflits interétatiques, de violences civiles internationalisées et de violences terroristes.": "The course questions the paradox of post-1989: a promise of global pacification, but a persistence of interstate conflicts, internationalized civil violence and terrorist violence.",
      "Il mobilise les grandes approches des relations internationales (réalistes, libérales, constructivistes, critiques) pour analyser les logiques de guerre, de dissuasion, d’hégémonie, d’interdépendance et de reconnaissance.": "It mobilizes the major approaches to international relations (realist, liberal, constructivist, critical) to analyze the logics of war, deterrence, hegemony, interdependence and recognition.",
      "Les séances s’appuient sur des cas empiriques concrets (Europe, Moyen-Orient, Russie, Chine, etc.) pour articuler concepts politistes et dynamiques géopolitiques contemporaines.": "The sessions are based on concrete empirical cases (Europe, Middle East, Russia, China, etc.) to articulate political concepts and contemporary geopolitical dynamics.",
      "Ce cours m’a donné des repères solides pour lire les rapports de force internationaux au-delà de l’actualité immédiate.": "This course gave me solid benchmarks for reading international power relations beyond immediate news.",
      "Le séminaire explore l’opéra comme rencontre du chant, de la musique, du théâtre et de la mise en scène, avec une attention aux styles, aux grandes œuvres, aux voix et aux compositeurs.": "The seminar explores opera as a meeting of singing, music, theater and staging, with attention to styles, great works, voices and composers.",
      "Il montre aussi l’envers du décor : coordination d’équipes artistiques et techniques, contraintes de production, arbitrages de programmation et exigences de qualité dans une grande institution culturelle.": "It also shows behind the scenes: coordination of artistic and technical teams, production constraints, programming decisions and quality requirements in a large cultural institution.",
      "Le format combine cours à l’X et immersion sur le terrain (répétitions et représentations), afin d’observer concrètement les étapes qui précèdent la représentation publique.": "The format combines courses at the X and immersion in the field (rehearsals and performances), in order to concretely observe the stages which precede the public performance.",
      "Ce cours m’a apporté une meilleure compréhension des liens entre création artistique, organisation collective et exigence d’exécution.": "This course gave me a better understanding of the links between artistic creation, collective organization and execution requirements.",
      "Le cours part du constat que les organisations (entreprises, laboratoires, services publics, etc.) structurent l’action collective et constituent le cadre principal de la vie professionnelle.": "The course starts from the observation that organizations (companies, laboratories, public services, etc.) structure collective action and constitute the main framework of professional life.",
      "Il montre que leur fonctionnement repose sur des dimensions à la fois techniques et humaines, et mobilise les apports des sciences de gestion pour mieux comprendre leurs logiques internes et externes.": "It shows that their functioning is based on both technical and human dimensions, and mobilizes the contributions of management sciences to better understand their internal and external logics.",
      "L’objectif est d’acquérir des repères concrets pour décoder ces dynamiques et mieux y agir, notamment en stage puis dans des responsabilités futures.": "The objective is to acquire concrete benchmarks to decode these dynamics and act better, particularly during internships and then in future responsibilities.",
      "Ce cours m’a donné des clés utiles pour analyser une organisation de manière systémique et y prendre des décisions plus pertinentes.": "This course gave me useful keys to analyze an organization in a systemic way and make more relevant decisions.",
      "Le cours compare les grands modèles de gouvernance, notamment les approches « shareholder » et « stakeholder », et analyse leurs effets sur la définition des objectifs et la création de valeur.": "The course compares major governance models, notably the “shareholder” and “stakeholder” approaches, and analyzes their effects on the definition of objectives and the creation of value.",
      "Il aborde la montée de la valeur actionnariale, les mécanismes d’incitation des dirigeants, les limites d’une lecture purement financière de la performance, et l’intégration des enjeux ESG.": "It addresses the rise in shareholder value, incentive mechanisms for managers, the limits of a purely financial reading of performance, and the integration of ESG issues.",
      "Une place importante est donnée à la finance durable : ISR, notation ESG, gestion de portefeuille responsable et articulation avec les politiques RSE des organisations.": "An important place is given to sustainable finance: ISR, ESG rating, responsible portfolio management and coordination with the CSR policies of organizations.",
      "L’ensemble est traité dans une perspective internationale pour comprendre les spécificités des modèles européens par rapport aux cas américains et asiatiques.": "Everything is treated from an international perspective to understand the specificities of European models compared to American and Asian cases.",
      "Ce cours m’a permis de mieux relier stratégie d’entreprise, gouvernance et critères de durabilité dans l’évaluation de la performance.": "This course allowed me to better connect business strategy, governance and sustainability criteria in performance evaluation."
    }
  },
  "de": {
    "description": {
      "Qiskit": "Qiskit",
      "Jeu vidéo en 3D inspiré de TRON, jouable à 2 joueurs sur le même ordinateur. Deux motos navigent sur une grille noire brillante et traînent des fils lumineux derrière elles. Les joueurs visent à faire entrer en collision la moto adverse avec les fils (leur ou les leurs), ce qui entraîne la mort du joueur touché. Entièrement codé en C++.": "Von TRON inspiriertes 3D-Videospiel, spielbar für 2 Spieler auf demselben Computer. Zwei Motorräder navigieren durch ein glänzendes schwarzes Gitter und hinter ihnen verlaufende Lichtkabel. Ziel der Spieler ist es, das gegnerische Motorrad mit den Kabeln (ihrem) kollidieren zu lassen, was zum Tod des betroffenen Spielers führt. Vollständig in C++ codiert.",
      "C++": "C++",
      "Introduction aux concepts fondamentaux de la mécanique des milieux continus dans le cadre simplifié des structures élancées (fils, tiges, poutres, arcs élastiques).": "Einführung in die Grundkonzepte der Kontinuumsmechanik im vereinfachten Rahmen schlanker Strukturen (Drähte, Stäbe, Balken, elastische Bögen).",
      "Formulation des problèmes mécaniques : efforts intérieurs et extérieurs, équations d'équilibre, conditions aux limites et lois de comportement élastiques.": "Formulierung mechanischer Probleme: innere und äußere Kräfte, Gleichgewichtsgleichungen, Randbedingungen und elastische Verhaltensgesetze.",
      "Étude de la statique et des instabilités (flambement) et introduction à la formulation variationnelle et aux approches énergétiques, en vue de la méthode des éléments finis.": "Studium der Statik und Instabilitäten (Knickung) und Einführung in Variationsformulierungs- und Energieansätze mit Blick auf die Finite-Elemente-Methode.",
      "Cinématique des milieux continus en trois dimensions : transformations, tenseurs de déformation, descriptions lagrangienne et eulérienne.": "Kinematik kontinuierlicher Medien in drei Dimensionen: Transformationen, Deformationstensoren, Lagrange- und Eulersche Beschreibungen.",
      "Lois de bilan (masse, quantité de mouvement, moment cinétique), tenseur des contraintes et lois de comportement (élasticité isotrope, hyperélasticité).": "Gleichgewichtsgesetze (Masse, Impuls, Drehimpuls), Spannungstensor und Verhaltensgesetze (isotrope Elastizität, Hyperelastizität).",
      "Formulation et résolution de problèmes d'élasticité en petites et grandes déformations, avec introduction aux principes variationnelles et aux méthodes énergétiques.": "Formulierung und Lösung von Elastizitätsproblemen bei kleinen und großen Verformungen, mit Einführung in Variationsprinzipien und Energiemethoden.",
      "Définition d'un fluide, propriétés physiques et forces qui génèrent ou limitent son mouvement.": "Definition einer Flüssigkeit, physikalischer Eigenschaften und Kräfte, die ihre Bewegung erzeugen oder begrenzen.",
      "Équations de Navier–Stokes, écoulements incompressibles et compressibles.": "Navier-Stokes-Gleichungen, inkompressible und kompressible Strömungen.",
      "Analyse dimensionnelle, similitude et applications aux écoulements réels : régimes où l’inertie ou la viscosité domine, couches limites, écoulements autour des corps et premières notions d’instabilités.": "Dimensionsanalyse, Ähnlichkeit und Anwendungen auf reale Strömungen: Bereiche, in denen Trägheit oder Viskosität dominieren, Grenzschichten, Strömungen um Körper und erste Vorstellungen von Instabilitäten.",
      "Le cours traite des comportements non linéaires des matériaux en petites déformations, avec un accent sur la viscoélasticité, la plasticité et la viscoplasticité.": "Der Kurs befasst sich mit dem nichtlinearen Verhalten von Materialien bei kleinen Verformungen, wobei der Schwerpunkt auf Viskoelastizität, Plastizität und Viskoplastizität liegt.",
      "Il relie les mécanismes physiques aux lois de comportement macroscopiques, dans un cadre mécanique puis thermomécanique, et présente les essais utilisés pour identifier les paramètres des modèles.": "Es verknüpft physikalische Mechanismen mit makroskopischen Verhaltensgesetzen in einem mechanischen und dann thermomechanischen Rahmen und stellt die Tests vor, die zur Identifizierung der Modellparameter verwendet werden.",
      "Une partie est consacrée à l’implémentation numérique des lois de comportement et au passage du matériau à la structure sur des cas de chargements thermomécaniques.": "Ein Teil ist der digitalen Umsetzung der Verhaltensgesetze und des Übergangs vom Material zur Struktur bei thermomechanischen Belastungen gewidmet.",
      "Ce cours m’a permis de mieux relier phénomènes physiques, modélisation constitutive et analyse de structures au-delà du domaine élastique.": "Dieser Kurs ermöglichte es mir, physikalische Phänomene, konstitutive Modellierung und Analyse von Strukturen außerhalb des elastischen Bereichs besser zu verbinden.",
      "Le cours présente les bases de la résolution numérique en mécanique des milieux continus : systèmes linéaires et non linéaires, équations différentielles ordinaires et partielles, problèmes aux valeurs initiales et aux limites.": "Der Kurs vermittelt die Grundlagen der numerischen Auflösung in der Kontinuumsmechanik: lineare und nichtlineare Systeme, gewöhnliche und partielle Differentialgleichungen, Probleme mit Anfangswerten und Grenzen.",
      "Il développe ensuite la méthode des éléments finis, de la formulation variationnelle à la discrétisation, puis ses étapes de mise en œuvre : maillage, fonctions de forme, intégration numérique, assemblage et post-traitement.": "Anschließend entwickelt er die Finite-Elemente-Methode, von der Variationsformulierung bis zur Diskretisierung, dann ihre Implementierungsstufen: Vernetzung, Formfunktionen, numerische Integration, Montage und Nachbearbeitung.",
      "Les notions sont appliquées à des cas de poutres, plaques et solides en statique et en dynamique, avec des implémentations progressives en Python dans des notebooks Jupyter.": "Die Konzepte werden auf Fälle von Balken, Platten und Festkörpern in der Statik und Dynamik angewendet, mit progressiven Implementierungen in Python in Jupyter-Notebooks.",
      "Ce cours m’a apporté une vraie autonomie sur la chaîne complète d’un calcul numérique, de la modélisation à l’interprétation des résultats.": "Dieser Kurs gab mir echte Autonomie über die gesamte Kette einer numerischen Berechnung, von der Modellierung bis zur Interpretation der Ergebnisse.",
      "Le cours donne une vision d’ensemble des phénomènes dynamiques en mécanique des solides, en régimes harmonique et transitoire, en reliant vibrations, ondes et dynamique structurale.": "Der Kurs gibt einen Überblick über dynamische Phänomene in der Festkörpermechanik, in harmonischen und transienten Regimen, indem er Vibrationen, Wellen und Strukturdynamik verknüpft.",
      "La progression va des systèmes discrets (un degré de liberté puis N degrés de liberté) vers les milieux continus, avec des applications sur les poutres, les solides élastiques et les problèmes de stabilité.": "Der Fortschritt geht von diskreten Systemen (ein Freiheitsgrad, dann N Freiheitsgrade) zu kontinuierlichen Medien mit Anwendungen auf Balken, elastischen Festkörpern und Stabilitätsproblemen.",
      "Des thèmes avancés sont abordés, notamment la dynamique des milieux structurés et la dynamique non linéaire, avec un appui fort sur les PC et l’implémentation numérique en Python.": "Es werden fortgeschrittene Themen behandelt, insbesondere die Dynamik strukturierter Umgebungen und die nichtlineare Dynamik, mit starker Unterstützung auf PCs und digitaler Implementierung in Python.",
      "Ce cours m’a permis de mieux passer du modèle physique à l’outil de calcul pour analyser des phénomènes vibratoires complexes.": "Dieser Kurs ermöglichte mir einen besseren Übergang vom physikalischen Modell zum Berechnungstool zur Analyse komplexer Schwingungsphänomene.",
      "Après des rappels sur les poutres et les plaques, le cours est centré sur des projets concrets de conception et de dimensionnement issus de problématiques industrielles.": "Nach Erinnerungen an Träger und Platten konzentriert sich der Kurs auf konkrete Entwurfs- und Dimensionierungsprojekte, die sich aus industriellen Fragestellungen ergeben.",
      "Les sujets couvrent le génie civil, le génie mécanique et la modélisation de composants, avec des approches analytiques, numériques ou expérimentales selon le besoin.": "Die Themen umfassen Bauingenieurwesen, Maschinenbau und Komponentenmodellierung, je nach Bedarf mit analytischen, numerischen oder experimentellen Ansätzen.",
      "Le travail en binôme met l’accent sur la démarche d’ingénieur : hypothèses de modélisation, choix des méthodes, justification des résultats et prise en compte des contraintes de conception.": "Bei der Paararbeit liegt der Schwerpunkt auf dem ingenieurwissenschaftlichen Ansatz: Modellhypothesen, Auswahl der Methoden, Begründung der Ergebnisse und Berücksichtigung von Designbeschränkungen.",
      "Ce cours m’a apporté une expérience proche des pratiques industrielles, avec une meilleure capacité d’argumentation technique sur des choix de dimensionnement.": "Dieser Kurs vermittelte mir Erfahrungen in der Nähe industrieller Praktiken und eine bessere Fähigkeit zur technischen Argumentation bei Größenentscheidungen.",
      "Le cours fournit un cadre unifié pour modéliser des systèmes où interagissent plusieurs physiques, notamment en énergétique, biomédical, durabilité des structures et capteurs/actionneurs.": "Der Kurs bietet einen einheitlichen Rahmen für die Modellierung von Systemen, bei denen verschiedene physikalische Aspekte interagieren, insbesondere in den Bereichen Energie, Biomedizin, strukturelle Haltbarkeit und Sensoren/Aktuatoren.",
      "Il aborde le point de vue énergétique et thermodynamique, puis la construction de lois de comportement adaptées aux sollicitations multiphysiques, avec de nombreux exemples industriels.": "Es befasst sich mit der energetischen und thermodynamischen Sichtweise und anschließend mit der Konstruktion von Verhaltensgesetzen, die an die Anforderungen der Multiphysik angepasst sind, anhand zahlreicher industrieller Beispiele.",
      "Les applications traitées incluent les couplages chimio-mécaniques, la thermo-mécanique des matériaux actifs, la thermo-piézo-électricité et les schémas numériques dédiés aux problèmes d’évolution.": "Zu den abgedeckten Anwendungen gehören chemomechanische Kopplungen, Thermomechanik aktiver Materialien, Thermopiezoelektrizität und numerische Schemata für Evolutionsprobleme.",
      "Ce cours m’a donné une vision intégrée des couplages physiques et des outils pour construire des modèles robustes de systèmes complexes.": "Dieser Kurs vermittelte mir eine ganzheitliche Sicht auf physikalische Kopplungen und die Werkzeuge zum Aufbau robuster Modelle komplexer Systeme.",
      "Le cours relie les bases d’élasticité à la modélisation des phénomènes de fissuration et de rupture, à partir d’observations expérimentales et d’exemples d’incidents structuraux.": "Der Kurs verknüpft die Grundlagen der Elastizität mit der Modellierung von Riss- und Bruchphänomenen, basierend auf experimentellen Beobachtungen und Beispielen struktureller Vorfälle.",
      "L’approche repose sur des concepts énergétiques et variationnels pour construire des modèles utiles au calcul et au dimensionnement de structures sollicitées mécaniquement.": "Der Ansatz basiert auf Energie- und Variationskonzepten zur Erstellung von Modellen, die für die Berechnung und Dimensionierung mechanisch beanspruchter Strukturen nützlich sind.",
      "Une partie numérique met en œuvre ces modèles par éléments finis en Python, avec analyse des champs de contraintes et simulation de propagation de fissures en 2D.": "Ein numerischer Teil implementiert diese Finite-Elemente-Modelle in Python, mit Analyse von Spannungsfeldern und Simulation der Rissausbreitung in 2D.",
      "Ce cours m’a permis d’articuler compréhension physique de la rupture, cadre théorique et simulation pour anticiper les mécanismes de défaillance.": "Dieser Kurs ermöglichte es mir, das physikalische Verständnis des Bruchs, den theoretischen Rahmen und die Simulation zu kombinieren, um Ausfallmechanismen vorherzusagen.",
      "Le cours complète la mécanique des milieux continus en traitant les non-linéarités géométriques et le comportement des solides hors du cadre des petites perturbations.": "Der Kurs vervollständigt die Mechanik kontinuierlicher Medien durch die Behandlung geometrischer Nichtlinearitäten und des Verhaltens von Festkörpern außerhalb des Rahmens kleiner Störungen.",
      "Il reprend la cinématique en grandes transformations, les tenseurs de contraintes associés, puis les lois de comportement non linéaires isotropes et anisotropes.": "Es geht um die Kinematik bei großen Transformationen, die zugehörigen Spannungstensoren, dann um die isotropen und anisotropen nichtlinearen Verhaltensgesetze.",
      "Il aborde aussi les effets des précontraintes et contraintes résiduelles, les vibrations autour d’un état tendu, ainsi que des comportements non standards (croissance, polymérisation induite, viscoélasticité).": "Es befasst sich auch mit den Auswirkungen von Vorspannungen und Eigenspannungen, Vibrationen um einen Spannungszustand sowie nicht standardmäßigem Verhalten (Wachstum, induzierte Polymerisation, Viskoelastizität).",
      "Ce cours m’a permis de mieux modéliser des structures soumises à de fortes déformations et d’intégrer l’effet des contraintes internes dans l’analyse mécanique.": "Dieser Kurs ermöglichte es mir, Strukturen, die starken Verformungen ausgesetzt sind, besser zu modellieren und die Wirkung innerer Spannungen in die mechanische Analyse zu integrieren.",
      "Le cours combine des présentations sur la microfluidique, la nanophysique et la bioingénierie avec une réflexion sur la propriété intellectuelle, le transfert technologique et l’entrepreneuriat scientifique.": "Der Kurs kombiniert Präsentationen zu Mikrofluidik, Nanophysik und Bioingenieurwesen mit Reflexionen über geistiges Eigentum, Technologietransfer und wissenschaftliches Unternehmertum.",
      "Il s’appuie sur des projets courts pour acquérir des briques expérimentales (mesures de fluorescence, culture de bactéries) puis sur un projet long de conception-réalisation d’un laboratoire sur puce.": "Es basiert auf kurzen Projekten zum Erwerb experimenteller Bausteine ​​(Fluoreszenzmessungen, Bakterienkultur) und anschließend auf einem langen Projekt zum Entwurf und Aufbau eines Labors auf einem Chip.",
      "L’ensemble relie état de l’art scientifique, prototypage et applications industrielles innovantes dans une démarche de projet en groupe.": "Das Ganze vereint modernste wissenschaftliche Erkenntnisse, Prototyping und innovative industrielle Anwendungen in einem Gruppenprojektansatz.",
      "Ce cours m’a apporté une expérience concrète de projet interdisciplinaire et une meilleure compréhension du continuum recherche-innovation-industrie.": "Dieser Kurs vermittelte mir konkrete Erfahrungen mit einem interdisziplinären Projekt und ein besseres Verständnis des Kontinuums Forschung-Innovation-Industrie.",
      "Le programme couvre les fondamentaux de l'algèbre linéaire, de l'analyse (suites, séries, fonctions, intégration) et de la géométrie, avec une forte exigence de rigueur dans les démonstrations.": "Das Programm deckt die Grundlagen der linearen Algebra, Analysis (Folgen, Reihen, Funktionen, Integration) und Geometrie ab, wobei bei den Demonstrationen große Anforderungen an die Genauigkeit gestellt werden.",
      "Une place importante est donnée à la résolution de problèmes, à la modélisation et à l'articulation entre intuition et formalisation mathématique.": "Ein wichtiger Platz wird der Problemlösung, der Modellierung und der Artikulation zwischen Intuition und mathematischer Formalisierung eingeräumt.",
      "Le rythme soutenu de la prépa m'a permis de consolider des automatismes solides en calcul, en raisonnement et en rédaction mathématique.": "Das anhaltende Tempo der Vorbereitung ermöglichte es mir, solide Automatismen im Rechnen, Denken und mathematischen Schreiben zu festigen.",
      "Ce cours m'a donné une base très robuste pour aborder ensuite les mathématiques de niveau supérieur à l'École polytechnique.": "Dieser Kurs hat mir eine sehr solide Grundlage gegeben, um mich dann an der École Polytechnique mit Mathematik auf höherem Niveau zu befassen.",
      "La deuxième année approfondit les structures algébriques, l'analyse différentielle et intégrale, les équations différentielles et les raisonnements de haut niveau attendus aux concours.": "Das zweite Jahr befasst sich eingehender mit algebraischen Strukturen, Differential- und Integralanalyse, Differentialgleichungen und anspruchsvollem Denken, das in Auswahlprüfungen erwartet wird.",
      "Le cadre MP* pousse plus loin la technicité, la rapidité d'exécution et la capacité à relier plusieurs chapitres dans une même résolution.": "Das MP*-Framework treibt die Formalität, die Ausführungsgeschwindigkeit und die Möglichkeit, mehrere Kapitel in derselben Auflösung zu verknüpfen, weiter voran.",
      "Le travail régulier sur des problèmes exigeants m'a fait progresser en synthèse, en précision et en stratégie de résolution.": "Durch die regelmäßige Arbeit an anspruchsvollen Problemen habe ich Fortschritte in den Bereichen Synthese, Präzision und Lösungsstrategie erzielt.",
      "Ce cours m'a apporté une vraie maturité mathématique, utile ensuite en mécanique, en physique théorique et en modélisation.": "Dieser Kurs verschaffte mir echte mathematische Reife, die mir dann in der Mechanik, der theoretischen Physik und der Modellierung von Nutzen war.",
      "Socle de compétences en analyse fonctionnelle pour aborder les cours avancés de mathématiques, mécanique et physique théorique.": "Kompetenzbasis in Funktionsanalyse zur Bewältigung fortgeschrittener Kurse in Mathematik, Mechanik und theoretischer Physik.",
      "Étude de la mesure et de l’intégration de Lebesgue, de la transformation de Fourier et de la théorie des espaces de Hilbert.": "Studium der Lebesgue-Messung und -Integration, der Fourier-Transformation und der Hilbert-Raumtheorie.",
      "Introduction aux méthodes variationnelles comme cadre unifié pour formuler et analyser des problèmes aux dérivées partielles et de physique mathématique.": "Einführung in Variationsmethoden als einheitliches Framework zur Formulierung und Analyse partieller Differential- und mathematischer Physikprobleme.",
      "Première partie consacrée à la théorie des fonctions holomorphes : propriétés des fonctions analytiques, intégrale de contour et outils classiques de l’analyse complexe.": "Der erste Teil ist der Theorie holomorpher Funktionen gewidmet: Eigenschaften analytischer Funktionen, Konturintegral und klassische Werkzeuge der komplexen Analysis.",
      "Seconde partie dédiée au calcul différentiel dans les espaces de Banach : différentiabilité, théorèmes d’inversion et des fonctions implicites, applications aux équations différentielles.": "Der zweite Teil ist der Differentialrechnung in Banachräumen gewidmet: Differenzierbarkeit, Umkehrsätze und implizite Funktionen, Anwendungen auf Differentialgleichungen.",
      "Outils mathématiques de base pour les cours de mathématiques appliquées, de physique, de mécanique et d’économie, ainsi que pour les enseignements de niveau M1.": "Grundlegende mathematische Werkzeuge für Kurse in angewandter Mathematik, Physik, Mechanik und Wirtschaftswissenschaften sowie für den Unterricht auf M1-Niveau.",
      "Le programme de physique traite notamment la mécanique, l'électromagnétisme, l'optique et la thermodynamique, en articulant modélisation et expériences.": "Das Physikstudium befasst sich insbesondere mit Mechanik, Elektromagnetismus, Optik und Thermodynamik und kombiniert Modellierung und Experimente.",
      "La partie chimie introduit les équilibres, la cinétique, les transformations de la matière et les outils de raisonnement physico-chimique.": "Der Chemieteil führt in Gleichgewichte, Kinetik, Stoffumwandlungen und physikalisch-chemische Denkwerkzeuge ein.",
      "Les TP et les exercices m'ont appris à passer d'un phénomène concret à un modèle exploitable puis à une interprétation quantitative.": "Durch die Praktika und Übungen habe ich gelernt, von einem konkreten Phänomen zu einem verwertbaren Modell und dann zu einer quantitativen Interpretation überzugehen.",
      "Ce cours m'a donné une base expérimentale et conceptuelle solide pour les enseignements de physique avancée suivis ensuite.": "Dieser Kurs vermittelte mir eine solide experimentelle und konzeptionelle Grundlage für die weiterführenden Physikkurse, die ich anschließend belegte.",
      "Le cursus MP* renforce l'analyse des systèmes dynamiques, des ondes, de l'électromagnétisme et des phénomènes de transport, avec un niveau de formalisation plus exigeant.": "Der MP*-Kurs vertieft die Analyse dynamischer Systeme, Wellen, Elektromagnetismus und Transportphänomene mit einem anspruchsvolleren Formalisierungsgrad.",
      "La chimie conserve un rôle important dans la compréhension des équilibres, des transformations et des ordres de grandeur utiles en ingénierie.": "Die Chemie spielt weiterhin eine wichtige Rolle beim Verständnis von Gleichgewichten, Transformationen und Größenordnungen, die für die Technik nützlich sind.",
      "Le travail en problèmes et en TP m'a entraîné à mobiliser rapidement des outils variés pour traiter des situations nouvelles.": "Die Arbeit mit Problemen und die praktische Arbeit haben mich darin geschult, schnell verschiedene Werkzeuge zu mobilisieren, um mit neuen Situationen umzugehen.",
      "Ce cours m'a apporté des réflexes puissants de modélisation physique et de validation des hypothèses.": "Dieser Kurs vermittelte mir starke Reflexe bei der physikalischen Modellierung und Validierung von Hypothesen.",
      "Découverte de la dualité onde–corpuscule, de la fonction d’onde et des principes fondamentaux de la physique quantique.": "Entdeckung des Welle-Teilchen-Dualismus, der Wellenfunktion und der Grundprinzipien der Quantenphysik.",
      "Étude de systèmes quantiques simples : états de polarisation d’un photon, particule en une dimension, transformée de Fourier en physique quantique.": "Studium einfacher Quantensysteme: Polarisationszustände eines Photons, eindimensionales Teilchen, Fourier-Transformation in der Quantenphysik.",
      "Produit tensoriel, intrication et spin 1/2, de l’expérience de Stern–Gerlach à la résonance magnétique nucléaire.": "Tensorprodukt, Verschränkung und Spin 1/2, aus dem Stern-Gerlach-Experiment bei Kernspinresonanz.",
      "Étude des symétries en physique quantique (translations, rotations) et de leur impact sur les spectres d’énergie, du cristal périodique à l’atome d’hydrogène.": "Untersuchung von Symmetrien in der Quantenphysik (Translationen, Rotationen) und deren Einfluss auf Energiespektren, vom periodischen Kristall bis zum Wasserstoffatom.",
      "Méthodes d’approximation (perturbations stationnaires, méthodes variationnelles) pour traiter des systèmes réalistes en mécanique quantique.": "Approximationsmethoden (stationäre Störungen, Variationsverfahren) zur Behandlung realistischer Systeme in der Quantenmechanik.",
      "Introduction aux particules indiscernables et à la structure des atomes, états non stationnaires et premières applications aux technologies quantiques modernes.": "Einführung in nicht unterscheidbare Teilchen und die Struktur von Atomen, instationäre Zustände und erste Anwendungen in modernen Quantentechnologien.",
      "Fondements de la relativité restreinte : transformations de Lorentz, optique relativiste et espace-temps de Minkowski.": "Grundlagen der speziellen Relativitätstheorie: Lorentz-Transformationen, relativistische Optik und Minkowski-Raumzeit.",
      "Principes variationnels, équations d’Euler–Lagrange, invariances du lagrangien et lois de conservation (énergie, impulsion, moment cinétique).": "Variationsprinzipien, Euler-Lagrange-Gleichungen, Lagrange-Invarianzen und Erhaltungssätze (Energie, Impuls, Drehimpuls).",
      "Mécanique relativiste et hamiltonienne, relativité et électromagnétisme, ouverture vers la relativité générale et le principe de Feynman.": "Relativistische und Hamiltonsche Mechanik, Relativität und Elektromagnetismus, Öffnung hin zur allgemeinen Relativitätstheorie und dem Feynman-Prinzip.",
      "Ensembles statistiques, notion d’équilibre thermodynamique et dérivation des lois de la thermodynamique (température, entropie, chaleur) sur des systèmes simples comme le gaz parfait.": "Statistische Ensembles, Vorstellung des thermodynamischen Gleichgewichts und Ableitung der Gesetze der Thermodynamik (Temperatur, Entropie, Wärme) an einfachen Systemen wie dem idealen Gas.",
      "Statistiques de Fermi–Dirac et de Bose–Einstein pour des particules indiscernables, applications aux métaux, semi-conducteurs et rayonnement électromagnétique.": "Fermi-Dirac- und Bose-Einstein-Statistiken für nicht unterscheidbare Teilchen, Anwendungen auf Metalle, Halbleiter und elektromagnetische Strahlung.",
      "Introduction aux transitions de phase et aux phénomènes collectifs, brisure spontanée de symétrie et caractère universel de nombreux comportements physiques et hors-physique.": "Einführung in Phasenübergänge und kollektive Phänomene, spontane Symmetriebrechung und die universelle Natur vieler physischer und nichtphysischer Verhaltensweisen.",
      "Équations de Maxwell dans les milieux matériels (conducteurs, diélectriques, milieux magnétiques) et lien entre propriétés microscopiques et grandeurs macroscopiques (indice, aimantation, conductivité).": "Maxwell-Gleichungen in materiellen Medien (Leiter, Dielektrika, magnetische Medien) und Zusammenhang zwischen mikroskopischen Eigenschaften und makroskopischen Größen (Index, Magnetisierung, Leitfähigkeit).",
      "Propagation des ondes électromagnétiques dans le vide et dans des guides, diffraction (Huyghens–Fresnel), champ proche et optique guidée.": "Ausbreitung elektromagnetischer Wellen im Vakuum und in Leitern, Beugung (Huyghens-Fresnel), Nahfeld und geführte Optik.",
      "Rayonnement électromagnétique (particules accélérées, dipôles), diffusion par la matière, calcul de l’indice optique et introduction à la propagation dans les milieux dispersifs et non linéaires.": "Elektromagnetische Strahlung (beschleunigte Teilchen, Dipole), Diffusion durch Materie, Berechnung des optischen Index und Einführung in die Ausbreitung in dispersiven und nichtlinearen Medien.",
      "Le tronc commun introduit la programmation structurée (principalement en Python), les structures de données usuelles et les premiers outils d'analyse de complexité.": "Der gemeinsame Kern führt in die strukturierte Programmierung (hauptsächlich in Python), gemeinsame Datenstrukturen und die ersten Werkzeuge zur Komplexitätsanalyse ein.",
      "L'objectif est de savoir concevoir des algorithmes corrects, lisibles et efficaces pour résoudre des problèmes mathématiques et scientifiques.": "Ziel ist es, zu wissen, wie man korrekte, lesbare und effiziente Algorithmen zur Lösung mathematischer und wissenschaftlicher Probleme entwirft.",
      "Ce cours m'a appris à formaliser une idée en étapes calculables et à vérifier la robustesse d'une solution.": "In diesem Kurs habe ich gelernt, eine Idee in kalkulierbare Schritte zu formalisieren und die Robustheit einer Lösung zu überprüfen.",
      "L'option renforce les méthodes de raisonnement algorithmique, la maîtrise des structures de données et la résolution de problèmes plus exigeants.": "Die Option stärkt algorithmische Denkmethoden, die Beherrschung von Datenstrukturen und die Lösung anspruchsvollerer Probleme.",
      "Le format m'a permis d'aller au-delà des automatismes de base pour travailler la qualité des preuves et la performance des programmes.": "Das Format ermöglichte es mir, über die grundlegende Automatisierung hinauszugehen und an der Qualität der Beweise und der Leistung von Programmen zu arbeiten.",
      "Ce cours m'a donné le goût des approches plus théoriques de l'informatique, en complément de la pratique de programmation.": "Dieser Kurs gab mir neben der Programmierpraxis auch einen Einblick in eher theoretische Ansätze der Informatik.",
      "Le tronc commun entretient les fondamentaux : rigueur de programmation, analyse de complexité et conception de solutions fiables.": "Der gemeinsame Kern bewahrt die Grundlagen: Programmiergenauigkeit, Komplexitätsanalyse und Entwurf zuverlässiger Lösungen.",
      "Il sert de socle méthodologique commun pour traiter les problèmes scientifiques nécessitant une implémentation rapide et juste.": "Es dient als gemeinsame methodische Grundlage für die Bewältigung wissenschaftlicher Probleme, die eine schnelle und faire Umsetzung erfordern.",
      "Ce cours m'a permis de garder des réflexes solides d'écriture et de vérification d'algorithmes.": "Dieser Kurs ermöglichte es mir, solide Reflexe für das Schreiben und Verifizieren von Algorithmen zu bewahren.",
      "Le module renforcé développe des notions plus avancées d'algorithmique et de structures discrètes, avec une exigence forte sur la qualité des raisonnements.": "Das erweiterte Modul entwickelt fortgeschrittenere Vorstellungen von Algorithmen und diskreten Strukturen mit hohen Anforderungen an die Qualität der Argumentation.",
      "Il prépare aux problèmes d'informatique de concours, à la fois sur la conception d'algorithmes et sur leur justification.": "Es bereitet auf wettbewerbsorientierte Informatikprobleme vor, sowohl beim Entwurf von Algorithmen als auch bei deren Begründung.",
      "Ce cours m'a apporté une meilleure capacité à traiter des problèmes abstraits d'informatique en gardant un ancrage concret d'implémentation.": "Dieser Kurs hat mir eine bessere Fähigkeit vermittelt, mit abstrakten Informatikproblemen umzugehen und gleichzeitig eine konkrete Verankerung der Umsetzung beizubehalten.",
      "Étude détaillée des fonctionnalités de Java (hors threads) et de leur traduction vers une machine abstraite, avec un lien direct vers l’architecture des ordinateurs.": "Detaillierte Untersuchung der Java-Funktionalitäten (ohne Threads) und deren Übersetzung in eine abstrakte Maschine mit direktem Bezug zur Computerarchitektur.",
      "Implémentation orientée objet de structures de données classiques (piles, files, tableaux dynamiques, arbres, tables de hachage) et analyse de leur représentation mémoire.": "Objektorientierte Implementierung klassischer Datenstrukturen (Stacks, Queues, dynamische Arrays, Bäume, Hashtabellen) und Analyse ihrer Speicherrepräsentation.",
      "Introduction à la compilation (analyse syntaxique, génération de code, optimisations), utilisation d’une bibliothèque graphique et preuves de propriétés de programmes via la logique de Hoare.": "Einführung in die Kompilierung (syntaktische Analyse, Codegenerierung, Optimierungen), Nutzung einer Grafikbibliothek und Beweise von Programmeigenschaften mittels Hoare-Logik.",
      "Concepts fondamentaux de la synthèse d’images à partir de modèles 3D : rendu projectif, éclairage, textures et bases de l’animation.": "Grundlegende Konzepte der Bildsynthese aus 3D-Modellen: projektives Rendering, Beleuchtung, Texturen und Grundlagen der Animation.",
      "Techniques de modélisation géométrique et approches procédurales ou interactives pour construire des scènes 3D virtuelles.": "Geometrische Modellierungstechniken und prozedurale oder interaktive Ansätze zur Konstruktion virtueller 3D-Szenen.",
      "Programmation graphique interactive en C++/OpenGL à travers TPs et mini-projet de monde virtuel 3D, avec ouverture vers réalité virtuelle/augmentée et comportements « intelligents » des personnages.": "Interaktive Grafikprogrammierung in C++/OpenGL durch TPs und Mini-3D-Virtual-World-Projekt, mit Öffnung zur virtuellen/erweiterten Realität und „intelligentem“ Verhalten der Charaktere.",
      "Notions de probabilité discrète et continue : conditionnement, indépendance, variables aléatoires, lois usuelles et espérance.": "Konzepte der diskreten und kontinuierlichen Wahrscheinlichkeit: Konditionierung, Unabhängigkeit, Zufallsvariablen, übliche Gesetze und Erwartung.",
      "Vecteurs aléatoires, convergence des suites de variables aléatoires, lois des grands nombres et théorème central limite.": "Zufallsvektoren, Konvergenz von Folgen von Zufallsvariablen, Gesetze großer Zahlen und zentraler Grenzwertsatz.",
      "Premiers outils de statistique (estimateurs, intervalles de confiance) et mise en pratique par des simulations Python et un projet de modélisation probabiliste.": "Erste statistische Werkzeuge (Schätzer, Konfidenzintervalle) und praktische Anwendung durch Python-Simulationen und ein probabilistisches Modellierungsprojekt.",
      "Introduction aux chaînes de Markov et aux martingales comme modèles fondamentaux de phénomènes aléatoires dépendant du temps.": "Einführung in Markov-Ketten und Martingale als grundlegende Modelle zeitabhängiger Zufallsphänomene.",
      "Applications à des domaines variés : télécommunications, réseaux, économie, biologie, propagation d’épidémies et physique statistique.": "Anwendungen in verschiedenen Bereichen: Telekommunikation, Netzwerke, Wirtschaft, Biologie, Ausbreitung von Epidemien und statistische Physik.",
      "Analyse du comportement asymptotique et outils pour la prédiction et la gestion du risque dans des systèmes soumis à l’aléa.": "Analyse des asymptotischen Verhaltens und Werkzeuge zur Vorhersage und zum Risikomanagement in gefährdeten Systemen.",
      "Présentation des notions d’offre, de demande et d’équilibre de marché, et analyse des conditions d’efficacité et des défaillances de marché.": "Darstellung der Begriffe Angebot, Nachfrage und Marktgleichgewicht sowie Analyse von Effizienzbedingungen und Marktversagen.",
      "Introduction au commerce international, à l’économie publique, à la concurrence imparfaite et à la théorie des jeux avec asymétries d’information.": "Einführung in den internationalen Handel, die öffentliche Ökonomie, den unvollkommenen Wettbewerb und die Theorie von Spielen mit Informationsasymmetrien.",
      "Premiers éléments d’économie du travail, de marchés financiers et de macroéconomie, avec mise en perspective de grandes problématiques économiques contemporaines.": "Erste Elemente der Arbeitsökonomie, der Finanzmärkte und der Makroökonomie mit Perspektive auf wichtige aktuelle Wirtschaftsthemen.",
      "Le cours articule lecture comparée d'oeuvres philosophiques et littéraires, analyse conceptuelle et entraînement méthodique à la dissertation.": "Der Kurs kombiniert vergleichende Lektüre philosophischer und literarischer Werke, konzeptionelle Analyse und methodisches Dissertationstraining.",
      "Le thème de l'enfance conduit à interroger l'éducation, la formation du sujet, la mémoire, la transmission et la construction de la liberté.": "Das Thema Kindheit führt zu Fragen nach Bildung, Subjektbildung, Erinnerung, Weitergabe und Konstruktion von Freiheit.",
      "Le travail hebdomadaire m'a entraîné à problématiser rapidement, structurer une argumentation solide et soigner la précision de l'expression.": "Durch die wöchentliche Arbeit habe ich gelernt, schnell Probleme zu lösen, ein fundiertes Argument zu strukturieren und auf die Präzision des Ausdrucks zu achten.",
      "Ce cours m'a apporté une méthode durable de réflexion et de rédaction, utile bien au-delà des concours.": "Dieser Kurs vermittelte mir eine dauerhafte Denk- und Schreibmethode, die weit über Wettbewerbe hinaus nützlich ist.",
      "Le thème du travail permet d'examiner les dimensions économiques, sociales, politiques et existentielles de l'activité humaine.": "Das Thema Arbeit ermöglicht es uns, die wirtschaftlichen, sozialen, politischen und existenziellen Dimensionen menschlichen Handelns zu untersuchen.",
      "Le cours combine étude d'oeuvres, clarification des concepts, confrontation des positions d'auteurs et entraînement intensif à l'écrit.": "Der Kurs verbindet Werkstudium, Konzeptklärung, Vergleich der Autorenpositionen und intensives Schreibtraining.",
      "Il m'a aidé à mieux articuler lecture fine des textes, mise en perspective historique et argumentation personnelle rigoureuse.": "Es hat mir geholfen, die detaillierte Lektüre von Texten, die historische Perspektive und die rigorose persönliche Argumentation besser zu artikulieren.",
      "Ce cours m'a renforcé en culture générale et en qualité d'expression, avec un impact direct sur mes présentations et écrits académiques.": "Dieser Kurs stärkte mein Allgemeinwissen und meine Ausdrucksqualität mit direkter Auswirkung auf meine Präsentationen und wissenschaftlichen Schriften.",
      "Le cours analyse la manière dont les enjeux de défense s’inscrivent dans un ordre mondial en recomposition, entre retour des rivalités de puissance, conflictualités hybrides et transformations de la souveraineté.": "Der Kurs analysiert die Art und Weise, in der Verteidigungsfragen Teil einer sich neu organisierenden Weltordnung sind, zwischen der Rückkehr von Machtrivalitäten, hybriden Konflikten und Transformationen der Souveränität.",
      "Il mobilise les cadres des relations internationales et des war studies pour étudier les logiques d’alliance, de dissuasion, d’interdépendance et de compétition stratégique.": "Es mobilisiert die Rahmenbedingungen der internationalen Beziehungen und der Kriegsforschung, um die Logik von Bündnissen, Abschreckung, gegenseitiger Abhängigkeit und strategischem Wettbewerb zu untersuchen.",
      "Le séminaire thématique couvre notamment le lien armée-société, le rôle des organisations internationales, la dissuasion nucléaire française, la cybersécurité, les politiques industrielles de défense et l’impact des technologies émergentes.": "Das thematische Seminar befasst sich insbesondere mit der Verbindung zwischen Armee und Gesellschaft, der Rolle internationaler Organisationen, der französischen nuklearen Abschreckung, der Cybersicherheit, der industriellen Verteidigungspolitik und den Auswirkungen neuer Technologien.",
      "Les interventions de praticiens et d’experts permettent d’articuler concepts théoriques et enjeux opérationnels actuels.": "Die Interventionen von Praktikern und Experten ermöglichen es, theoretische Konzepte und aktuelle betriebliche Fragestellungen zu artikulieren.",
      "Ce cours m’a donné des repères solides pour lire les équilibres géopolitiques contemporains et comprendre leurs implications concrètes en matière de défense.": "Dieser Kurs vermittelte mir solide Maßstäbe für das Lesen aktueller geopolitischer Gleichgewichte und das Verständnis ihrer konkreten Auswirkungen auf die Verteidigung.",
      "Le cours part d’un constat central : la démocratie est aujourd’hui universellement valorisée dans le langage politique, tout en faisant l’objet d’une défiance croissante dans les pratiques.": "Der Kurs beginnt mit einer zentralen Beobachtung: Demokratie wird heute in der politischen Sprache allgemein geschätzt, stößt in der Praxis jedoch auf wachsendes Misstrauen.",
      "Il interroge cette tension entre idéal démocratique et désaffection civique, en analysant notamment la crise de la représentation, la montée de l’abstention et la distance entre gouvernants et gouvernés.": "Er hinterfragt diese Spannung zwischen demokratischem Ideal und bürgerlicher Unzufriedenheit und analysiert insbesondere die Krise der Repräsentation, die Zunahme der Stimmenthaltung und die Distanz zwischen denen, die regieren, und denen, die regiert werden.",
      "Le parcours mobilise des références philosophiques et historiques, de l’Antiquité à la période contemporaine, pour comprendre comment la démocratie est passée d’un régime critiqué à un horizon politique quasi incontournable.": "Die Route nutzt philosophische und historische Bezüge von der Antike bis zur Gegenwart, um zu verstehen, wie sich die Demokratie von einem kritisierten Regime zu einem fast unvermeidlichen politischen Horizont entwickelte.",
      "Ce cours m’a apporté des outils d’analyse rigoureux pour articuler concepts philosophiques et enjeux institutionnels actuels.": "Dieser Kurs vermittelte mir umfassende analytische Werkzeuge zur Formulierung philosophischer Konzepte und aktueller institutioneller Fragen.",
      "Le cours étudie l’empire dans la longue durée, du modèle romain aux impérialismes modernes, afin de définir la notion et d’en dégager une typologie (territoriale, coloniale, idéologique).": "Der Kurs untersucht das Imperium auf lange Sicht, vom römischen Modell bis zum modernen Imperialismus, um den Begriff zu definieren und eine Typologie (territorial, kolonial, ideologisch) zu identifizieren.",
      "Il analyse l’effacement des empires au XXe siècle, puis leur retour dans les débats géopolitiques récents, en lien avec les notions d’hégémonie, de leadership et d’ordre international.": "Es analysiert das Verschwinden von Imperien im 20. Jahrhundert und ihre Rückkehr in jüngste geopolitische Debatten im Zusammenhang mit den Vorstellungen von Hegemonie, Führung und internationaler Ordnung.",
      "La pluralité des interventions permet de comparer des cas variés (pharaonique, assyrien, perse, romain, carolingien, arabo-islamique, austro-hongrois, coloniaux) et de comprendre les logiques de durée, de circulation et d’identités multiples.": "Die Pluralität der Interventionen ermöglicht es, verschiedene Fälle (pharaonisch, assyrisch, persisch, römisch, karolingisch, arabisch-islamisch, österreichisch-ungarisch, kolonial) zu vergleichen und die Logiken von Dauer, Zirkulation und multiplen Identitäten zu verstehen.",
      "Ce cours m’a permis d’affiner ma lecture historique des rapports de puissance et des formes politiques à grande échelle.": "Dieser Kurs ermöglichte es mir, mein historisches Verständnis von Machtverhältnissen und großen politischen Formen zu verfeinern.",
      "Le cours combine science politique et droit constitutionnel pour présenter les notions clés du constitutionnalisme, de l’État et des régimes politiques.": "Der Kurs kombiniert Politikwissenschaft und Verfassungsrecht, um die Schlüsselbegriffe des Konstitutionalismus, des Staates und politischer Regime darzustellen.",
      "Il étudie les interactions entre exécutif et législatif, puis les institutions en action à travers la réforme de l’État, l’organisation territoriale, l’action publique et les mécanismes électoraux.": "Es untersucht die Interaktionen zwischen der Exekutive und der Legislative, dann die Institutionen in Aktion durch Staatsreform, territoriale Organisation, öffentliches Handeln und Wahlmechanismen.",
      "Des comparaisons historiques et internationales permettent de situer les spécificités françaises dans un cadre plus large.": "Historische und internationale Vergleiche ermöglichen es, die französischen Besonderheiten in einen größeren Rahmen einzuordnen.",
      "Ce cours m’a donné une base solide pour analyser les institutions, leurs acteurs et leurs transformations dans le temps.": "Dieser Kurs vermittelte mir eine solide Grundlage für die Analyse von Institutionen, ihren Akteuren und ihren Veränderungen im Laufe der Zeit.",
      "Le cours montre comment la démocratie républicaine s’enracine au tournant des XIXe et XXe siècles, en articulant institutions, culture politique et pratiques sociales.": "Der Kurs zeigt, wie die republikanische Demokratie an der Wende vom 19. zum 20. Jahrhundert Wurzeln schlug und Institutionen, politische Kultur und soziale Praktiken artikulierte.",
      "L’approche est thématique : élections, presse, libertés, sociabilités politiques, question sociale, radicalisme, nationalismes, place des religions et rapports entre élus et citoyens.": "Der Ansatz ist thematisch: Wahlen, Presse, Freiheiten, politische Geselligkeit, soziale Frage, Radikalismus, Nationalismus, Stellung der Religionen und Beziehungen zwischen gewählten Amtsträgern und Bürgern.",
      "Une attention particulière est portée aux sources culturelles et iconographiques, ainsi qu’aux continuités et ruptures entre la Belle Époque et la période de l’après-guerre.": "Besonderes Augenmerk wird auf kulturelle und ikonografische Quellen sowie auf die Kontinuitäten und Brüche zwischen der Belle Époque und der Nachkriegszeit gelegt.",
      "Ce cours m’a aidé à relier histoire politique, histoire culturelle et enjeux contemporains de la démocratie.": "Dieser Kurs hat mir geholfen, politische Geschichte, Kulturgeschichte und aktuelle Fragen der Demokratie miteinander zu verbinden.",
      "Le cours interroge le paradoxe de l’après-1989 : une promesse de pacification globale, mais une persistance de conflits interétatiques, de violences civiles internationalisées et de violences terroristes.": "Der Kurs hinterfragt das Paradox der Zeit nach 1989: ein Versprechen globaler Befriedung, aber ein Fortbestehen zwischenstaatlicher Konflikte, internationalisierter ziviler Gewalt und terroristischer Gewalt.",
      "Il mobilise les grandes approches des relations internationales (réalistes, libérales, constructivistes, critiques) pour analyser les logiques de guerre, de dissuasion, d’hégémonie, d’interdépendance et de reconnaissance.": "Es mobilisiert die wichtigsten Ansätze der internationalen Beziehungen (realistisch, liberal, konstruktivistisch, kritisch), um die Logik von Krieg, Abschreckung, Hegemonie, gegenseitiger Abhängigkeit und Anerkennung zu analysieren.",
      "Les séances s’appuient sur des cas empiriques concrets (Europe, Moyen-Orient, Russie, Chine, etc.) pour articuler concepts politistes et dynamiques géopolitiques contemporaines.": "Die Sitzungen basieren auf konkreten empirischen Fällen (Europa, Naher Osten, Russland, China usw.), um politische Konzepte und zeitgenössische geopolitische Dynamiken zu artikulieren.",
      "Ce cours m’a donné des repères solides pour lire les rapports de force internationaux au-delà de l’actualité immédiate.": "Dieser Kurs vermittelte mir solide Grundlagen für das Lesen internationaler Machtverhältnisse über die unmittelbaren Nachrichten hinaus.",
      "Le séminaire explore l’opéra comme rencontre du chant, de la musique, du théâtre et de la mise en scène, avec une attention aux styles, aux grandes œuvres, aux voix et aux compositeurs.": "Das Seminar erforscht die Oper als Begegnung von Gesang, Musik, Theater und Inszenierung, mit besonderem Augenmerk auf Stilrichtungen, großartige Werke, Stimmen und Komponisten.",
      "Il montre aussi l’envers du décor : coordination d’équipes artistiques et techniques, contraintes de production, arbitrages de programmation et exigences de qualité dans une grande institution culturelle.": "Es zeigt sich auch hinter den Kulissen: Koordination künstlerischer und technischer Teams, Produktionsbeschränkungen, Programmentscheidungen und Qualitätsanforderungen in einer großen Kulturinstitution.",
      "Le format combine cours à l’X et immersion sur le terrain (répétitions et représentations), afin d’observer concrètement les étapes qui précèdent la représentation publique.": "Das Format kombiniert Kurse am X und Eintauchen in das Feld (Proben und Aufführungen), um die Phasen, die der öffentlichen Aufführung vorausgehen, konkret zu beobachten.",
      "Ce cours m’a apporté une meilleure compréhension des liens entre création artistique, organisation collective et exigence d’exécution.": "Dieser Kurs hat mir ein besseres Verständnis für die Zusammenhänge zwischen künstlerischem Schaffen, kollektiver Organisation und Ausführungsanforderungen vermittelt.",
      "Le cours part du constat que les organisations (entreprises, laboratoires, services publics, etc.) structurent l’action collective et constituent le cadre principal de la vie professionnelle.": "Der Kurs geht von der Beobachtung aus, dass Organisationen (Unternehmen, Labore, öffentliche Dienste usw.) kollektives Handeln strukturieren und den Hauptrahmen des Berufslebens bilden.",
      "Il montre que leur fonctionnement repose sur des dimensions à la fois techniques et humaines, et mobilise les apports des sciences de gestion pour mieux comprendre leurs logiques internes et externes.": "Es zeigt, dass ihre Funktionsweise sowohl auf technischen als auch auf menschlichen Dimensionen basiert, und mobilisiert die Beiträge der Managementwissenschaften, um ihre internen und externen Logiken besser zu verstehen.",
      "L’objectif est d’acquérir des repères concrets pour décoder ces dynamiques et mieux y agir, notamment en stage puis dans des responsabilités futures.": "Ziel ist es, konkrete Maßstäbe zu gewinnen, um diese Dynamiken zu entschlüsseln und insbesondere in Praktika und späteren Aufgaben besser agieren zu können.",
      "Ce cours m’a donné des clés utiles pour analyser une organisation de manière systémique et y prendre des décisions plus pertinentes.": "Dieser Kurs vermittelte mir nützliche Schlüssel, um eine Organisation systemisch zu analysieren und relevantere Entscheidungen zu treffen.",
      "Le cours compare les grands modèles de gouvernance, notamment les approches « shareholder » et « stakeholder », et analyse leurs effets sur la définition des objectifs et la création de valeur.": "Der Kurs vergleicht die wichtigsten Governance-Modelle, insbesondere die „Shareholder“- und „Stakeholder“-Ansätze, und analysiert deren Auswirkungen auf die Zieldefinition und die Wertschöpfung.",
      "Il aborde la montée de la valeur actionnariale, les mécanismes d’incitation des dirigeants, les limites d’une lecture purement financière de la performance, et l’intégration des enjeux ESG.": "Es befasst sich mit der Steigerung des Shareholder Value, Anreizmechanismen für Manager, den Grenzen einer rein finanziellen Lesart der Leistung und der Integration von ESG-Themen.",
      "Une place importante est donnée à la finance durable : ISR, notation ESG, gestion de portefeuille responsable et articulation avec les politiques RSE des organisations.": "Ein wichtiger Platz wird dem nachhaltigen Finanzwesen eingeräumt: ISR, ESG-Rating, verantwortungsvolles Portfoliomanagement und Abstimmung mit den CSR-Richtlinien von Organisationen.",
      "L’ensemble est traité dans une perspective internationale pour comprendre les spécificités des modèles européens par rapport aux cas américains et asiatiques.": "Alles wird aus einer internationalen Perspektive behandelt, um die Besonderheiten europäischer Modelle im Vergleich zu amerikanischen und asiatischen Fällen zu verstehen.",
      "Ce cours m’a permis de mieux relier stratégie d’entreprise, gouvernance et critères de durabilité dans l’évaluation de la performance.": "Dieser Kurs ermöglichte es mir, Geschäftsstrategie, Governance und Nachhaltigkeitskriterien bei der Leistungsbewertung besser zu verbinden."
    }
  }
};

for (const lang of Object.keys(CONTENT_TRANSLATIONS_PATCH)) {
  const dict = CONTENT_TRANSLATIONS[lang];
  const patchLang = CONTENT_TRANSLATIONS_PATCH[lang];
  if (!dict || !patchLang) continue;
  for (const bucket of Object.keys(patchLang)) {
    dict[bucket] = dict[bucket] || {};
    Object.assign(dict[bucket], patchLang[bucket]);
  }
}
// END GENERATED CONTENT TRANSLATION PATCH

const EXPERIENCES_TRANSLATIONS_PATCH = {
  en: {
    titre: {
      "Gendarmerie nationale": "French National Gendarmerie",
      "Digital Transformation - Fiber Factory": "Digital Transformation - Fiber Factory",
      "Chef assistant de troupe (SUF - scouts marins)": "Assistant Troop Leader (SUF - Sea Scouts)",
      "Stage de recherche – Composites et conditions de Bloch-Floquet": "Research internship – Composites and Bloch-Floquet conditions"
    },
    description: {
      "Scouts unitaires de France (SUF) - Troupe Saint François-Xavier": "Scouts Unitaires de France (SUF) - Saint François-Xavier Troop",
      "Paris, France": "Paris, France",
      "2023 – Aujourd'hui": "2023 – Present",
      "Encadrement bénévole en scoutisme marin : préparation d'activités, conduite de camps et suivi d'un groupe de jeunes.": "Volunteer supervision in sea scouting: planning activities, helping run camps, and supervising a group of young scouts.",
      "Engagement bénévole d'encadrement en scoutisme marin, avec responsabilité éducative, organisation d'activités et conduite de camps.": "Volunteer leadership engagement in sea scouting, with educational responsibility, activity planning, and camp supervision.",
      "Responsabilité de chef assistant au sein d'une troupe SUF de scouts marins, dans un cadre d'encadrement régulier sur l'année et de camps d'été.": "Assistant troop leader role within an SUF sea-scout troop, with regular year-round supervision and summer camps.",
      "Encadrer un groupe de jeunes, préparer et conduire des activités, participer à l'organisation des camps et contribuer à la formation humaine et à la cohésion de la troupe.": "Supervise a group of young scouts, prepare and run activities, help organize camps, and contribute to their development and to troop cohesion.",
      "Encadrement d'un groupe d'environ 20 adolescents dans un cadre éducatif exigeant et structuré.": "Supervision of a group of about 20 teenagers in a demanding and structured educational setting.",
      "Participation à l'organisation de week-ends campés et de camps d'été, incluant plusieurs jours de navigation.": "Participation in the organization of camp weekends and summer camps, including several days of sailing.",
      "Coordination avec l'équipe de maîtrise pour la préparation des activités, la sécurité et la vie de camp.": "Coordination with the leadership team for activity preparation, safety, and camp life.",
      "Mobilisation du CEP1 (qualification d'encadrement scout) et du PSC1 dans la conduite des activités.": "Use of CEP1 (scout leadership qualification) and PSC1 first-aid training in activity supervision.",
      "Bénévolat": "Volunteer",
      "Encadrement": "Supervision",
      "Scoutisme marin": "Sea scouting",
      "Organisation d'activités": "Activity planning",
      "Responsabilité": "Responsibility",
      "Cet engagement m'apprend concrètement à préparer des activités, encadrer un groupe dans la durée et prendre des responsabilités.": "This commitment gives me concrete experience in planning activities, supervising a group over time, and taking responsibility.",
      "Cet engagement me fait progresser de manière très concrète en leadership, en sens des responsabilités, en préparation collective et en gestion de groupe dans la durée.": "This commitment gives me very concrete experience in supervision, responsibility, collective preparation, and long-term group management.",
      "Compagnie de gendarmerie de Guingamp": "Guingamp Gendarmerie Company",
      "Guingamp, Côtes-d'Armor, France": "Guingamp, Côtes-d'Armor, France",
      "Déc. 2023 – Avr. 2024": "Dec. 2023 – Apr. 2024",
      "Formation humaine et militaire en gendarmerie : formation initiale à l'EOGN de Melun puis immersion de terrain et de commandement au sein de la compagnie de Guingamp.": "Human and military training experience within the gendarmerie: initial training at the EOGN in Melun, followed by field and command-level immersion within the Guingamp company.",
      "Expérience de 1A de l'École polytechnique en gendarmerie nationale, combinant une phase de formation (EOGN, Melun, avec modules opérationnels dont maintien/rétablissement de l'ordre) et une phase en unité dans les Côtes-d'Armor.": "Year-1 experience at École polytechnique within the French National Gendarmerie, combining a training phase (EOGN, Melun, including operational modules such as crowd-control training) and a unit phase in Côtes-d'Armor.",
      "Découvrir le fonctionnement d'une compagnie de gendarmerie, suivre des unités de terrain et la cellule de commandement, et comprendre les interactions entre sécurité publique, commandement et coordination territoriale.": "Understand how a gendarmerie company operates, follow field units and the command cell, and analyze the interactions between public security, command, and territorial coordination.",
      "Patrouilles et observation d'interventions en brigade territoriale (BTA) : interventions, police de la route, accueil, transfèrements et découverte des procédures.": "Patrols and observation of interventions within a territorial brigade (BTA): interventions, traffic policing, front-desk work, prisoner transfers, and discovery of procedural workflows.",
      "Patrouilles et observation d'interventions en brigade territoriale (BTA) : police de la route, accueil, transfèrements et découverte des procédures.": "Patrols and observation of interventions within a territorial brigade (BTA): traffic policing, front-desk work, prisoner transfers, and discovery of procedural workflows.",
      "Immersion au PSIG de Guingamp : patrouilles de surveillance et d'appui, entraînements à l'intervention, préparation physique et culture opérationnelle.": "Immersion with the Guingamp PSIG: support and surveillance patrols, intervention training, physical preparation, and operational culture.",
      "Immersion au PSIG de Guingamp : patrouilles d'appui, entraînements à l'intervention et préparation physique.": "Immersion with the Guingamp PSIG: support patrols, intervention training, and physical preparation.",
      "Suivi du commandement en second de la compagnie sur des événements sensibles (manifestations agricoles, matchs de l'En Avant Guingamp) et participation à des réunions de sécurité.": "Shadowing the deputy company commander during sensitive events (farmers' protests, En Avant Guingamp matches) and participation in security meetings.",
      "Suivi du commandement sur des événements sensibles (manifestations agricoles, matchs de l'En Avant Guingamp) et participation à des réunions de sécurité.": "Following command staff during sensitive events (farmers' protests, En Avant Guingamp matches) and participating in security meetings.",
      "Découverte du travail interservices et du fonctionnement d'autres institutions (justice, sous-préfecture, secours / centres opérationnels).": "Exposure to inter-agency work and to the functioning of other institutions (judiciary, sub-prefecture, emergency services / operational centers).",
      "Institution publique": "Public institution",
      "Institution régalienne": "Sovereign public institution",
      "Terrain": "Field operations",
      "Chaîne de commandement": "Chain of command",
      "Sécurité publique": "Public security",
      "Coordination": "Coordination",
      "Coordination territoriale": "Territorial coordination",
      "Cette expérience m'a donné une compréhension concrète du fonctionnement d'une organisation hiérarchisée en contexte opérationnel, avec des exigences fortes de rigueur, de coordination et de sang-froid.": "This experience gave me a concrete understanding of how a hierarchical organization functions in an operational context, with strong requirements for rigor, coordination, and composure.",
      "Cette expérience m'a apporté une compréhension concrète du fonctionnement d'une organisation hiérarchisée en contexte opérationnel, ainsi que des réflexes de rigueur, de coordination et de sang-froid utiles dans tout environnement exigeant.": "This experience gave me a concrete understanding of how a hierarchical organization functions in an operational setting, along with habits of rigor, coordination, and composure that are valuable in any demanding environment.",
      "Deutsche Telekom Technik GmbH": "Deutsche Telekom Technik GmbH",
      "Bonn, Allemagne": "Bonn, Germany",
      "4 juin 2025 – 12 septembre 2025": "June 4, 2025 – September 12, 2025",
      "Mars – Juil. 2026": "Mar. – Jul. 2026",
      "Institut de Recherche Dupuy de Lôme (IRDL)": "Institut de Recherche Dupuy de Lôme (IRDL)",
      "Stage de recherche en mécanique des composites : implémentation de conditions périodiques de type Bloch-Floquet dans Abaqus pour prédire la résistance en compression d'hydrofoils à fibres continues de carbone.": "Research internship in composite mechanics: implementing Bloch-Floquet periodic boundary conditions in Abaqus to predict the compressive strength of continuous carbon-fiber hydrofoils.",
      "Stage de 3ème année de l'École polytechnique au sein de l'équipe DEMAT de l'Institut de Recherche Dupuy de Lôme (IRDL), à Lorient. Encadré par Christelle Combescure (Maître de Conférences), ce stage de recherche appliquée porte sur la modélisation numérique d'instabilités en compression de structures composites stratifiées, dans la continuité des travaux expérimentaux de l'équipe sur les matériaux pour le nautisme de compétition.": "Final-year internship at École polytechnique within the DEMAT team of the Institut de Recherche Dupuy de Lôme (IRDL), Lorient. Supervised by Christelle Combescure (Associate Professor), this applied research internship focuses on numerical modelling of compressive instabilities in laminated composite structures, building on the team's experimental work on materials for competitive sailing.",
      "Implémenter des conditions aux limites périodiques de type Bloch-Floquet dans Abaqus pour prédire numériquement la résistance en compression de composites stratifiés à plis unidirectionnels de carbone, représentatifs des hydrofoils de voile de compétition.": "Implement Bloch-Floquet periodic boundary conditions in Abaqus to numerically predict the compressive strength of carbon-fiber unidirectional laminates representative of competitive sailing hydrofoils.",
      "Synthèse bibliographique sur la modélisation de l'instabilité en compression des composites stratifiés à plis unidirectionnels.": "Literature review on modelling compressive instability in unidirectional laminated composites.",
      "Étude des ondes de Floquet-Bloch et de leur intérêt pour la prédiction des modes d'instabilité dans les matériaux périodiques.": "Study of Floquet-Bloch waves and their relevance for predicting instability modes in periodic materials.",
      "Implémentation et paramétrisation des conditions aux limites de Floquet-Bloch dans Abaqus.": "Implementation and parametrisation of Floquet-Bloch boundary conditions in Abaqus.",
      "Validation sur cas-tests de la littérature et comparaison avec les données expérimentales de l'équipe DEMAT.": "Validation against literature test cases and comparison with experimental data from the DEMAT team.",
      "Ce stage me permet d'approfondir la mécanique des matériaux composites et d'acquérir une maîtrise concrète des outils de simulation numérique industrielle (Abaqus), dans un contexte de recherche appliquée au nautisme de compétition.": "This internship allows me to deepen my knowledge of composite materials mechanics and gain hands-on mastery of industrial numerical simulation tools (Abaqus), in an applied research context for competitive sailing.",
      "Recherche académique": "Academic research",
      "Éléments finis (Abaqus)": "Finite elements (Abaqus)",
      "Composites stratifiés": "Laminated composites",
      "Nautisme de compétition": "Competitive sailing",
      "Travail au sein de l'équipe de digitalisation de la Fiber Factory de Deutsche Telekom Technik, dans le contexte du déploiement de la fibre optique en Allemagne.": "Work within Deutsche Telekom Technik's Fiber Factory digitalization team in the context of fiber deployment in Germany.",
      "Immersion dans l'équipe de digitalisation de la Fiber Factory de Deutsche Telekom Technik, dans le contexte du déploiement massif de la fibre optique en Allemagne.": "Immersion in Deutsche Telekom Technik's Fiber Factory digitalization team, in the context of large-scale fiber deployment in Germany.",
      "Stage de deuxième année de l'École polytechnique, effectué au siège de Bonn dans un environnement germanophone, au sein d'une équipe travaillant sur des sujets de digitalisation et d'organisation.": "Second-year internship at École polytechnique, carried out at the Bonn headquarters in a German-speaking environment, within a team working on digitalization and organizational topics.",
      "Stage de deuxième année de l'École polytechnique, effectué au siège de Bonn au sein d'un grand groupe technologique, dans un environnement germanophone et transversal, à l'interface entre digitalisation, organisation et innovation.": "Second-year internship at École polytechnique, carried out at the Bonn headquarters of a large technology group, in a German-speaking and cross-functional environment at the intersection of digitalization, organization, and innovation.",
      "Contribuer aux travaux de l'équipe Digital Transformation / Fiber Factory, en particulier sur la documentation interne de l'équipe et sur des sujets liés à l'IA, en lien avec plusieurs interlocuteurs.": "Contribute to the Digital Transformation / Fiber Factory team's work, especially on internal team documentation and on AI-related topics, working with several stakeholders.",
      "Contribuer aux travaux de l'équipe Digital Transformation / Fiber Factory, notamment sur la structuration de la connaissance interne et sur des sujets de transformation (dont la stratégie IA), en coordination avec différents interlocuteurs.": "Contribute to the Digital Transformation / Fiber Factory team's work, particularly on structuring internal knowledge and on transformation topics (including AI strategy), in coordination with multiple stakeholders.",
      "Rédaction d'un playbook interne pour l'équipe de digitalisation, utile pour l'intégration des nouveaux arrivants et pour documenter les pratiques de travail.": "Drafting an internal playbook for the digitalization team, useful for onboarding new arrivals and documenting working practices.",
      "Conception d'un playbook de référence pour l'équipe de digitalisation, utile à l'intégration des nouveaux arrivants et à la capitalisation des pratiques.": "Design of a reference playbook for the digitalization team, supporting onboarding and the capitalization of internal practices.",
      "Rédaction d'un playbook interne pour l'équipe de digitalisation (intégration des nouveaux arrivants, documentation des pratiques).": "Drafting an internal playbook for the digitalization team (onboarding new arrivals, documenting working practices).",
      "Participation à des travaux sur l'usage de l'IA et à de nombreuses réunions avec des équipes aux profils variés.": "Participation in work on AI use and in many meetings with teams from varied backgrounds.",
      "Contribution à des réflexions de stratégie IA (FNES) et participation à de nombreuses réunions de travail avec des équipes aux profils variés.": "Contribution to AI-strategy discussions (FNES) and participation in many working meetings with teams from varied backgrounds.",
      "Participation à des travaux sur l'usage de l'IA et à des réunions avec plusieurs équipes.": "Participation in work on AI use and in meetings with several teams.",
      "Découverte des méthodes de travail, de coordination et de décision dans un grand groupe technologique international.": "Exposure to working methods, coordination, and decision-making in a large international technology group.",
      "Découverte des méthodes de travail, de coordination et de management d'un grand groupe technologique international.": "Exposure to the working methods, coordination practices, and management style of a large international technology group.",
      "Découverte des méthodes de travail et de coordination d'un grand groupe technologique international.": "Exposure to the working methods and coordination practices of a large international technology group.",
      "Pratique quotidienne de l'allemand en contexte professionnel et adaptation rapide à un environnement de travail germanophone.": "Daily use of German in a professional setting and rapid adaptation to a German-speaking work environment.",
      "Cette expérience m'a donné une vision concrète du fonctionnement d'un grand groupe technologique, tout en renforçant mon autonomie, mon adaptation à un environnement germanophone et ma communication professionnelle en allemand.": "This experience gave me a concrete view of how a large technology group operates, while strengthening my autonomy, my adaptation to a German-speaking environment, and my professional communication in German.",
      "Grand groupe technologique": "Large technology group",
      "Transformation digitale": "Digital transformation",
      "Innovation": "Innovation",
      "Allemand professionnel": "Professional German",
      "Travail en équipe": "Teamwork",
      "Cette expérience m'a donné une vision concrète des enjeux de transformation et d'innovation dans une grande entreprise, tout en renforçant mon autonomie, mon adaptation interculturelle et ma communication professionnelle en allemand.": "This experience gave me a concrete view of transformation and innovation challenges in a large company, while strengthening my autonomy, intercultural adaptation, and professional communication in German."
    }
  },
  de: {
    titre: {
      "Gendarmerie nationale": "Französische Gendarmerie",
      "Digital Transformation - Fiber Factory": "Digital Transformation - Fiber Factory",
      "Chef assistant de troupe (SUF - scouts marins)": "Assistenz-Truppführer (SUF - Seepfadfinder)",
      "Stage de recherche – Composites et conditions de Bloch-Floquet": "Forschungspraktikum – Verbundwerkstoffe und Bloch-Floquet-Bedingungen"
    },
    description: {
      "Scouts unitaires de France (SUF) - Troupe Saint François-Xavier": "Scouts Unitaires de France (SUF) - Truppe Saint François-Xavier",
      "Paris, France": "Paris, Frankreich",
      "2023 – Aujourd'hui": "2023 – heute",
      "Encadrement bénévole en scoutisme marin : préparation d'activités, conduite de camps et suivi d'un groupe de jeunes.": "Ehrenamtliche Betreuung bei den Seepfadfindern: Vorbereitung von Aktivitäten, Mitwirkung bei Lagern und Begleitung einer Jugendgruppe.",
      "Engagement bénévole d'encadrement en scoutisme marin, avec responsabilité éducative, organisation d'activités et conduite de camps.": "Ehrenamtliches Engagement in der Leitung von Seepfadfindern mit erzieherischer Verantwortung, Aktivitätsorganisation und Lagerführung.",
      "Responsabilité de chef assistant au sein d'une troupe SUF de scouts marins, dans un cadre d'encadrement régulier sur l'année et de camps d'été.": "Rolle als Assistenz-Truppführer in einer SUF-Seepfadfindertruppe mit regelmäßiger Leitung über das Jahr hinweg und Sommerlagern.",
      "Encadrer un groupe de jeunes, préparer et conduire des activités, participer à l'organisation des camps et contribuer à la formation humaine et à la cohésion de la troupe.": "Eine Gruppe Jugendlicher betreuen, Aktivitäten vorbereiten und durchführen, bei der Organisation von Lagern mitwirken und zur persönlichen Entwicklung und zum Zusammenhalt der Truppe beitragen.",
      "Encadrement d'un groupe d'environ 20 adolescents dans un cadre éducatif exigeant et structuré.": "Leitung einer Gruppe von etwa 20 Jugendlichen in einem anspruchsvollen und strukturierten pädagogischen Rahmen.",
      "Participation à l'organisation de week-ends campés et de camps d'été, incluant plusieurs jours de navigation.": "Mitwirkung bei der Organisation von Lagerwochenenden und Sommerlagern, einschließlich mehrerer Tage Navigation/Segeln.",
      "Coordination avec l'équipe de maîtrise pour la préparation des activités, la sécurité et la vie de camp.": "Koordination mit dem Leitungsteam bei Aktivitätsvorbereitung, Sicherheit und Lagerleben.",
      "Mobilisation du CEP1 (qualification d'encadrement scout) et du PSC1 dans la conduite des activités.": "Einsatz von CEP1 (Pfadfinder-Leitungsqualifikation) und PSC1 bei der Durchführung der Aktivitäten.",
      "Bénévolat": "Ehrenamt",
      "Encadrement": "Betreuung",
      "Scoutisme marin": "Seepfadfinder",
      "Organisation d'activités": "Aktivitätsorganisation",
      "Responsabilité": "Verantwortung",
      "Cet engagement m'apprend concrètement à préparer des activités, encadrer un groupe dans la durée et prendre des responsabilités.": "Dieses Engagement lehrt mich ganz konkret, Aktivitäten vorzubereiten, eine Gruppe über längere Zeit zu betreuen und Verantwortung zu übernehmen.",
      "Cet engagement me fait progresser de manière très concrète en leadership, en sens des responsabilités, en préparation collective et en gestion de groupe dans la durée.": "Dieses Engagement lässt mich sehr konkret in Führung, Verantwortungsbewusstsein, kollektiver Vorbereitung und langfristiger Gruppenleitung wachsen.",
      "Compagnie de gendarmerie de Guingamp": "Gendarmeriekompanie Guingamp",
      "Guingamp, Côtes-d'Armor, France": "Guingamp, Côtes-d'Armor, Frankreich",
      "Déc. 2023 – Avr. 2024": "Dez. 2023 – Apr. 2024",
      "Formation humaine et militaire en gendarmerie : formation initiale à l'EOGN de Melun puis immersion de terrain et de commandement au sein de la compagnie de Guingamp.": "Menschliche und militärische Ausbildung in der Gendarmerie: Grundausbildung an der EOGN in Melun, anschließend Feld- und Kommandoeinblick innerhalb der Kompanie Guingamp.",
      "Expérience de 1A de l'École polytechnique en gendarmerie nationale, combinant une phase de formation (EOGN, Melun, avec modules opérationnels dont maintien/rétablissement de l'ordre) et une phase en unité dans les Côtes-d'Armor.": "Erfahrung des 1. Jahres der École polytechnique in der Gendarmerie nationale, mit einer Ausbildungsphase (EOGN, Melun, einschließlich operativer Module wie Aufrechterhaltung/Wiederherstellung der Ordnung) und einer Einheitphase in den Côtes-d'Armor.",
      "Découvrir le fonctionnement d'une compagnie de gendarmerie, suivre des unités de terrain et la cellule de commandement, et comprendre les interactions entre sécurité publique, commandement et coordination territoriale.": "Das Funktionieren einer Gendarmeriekompanie kennenlernen, Feldeinheiten und die Führungszelle begleiten und die Wechselwirkungen zwischen öffentlicher Sicherheit, Führung und territorialer Koordination verstehen.",
      "Patrouilles et observation d'interventions en brigade territoriale (BTA) : interventions, police de la route, accueil, transfèrements et découverte des procédures.": "Streifen und Beobachtung von Einsätzen in der territorialen Brigade (BTA): Einsätze, Verkehrspolizei, Empfangsdienst, Überführungen und Kennenlernen von Verfahren.",
      "Patrouilles et observation d'interventions en brigade territoriale (BTA) : police de la route, accueil, transfèrements et découverte des procédures.": "Streifen und Beobachtung von Einsätzen in der territorialen Brigade (BTA): Verkehrspolizei, Empfangsdienst, Überführungen und Kennenlernen von Verfahren.",
      "Immersion au PSIG de Guingamp : patrouilles de surveillance et d'appui, entraînements à l'intervention, préparation physique et culture opérationnelle.": "Einblick in das PSIG Guingamp: Überwachungs- und Unterstützungsstreifen, Interventionstrainings, körperliche Vorbereitung und operative Kultur.",
      "Immersion au PSIG de Guingamp : patrouilles d'appui, entraînements à l'intervention et préparation physique.": "Einblick in das PSIG Guingamp: Unterstützungsstreifen, Interventionstrainings und körperliche Vorbereitung.",
      "Suivi du commandement en second de la compagnie sur des événements sensibles (manifestations agricoles, matchs de l'En Avant Guingamp) et participation à des réunions de sécurité.": "Begleitung des stellvertretenden Kompaniekommandeurs bei sensiblen Ereignissen (Bauernproteste, Spiele von En Avant Guingamp) und Teilnahme an Sicherheitsbesprechungen.",
      "Suivi du commandement sur des événements sensibles (manifestations agricoles, matchs de l'En Avant Guingamp) et participation à des réunions de sécurité.": "Begleitung der Führung bei sensiblen Ereignissen (Bauernproteste, Spiele von En Avant Guingamp) und Teilnahme an Sicherheitsbesprechungen.",
      "Découverte du travail interservices et du fonctionnement d'autres institutions (justice, sous-préfecture, secours / centres opérationnels).": "Einblick in behördenübergreifende Zusammenarbeit und in die Funktionsweise anderer Institutionen (Justiz, Unterpräfektur, Rettungsdienste / Einsatzzentralen).",
      "Institution publique": "Öffentliche Institution",
      "Institution régalienne": "Hoheitliche Institution",
      "Terrain": "Einsatzfeld",
      "Chaîne de commandement": "Befehlskette",
      "Sécurité publique": "Öffentliche Sicherheit",
      "Coordination": "Koordination",
      "Coordination territoriale": "Territoriale Koordination",
      "Cette expérience m'a donné une compréhension concrète du fonctionnement d'une organisation hiérarchisée en contexte opérationnel, avec des exigences fortes de rigueur, de coordination et de sang-froid.": "Diese Erfahrung gab mir ein konkretes Verständnis für das Funktionieren einer hierarchischen Organisation im operativen Kontext mit hohen Anforderungen an Genauigkeit, Koordination und Besonnenheit.",
      "Cette expérience m'a apporté une compréhension concrète du fonctionnement d'une organisation hiérarchisée en contexte opérationnel, ainsi que des réflexes de rigueur, de coordination et de sang-froid utiles dans tout environnement exigeant.": "Diese Erfahrung vermittelte mir ein konkretes Verständnis für das Funktionieren einer hierarchischen Organisation im operativen Kontext sowie Gewohnheiten in Bezug auf Genauigkeit, Koordination und Besonnenheit, die in jedem anspruchsvollen Umfeld nützlich sind.",
      "Deutsche Telekom Technik GmbH": "Deutsche Telekom Technik GmbH",
      "Bonn, Allemagne": "Bonn, Deutschland",
      "4 juin 2025 – 12 septembre 2025": "4. Juni 2025 – 12. September 2025",
      "Mars – Juil. 2026": "März – Juli 2026",
      "Institut de Recherche Dupuy de Lôme (IRDL)": "Institut de Recherche Dupuy de Lôme (IRDL)",
      "Stage de recherche en mécanique des composites : implémentation de conditions périodiques de type Bloch-Floquet dans Abaqus pour prédire la résistance en compression d'hydrofoils à fibres continues de carbone.": "Forschungspraktikum in Verbundwerkstoffmechanik: Implementierung periodischer Bloch-Floquet-Randbedingungen in Abaqus zur Vorhersage der Druckfestigkeit von Hydrofoils aus Kohlenstofffasern.",
      "Stage de 3ème année de l'École polytechnique au sein de l'équipe DEMAT de l'Institut de Recherche Dupuy de Lôme (IRDL), à Lorient. Encadré par Christelle Combescure (Maître de Conférences), ce stage de recherche appliquée porte sur la modélisation numérique d'instabilités en compression de structures composites stratifiées, dans la continuité des travaux expérimentaux de l'équipe sur les matériaux pour le nautisme de compétition.": "Praktikum im 3. Jahr der École polytechnique im DEMAT-Team des Institut de Recherche Dupuy de Lôme (IRDL) in Lorient. Betreut von Christelle Combescure (Dozentin), befasst sich dieses angewandte Forschungspraktikum mit der numerischen Modellierung von Druckinstabilitäten in geschichteten Verbundstrukturen, aufbauend auf den experimentellen Arbeiten des Teams zu Materialien für den Wettkampfsegelsport.",
      "Implémenter des conditions aux limites périodiques de type Bloch-Floquet dans Abaqus pour prédire numériquement la résistance en compression de composites stratifiés à plis unidirectionnels de carbone, représentatifs des hydrofoils de voile de compétition.": "Implementierung periodischer Bloch-Floquet-Randbedingungen in Abaqus zur numerischen Vorhersage der Druckfestigkeit von unidirektionalen Kohlenstofffaser-Laminaten, wie sie in Wettkampf-Hydrofoils eingesetzt werden.",
      "Synthèse bibliographique sur la modélisation de l'instabilité en compression des composites stratifiés à plis unidirectionnels.": "Literaturrecherche zur Modellierung der Druckinstabilität unidirektionaler Schichtverbundwerkstoffe.",
      "Étude des ondes de Floquet-Bloch et de leur intérêt pour la prédiction des modes d'instabilité dans les matériaux périodiques.": "Untersuchung von Floquet-Bloch-Wellen und deren Bedeutung für die Vorhersage von Instabilitätsmoden in periodischen Materialien.",
      "Implémentation et paramétrisation des conditions aux limites de Floquet-Bloch dans Abaqus.": "Implementierung und Parametrisierung der Floquet-Bloch-Randbedingungen in Abaqus.",
      "Validation sur cas-tests de la littérature et comparaison avec les données expérimentales de l'équipe DEMAT.": "Validierung anhand von Testfällen aus der Literatur und Vergleich mit experimentellen Daten des DEMAT-Teams.",
      "Ce stage me permet d'approfondir la mécanique des matériaux composites et d'acquérir une maîtrise concrète des outils de simulation numérique industrielle (Abaqus), dans un contexte de recherche appliquée au nautisme de compétition.": "Dieses Praktikum ermöglicht mir, meine Kenntnisse der Verbundwerkstoffmechanik zu vertiefen und praxisnahe Kompetenz in industriellen Simulationswerkzeugen (Abaqus) zu erwerben, in einem angewandten Forschungskontext für den Wettkampfsegelsport.",
      "Recherche académique": "Akademische Forschung",
      "Éléments finis (Abaqus)": "Finite Elemente (Abaqus)",
      "Composites stratifiés": "Schichtverbundwerkstoffe",
      "Nautisme de compétition": "Wettkampfsegelsport",
      "Travail au sein de l'équipe de digitalisation de la Fiber Factory de Deutsche Telekom Technik, dans le contexte du déploiement de la fibre optique en Allemagne.": "Mitarbeit im Digitalisierungsteam der Fiber Factory von Deutsche Telekom Technik im Kontext des Glasfaserausbaus in Deutschland.",
      "Immersion dans l'équipe de digitalisation de la Fiber Factory de Deutsche Telekom Technik, dans le contexte du déploiement massif de la fibre optique en Allemagne.": "Einblick in das Digitalisierungsteam der Fiber Factory von Deutsche Telekom Technik im Kontext des großflächigen Glasfaserausbaus in Deutschland.",
      "Stage de deuxième année de l'École polytechnique, effectué au siège de Bonn dans un environnement germanophone, au sein d'une équipe travaillant sur des sujets de digitalisation et d'organisation.": "Praktikum des zweiten Jahres der École polytechnique am Standort Bonn in einem deutschsprachigen Umfeld, in einem Team zu Themen der Digitalisierung und Organisation.",
      "Stage de deuxième année de l'École polytechnique, effectué au siège de Bonn au sein d'un grand groupe technologique, dans un environnement germanophone et transversal, à l'interface entre digitalisation, organisation et innovation.": "Praktikum des zweiten Jahres der École polytechnique am Standort Bonn in einem großen Technologiekonzern, in einem deutschsprachigen und bereichsübergreifenden Umfeld an der Schnittstelle von Digitalisierung, Organisation und Innovation.",
      "Contribuer aux travaux de l'équipe Digital Transformation / Fiber Factory, en particulier sur la documentation interne de l'équipe et sur des sujets liés à l'IA, en lien avec plusieurs interlocuteurs.": "Mitarbeit an den Aufgaben des Teams Digital Transformation / Fiber Factory, insbesondere an der internen Teamdokumentation und an KI-bezogenen Themen mit mehreren Ansprechpartnern.",
      "Contribuer aux travaux de l'équipe Digital Transformation / Fiber Factory, notamment sur la structuration de la connaissance interne et sur des sujets de transformation (dont la stratégie IA), en coordination avec différents interlocuteurs.": "Mitarbeit an den Aufgaben des Teams Digital Transformation / Fiber Factory, insbesondere zur Strukturierung internen Wissens und zu Transformationsthemen (einschließlich KI-Strategie), in Abstimmung mit verschiedenen Ansprechpartnern.",
      "Rédaction d'un playbook interne pour l'équipe de digitalisation, utile pour l'intégration des nouveaux arrivants et pour documenter les pratiques de travail.": "Erstellung eines internen Playbooks für das Digitalisierungsteam, nützlich für das Onboarding neuer Mitarbeitender und zur Dokumentation von Arbeitsweisen.",
      "Conception d'un playbook de référence pour l'équipe de digitalisation, utile à l'intégration des nouveaux arrivants et à la capitalisation des pratiques.": "Erstellung eines Referenz-Playbooks für das Digitalisierungsteam zur Unterstützung des Onboardings und zur Sicherung interner Praktiken.",
      "Rédaction d'un playbook interne pour l'équipe de digitalisation (intégration des nouveaux arrivants, documentation des pratiques).": "Erstellung eines internen Playbooks für das Digitalisierungsteam (Onboarding neuer Mitarbeitender, Dokumentation von Arbeitsweisen).",
      "Participation à des travaux sur l'usage de l'IA et à de nombreuses réunions avec des équipes aux profils variés.": "Mitarbeit an Themen zum Einsatz von KI und Teilnahme an zahlreichen Besprechungen mit Teams unterschiedlicher Profile.",
      "Contribution à des réflexions de stratégie IA (FNES) et participation à de nombreuses réunions de travail avec des équipes aux profils variés.": "Beitrag zu Überlegungen zur KI-Strategie (FNES) und Teilnahme an zahlreichen Arbeitssitzungen mit Teams unterschiedlicher Profile.",
      "Participation à des travaux sur l'usage de l'IA et à des réunions avec plusieurs équipes.": "Mitarbeit an Themen zum Einsatz von KI und Teilnahme an Besprechungen mit mehreren Teams.",
      "Découverte des méthodes de travail, de coordination et de décision dans un grand groupe technologique international.": "Einblick in Arbeits-, Koordinations- und Entscheidungsweisen eines großen internationalen Technologiekonzerns.",
      "Découverte des méthodes de travail, de coordination et de management d'un grand groupe technologique international.": "Einblick in Arbeits-, Koordinations- und Managementmethoden eines großen internationalen Technologiekonzerns.",
      "Découverte des méthodes de travail et de coordination d'un grand groupe technologique international.": "Einblick in Arbeits- und Koordinationsweisen eines großen internationalen Technologiekonzerns.",
      "Pratique quotidienne de l'allemand en contexte professionnel et adaptation rapide à un environnement de travail germanophone.": "Tägliche Nutzung des Deutschen im beruflichen Kontext und schnelle Anpassung an ein deutschsprachiges Arbeitsumfeld.",
      "Cette expérience m'a donné une vision concrète du fonctionnement d'un grand groupe technologique, tout en renforçant mon autonomie, mon adaptation à un environnement germanophone et ma communication professionnelle en allemand.": "Diese Erfahrung gab mir einen konkreten Einblick in die Funktionsweise eines großen Technologiekonzerns und stärkte zugleich meine Autonomie, meine Anpassung an ein deutschsprachiges Umfeld und meine berufliche Kommunikation auf Deutsch.",
      "Grand groupe technologique": "Großer Technologiekonzern",
      "Transformation digitale": "Digitale Transformation",
      "Innovation": "Innovation",
      "Allemand professionnel": "Berufsdeutsch",
      "Travail en équipe": "Teamarbeit",
      "Cette expérience m'a donné une vision concrète des enjeux de transformation et d'innovation dans une grande entreprise, tout en renforçant mon autonomie, mon adaptation interculturelle et ma communication professionnelle en allemand.": "Diese Erfahrung gab mir einen konkreten Einblick in Transformations- und Innovationsfragen in einem großen Unternehmen und stärkte zugleich meine Autonomie, meine interkulturelle Anpassungsfähigkeit und meine berufliche Kommunikation auf Deutsch."
    }
  }
};

for (const lang of Object.keys(EXPERIENCES_TRANSLATIONS_PATCH)) {
  const dict = CONTENT_TRANSLATIONS[lang];
  const patchLang = EXPERIENCES_TRANSLATIONS_PATCH[lang];
  if (!dict || !patchLang) continue;
  for (const bucket of Object.keys(patchLang)) {
    dict[bucket] = dict[bucket] || {};
    Object.assign(dict[bucket], patchLang[bucket]);
  }
}

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

function getStoredCourseViewMode() {
  const raw = localStorage.getItem(COURSE_VIEW_MODE_STORAGE_KEY);
  return raw === "compact" ? "compact" : "detailed";
}

function setStoredCourseViewMode(mode) {
  localStorage.setItem(COURSE_VIEW_MODE_STORAGE_KEY, mode === "compact" ? "compact" : "detailed");
}

function clearLegacyMobileOverride() {
  localStorage.removeItem("portfolio_view_mode");
  document.documentElement.classList.remove("force-desktop-view", "mobile-layout");
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

  (data.experiences || []).forEach((exp) => {
    exp.titre = tr(exp.titre, dict.titre);
    exp.organisation = tr(exp.organisation, dict.description);
    exp.lieu = tr(exp.lieu, dict.description);
    exp.date_label = tr(exp.date_label, dict.description);
    exp.resume = tr(exp.resume, dict.description);
    exp.contexte = tr(exp.contexte, dict.description);
    exp.mission = tr(exp.mission, dict.description);
    exp.apport = tr(exp.apport, dict.description);
    exp.points_cles = (exp.points_cles || []).map((it) => tr(it, dict.description));
    exp.environnement = (exp.environnement || []).map((it) => tr(it, dict.description));
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

  if (Array.isArray(data.experiences)) {
    data.experiences.sort((a, b) => String(a.date_debut || "").localeCompare(String(b.date_debut || "")));
    const lastIndex = data.experiences.length - 1;
    data.experiences.forEach((exp, index) => {
      exp.is_first = index === lastIndex;
      const kindKey = exp.kind === "volunteer" ? "kind_volunteer" : "kind_professional";
      exp.kind_label = (ui.experiences && ui.experiences[kindKey]) || "";
    });
  }

  data.cours.forEach((matiere) => {
    let courseCount = 0;
    const compactCourses = [];
    const anneeList = Array.isArray(matiere.annees) ? matiere.annees : [];
    anneeList.forEach((annee, index) => {
      const yearCourses = Array.isArray(annee.cours) ? annee.cours : [];
      const count = yearCourses.length;
      annee.course_count = count;
      annee.course_meta_label = formatYearMeta(count, ui);
      annee.annee_id = `${matiere.matiere_id || "mat"}-${index}-${slugify(annee.annee)}`;
      yearCourses.forEach((cours) => {
        compactCourses.push({ titre: cours.titre });
      });
      courseCount += count;
    });
    matiere.cours_flat = compactCourses;
    matiere.course_count = courseCount;
    matiere.annee_count = anneeList.length;
    matiere.course_meta_label = formatMatterMeta(courseCount, anneeList.length, ui);
  });

  data.ui = ui;
  data.current_lang = lang;
  return data;
}

function initExperiencesTimeline() {
  const root = document.querySelector("[data-experiences-root]");
  if (!root) return;

  const tabs = Array.from(root.querySelectorAll("[data-experience-target]"));
  const panels = Array.from(root.querySelectorAll("[data-experience-card]"));
  const panelsWrap = root.querySelector(".experience-panels");
  const emptyState = root.querySelector("[data-experience-empty]");
  const closeButtons = Array.from(root.querySelectorAll("[data-experience-close]"));
  if (!tabs.length || !panels.length || !panelsWrap) return;

  let activeId = null;
  let lastActiveTab = null;

  function isMobileLayout() {
    return window.matchMedia("(max-width: 991px)").matches;
  }

  function clearDesktopPositioning(panel) {
    if (!panel) return;
    panel.style.removeProperty("--experience-card-left");
    panel.style.removeProperty("--experience-anchor-x");
  }

  function syncActivePanelLayout() {
    if (!activeId) {
      panelsWrap.style.removeProperty("height");
      panelsWrap.classList.remove("has-active");
      return;
    }

    const activeTab = tabs.find((tab) => tab.dataset.experienceTarget === activeId);
    const activePanel = panels.find((panel) => panel.dataset.experienceCard === activeId);
    if (!activeTab || !activePanel) return;

    lastActiveTab = activeTab;
    panelsWrap.classList.add("has-active");

    if (isMobileLayout()) {
      clearDesktopPositioning(activePanel);
      panelsWrap.style.removeProperty("height");
      return;
    }

    const dot = activeTab.querySelector(".experience-timeline-node-dot") || activeTab;
    const wrapRect = panelsWrap.getBoundingClientRect();
    const dotRect = dot.getBoundingClientRect();
    const panelWidth = activePanel.offsetWidth;
    const wrapWidth = wrapRect.width;

    const anchorXRaw = dotRect.left + dotRect.width / 2 - wrapRect.left;
    const maxLeft = Math.max(0, wrapWidth - panelWidth);
    const desiredLeft = anchorXRaw - panelWidth / 2;
    const cardLeft = Math.min(Math.max(0, desiredLeft), maxLeft);
    const anchorXInCard = Math.min(Math.max(18, anchorXRaw - cardLeft), Math.max(18, panelWidth - 18));

    activePanel.style.setProperty("--experience-card-left", `${Math.round(cardLeft)}px`);
    activePanel.style.setProperty("--experience-anchor-x", `${Math.round(anchorXInCard)}px`);
    panelsWrap.style.height = `${Math.ceil(activePanel.offsetHeight + 10)}px`;
  }

  function setActive(id) {
    activeId = id || null;

    tabs.forEach((tab) => {
      const active = !!id && tab.dataset.experienceTarget === id;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-expanded", active ? "true" : "false");
    });

    panels.forEach((panel) => {
      const active = !!id && panel.dataset.experienceCard === id;
      panel.classList.toggle("is-active", active);
      panel.classList.toggle("d-none", !active);
      if (!active) clearDesktopPositioning(panel);
    });

    if (emptyState) emptyState.classList.toggle("d-none", !!id);
    syncActivePanelLayout();
  }

  function moveFocus(delta, fromTab) {
    const currentIndex = tabs.indexOf(fromTab);
    if (currentIndex < 0) return;
    const nextIndex = (currentIndex + delta + tabs.length) % tabs.length;
    const nextTab = tabs[nextIndex];
    if (!nextTab) return;
    nextTab.focus();
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const nextId = tab.dataset.experienceTarget;
      setActive(activeId === nextId ? null : nextId);
    });

    tab.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        event.preventDefault();
        moveFocus(1, tab);
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault();
        moveFocus(-1, tab);
      } else if (event.key === "Home") {
        event.preventDefault();
        tabs[0].focus();
      } else if (event.key === "End") {
        event.preventDefault();
        const lastTab = tabs[tabs.length - 1];
        lastTab.focus();
      } else if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const nextId = tab.dataset.experienceTarget;
        setActive(activeId === nextId ? null : nextId);
      } else if (event.key === "Escape") {
        event.preventDefault();
        setActive(null);
      }
    });
  });

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      setActive(null);
      if (lastActiveTab) lastActiveTab.focus();
    });
  });

  window.addEventListener("resize", () => {
    if (activeId) syncActivePanelLayout();
  }, { passive: true });

  setActive(null);
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

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle && ui.nav.theme_toggle) themeToggle.setAttribute("aria-label", ui.nav.theme_toggle);

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
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_STORAGE_KEY, theme);
  const icon = document.querySelector("#theme-toggle .theme-icon");
  if (icon) icon.textContent = theme === "dark" ? "☀️" : "🌙";
}

function initTheme() {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(stored || (prefersDark ? "dark" : "light"));
  document.getElementById("theme-toggle")?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    applyTheme(current === "dark" ? "light" : "dark");
  });
}

function initScrollAnimations() {
  const elements = document.querySelectorAll(".animate-on-scroll");
  if (!elements.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  elements.forEach((el) => observer.observe(el));
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
  const courseSearchIndex = new Map();
  const compactCourseSearchIndex = new Map();
  let currentSearchQuery = "";

  matiereItems.forEach((item) => {
    item.querySelectorAll(".course-entry").forEach((courseEntry) => {
      courseSearchIndex.set(courseEntry, normalizeForSearch(courseEntry.textContent));
    });
    item.querySelectorAll(".cours-compact-item").forEach((compactEntry) => {
      compactCourseSearchIndex.set(compactEntry, normalizeForSearch(compactEntry.textContent));
    });
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
      let matchSearch = true;

      const yearItems = Array.from(item.querySelectorAll(".cours-detailed-years > .accordion > .accordion-item"));
      const compactItems = Array.from(item.querySelectorAll(".cours-compact-item"));

      if (!hasQuery) {
        yearItems.forEach((yearItem) => {
          yearItem.classList.remove("d-none");
          yearItem.querySelectorAll(".course-entry").forEach((courseEntry) => {
            courseEntry.classList.remove("d-none");
          });
        });
        compactItems.forEach((compactItem) => compactItem.classList.remove("d-none"));
      } else {
        let hasVisibleCourse = false;

        yearItems.forEach((yearItem) => {
          const yearCollapse = yearItem.querySelector(":scope > .accordion-collapse");
          const yearCourses = Array.from(yearItem.querySelectorAll(".course-entry"));
          let visibleCoursesInYear = 0;

          yearCourses.forEach((courseEntry) => {
            const searchValue = courseSearchIndex.get(courseEntry) || "";
            const courseMatch = searchValue.includes(currentSearchQuery);
            courseEntry.classList.toggle("d-none", !courseMatch);
            if (courseMatch) visibleCoursesInYear += 1;
          });

          const yearVisible = visibleCoursesInYear > 0;
          yearItem.classList.toggle("d-none", !yearVisible);
          if (!yearVisible && yearCollapse && yearCollapse.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(yearCollapse, { toggle: false }).hide();
          }
          if (yearVisible && openSelected && yearCollapse) {
            bootstrap.Collapse.getOrCreateInstance(yearCollapse, { toggle: false }).show();
          }
          hasVisibleCourse = hasVisibleCourse || yearVisible;
        });

        compactItems.forEach((compactItem) => {
          const searchValue = compactCourseSearchIndex.get(compactItem) || "";
          const compactMatch = searchValue.includes(currentSearchQuery);
          compactItem.classList.toggle("d-none", !compactMatch);
        });

        matchSearch = hasVisibleCourse;
      }

      const isVisible = matchFilter && matchSearch;
      item.classList.toggle("d-none", !isVisible);
      if (!isVisible) hideOpenCollapses(item);
      else visibleItems.push(item);
    });

    if ((hasSelection || hasQuery) && openSelected) {
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
    } else if (img.closest(".experience-card")) {
      if (!img.getAttribute("sizes")) img.setAttribute("sizes", "(max-width: 768px) 100vw, 40vw");
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

  function renderTemplate(templateText) {
    templateCache.set(path, templateText);
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
    initExperiencesTimeline();
    initScrollAnimations();

    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('[type="submit"]');
        const feedback = document.getElementById("contact-feedback");
        btn.disabled = true;
        try {
          const res = await fetch(contactForm.action, {
            method: "POST",
            body: new FormData(contactForm),
            headers: { Accept: "application/json" }
          });
          if (res.ok) {
            contactForm.reset();
            feedback.className = "contact-feedback contact-feedback--success";
            feedback.textContent = ui.contact.success;
          } else {
            throw new Error();
          }
        } catch {
          feedback.className = "contact-feedback contact-feedback--error";
          feedback.textContent = ui.contact.error;
        } finally {
          btn.disabled = false;
        }
      });
    }

    if (contentNode) contentNode.setAttribute("aria-busy", "false");
  }

  if (templateCache.has(path)) {
    renderTemplate(templateCache.get(path));
    return;
  }

  $.ajax({ url: path, method: "GET", dataType: "text" })
    .done(renderTemplate)
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
    if (window.location.hash !== `#${page}`) window.history.pushState(null, "", `#${page}`);
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

  $(document).on("click", "[data-scroll-top]", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("popstate", () => {
    const hashPage = window.location.hash.replace(/^#/, "");
    const target = (hashPage && routes[hashPage]) ? hashPage : "accueil";
    if (target !== currentPage) {
      currentPage = target;
      loadPage(target, currentLang);
      setActiveNavigation(target);
      applySeoMetadata(getUi(currentLang), target, currentLang);
    }
  });

  clearLegacyMobileOverride();
  initTheme();
  initBottomDock();
  applyStaticUi(getUi(currentLang), currentLang);
  goTo(currentPage);
});
