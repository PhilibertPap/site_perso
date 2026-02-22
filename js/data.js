// Données du portfolio
const portfolioData = {
  nom: "Philibert Pappens",
  projets: [
    {
      titre: "Analyse structurelle du gréement d'un voilier",
      contexte: "Projet de recherche – École polytechnique",
      description: "Étude complète du comportement mécanique du gréement et du mât sous différents chargements. Le projet combine modélisation numérique par éléments finis, analyse dynamique et optimisation structurale pour un voilier classique dont la géométrie peut varier.",
      date: "09/2025 – 12/2025",
      carousel: {
        images: [
          { src: "documents/voilier/couture.png", alt: "Structure du gréement", description: "Couture entre le maillage du mât et celui de la barre de mât" },
          { src: "documents/voilier/mode1.png", alt: "Mode 1 de la structure", description: "Mode 1" },
          { src: "documents/voilier/mode2.png", alt: "Mode 2 de la structure", description: "Mode 2" },
          { src: "documents/voilier/mode3.png", alt: "Mode 3 de la structure", description: "Mode 3" },
          { src: "documents/voilier/mode4.png", alt: "Mode 4 de la structure", description: "Mode 4" },
          { src: "documents/voilier/mode5.png", alt: "Mode 5 de la structure", description: "Mode 5" },
          { src: "documents/voilier/poids_3D.png", alt: "Représentation 3D du voilier", description: "Effet du poids propre du voilier" }
        ]
      },
      technologies: ["Éléments finis (Cast3M)", "Mécanique des structures", "Analyse modale", "Optimisation structurale"],
      resultats: {
        items: [
          "Modèle numérique 3D complet du système de gréement et mât",
          "Analyse modale : identification des premiers modes propres",
          "Étude du comportement en plasticité et flambement sous différents chargements",
          "Dimensionnement de la structure"
        ]
      },
      liens: [
        {
          url: "documents/voilier/voilier.pdf",
          label: "Rapport complet (PDF)"
        }
      ]
    },
    {
      titre: "Solution au problème d'isomorphisme de graphes",
      contexte: "Projet scientifique collectif – École polytechnique",
      description: "Résolution du problème de l'isomorphisme de graphes à l'aide du théorème adiabatique quantique, implémentation dans Qiskit et réduction du bruit.",
      date: "09/2024 – 06/2025",
      technologies: ["Qiskit", "Informatique quantique", "Théorie des graphes", "Réduction du bruit"],
      resultats: {
        items: [
          "Etude analytique puis numérique du problème",
          "Optimisation et réduction du bruit dans les simulations quantiques"
        ]
      },
      liens: [
        {
          url: "documents/isomorphisme/isomorphisme.pdf",
          label: "Rapport complet (PDF)"
        }
      ]
    },
    {
      titre: "PerdriX – Réseau social de récupération d'objets perdus",
      contexte: "MODAL (Module Appliqué en Laboratoire) – École polytechnique",
      description: "Application mobile collaborative pour signaler et retrouver les objets perdus à l'École polytechnique. Fonctionnalités de réseau social type Facebook : création de posts pour les objets trouvés, système de messagerie privée entre utilisateurs, et notifications en temps réel pour faciliter les retrouvailles.",
      date: "09/2024 - 12/2024",
      carousel: {
        images: [
          { src: "documents/perdrix/logo.png", alt: "Logo PerdriX", description: "Logo de l'application PerdriX" },
          { src: "documents/perdrix/interface_exemple.png", alt: "Interface utilisateur", description: "Interface exemple de l'application" },
          { src: "documents/perdrix/base_de_donnees.png", alt: "Architecture base de données", description: "Architecture de la base de données" },
          { src: "documents/perdrix/structure_client.png", alt: "Structure client", description: "Architecture client de l'application" }
        ]
      },
      technologies: ["Développement mobile", "Messagerie", "Réseau social"],
      resultats: {
        items: [
          "Application mobile fonctionnelle avec interface utilisateur intuitive",
          "Système de messagerie interne",
          "Gestion des objets perdus et trouvés"
        ]
      },
      liens: [
        {
          url: "documents/perdrix/perdrix.pdf",
          label: "Rapport complet (PDF)"
        }
      ]
    },
    {
      titre: "TRON 3D – Jeu vidéo multijoueur",
      contexte: "Cours d'Informatique 3D – École polytechnique",
      description: "Jeu vidéo en 3D inspiré de TRON, jouable à 2 joueurs sur le même ordinateur. Deux motos navigent sur une grille noire brillante et traînent des fils lumineux derrière elles. Les joueurs visent à faire entrer en collision la moto adverse avec les fils (leur ou les leurs), ce qui entraîne la mort du joueur touché. Entièrement codé en C++.",
      date: "03/2025 – 05/2025",
      technologies: ["C++", "Développement 3D", "Graphique 3D", "Jeux vidéo"],
      resultats: {
        items: [
          "Moteur de jeu 3D entièrement fonctionnel",
          "Système de collision en temps réel",
          "Mode multijoueur local (2 joueurs)",
          "Graphisme 3D avec grille et effets lumineux"
        ]
      },
      liens: []
    }
  ],
  experiences: [
    {
      id: "suf-scouts-marins",
      titre: "Chef assistant de troupe (SUF - scouts marins)",
      organisation: "Scouts unitaires de France (SUF) - Troupe Saint François-Xavier",
      lieu: "Paris, France",
      date_debut: "2023-09-01",
      date_fin: "",
      date_label: "2023 – Aujourd'hui",
      badge: "SUF",
      kind: "volunteer",
      logo_text: "✠⚓",
      logo_url: "images/exp/scout_marin.png",
      logo_theme: "suf",
      resume: "Encadrement bénévole en scoutisme marin : préparation d'activités, conduite de camps et suivi d'un groupe de jeunes.",
      contexte: "Responsabilité de chef assistant au sein d'une troupe SUF de scouts marins, dans un cadre d'encadrement régulier sur l'année et de camps d'été.",
      mission: "Encadrer un groupe de jeunes, préparer et conduire des activités, participer à l'organisation des camps et contribuer à la formation humaine et à la cohésion de la troupe.",
      points_cles: [
        "Encadrement d'un groupe d'environ 20 adolescents dans un cadre éducatif exigeant et structuré.",
        "Participation à l'organisation de week-ends campés et de camps d'été, incluant plusieurs jours de navigation.",
        "Coordination avec l'équipe de maîtrise pour la préparation des activités, la sécurité et la vie de camp.",
        "Mobilisation du CEP1 (qualification d'encadrement scout) et du PSC1 dans la conduite des activités."
      ],
      environnement: ["Bénévolat", "Encadrement", "Scoutisme marin", "Organisation d'activités", "Responsabilité"],
      apport: "Cet engagement m'apprend concrètement à préparer des activités, encadrer un groupe dans la durée et prendre des responsabilités."
    },
    {
      id: "gendarmerie",
      titre: "Gendarmerie nationale",
      organisation: "Compagnie de gendarmerie de Guingamp",
      lieu: "Guingamp, Côtes-d'Armor, France",
      date_debut: "2023-12-01",
      date_fin: "2024-04-30",
      date_label: "Déc. 2023 – Avr. 2024",
      badge: "GN",
      kind: "professional",
      logo_text: "GN",
      logo_url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Gendarmerie_nationale_logo.svg",
      logo_theme: "gendarmerie",
      resume: "Formation humaine et militaire en gendarmerie : formation initiale à l'EOGN de Melun puis immersion de terrain et de commandement au sein de la compagnie de Guingamp.",
      contexte: "Expérience de 1A de l'École polytechnique en gendarmerie nationale, combinant une phase de formation (EOGN, Melun, avec modules opérationnels dont maintien/rétablissement de l'ordre) et une phase en unité dans les Côtes-d'Armor.",
      mission: "Découvrir le fonctionnement d'une compagnie de gendarmerie, suivre des unités de terrain et la cellule de commandement, et comprendre les interactions entre sécurité publique, commandement et coordination territoriale.",
      points_cles: [
        "Patrouilles et observation d'interventions en brigade territoriale (BTA) : police de la route, accueil, transfèrements et découverte des procédures.",
        "Immersion au PSIG de Guingamp : patrouilles d'appui, entraînements à l'intervention et préparation physique.",
        "Suivi du commandement sur des événements sensibles (manifestations agricoles, matchs de l'En Avant Guingamp) et participation à des réunions de sécurité."
      ],
      environnement: ["Institution publique", "Terrain", "Chaîne de commandement", "Sécurité publique", "Coordination"],
      apport: "Cette expérience m'a donné une compréhension concrète du fonctionnement d'une organisation hiérarchisée en contexte opérationnel, avec des exigences fortes de rigueur, de coordination et de sang-froid."
    },
    {
      id: "deutsche-telekom",
      titre: "Digital Transformation - Fiber Factory",
      organisation: "Deutsche Telekom Technik GmbH",
      lieu: "Bonn, Allemagne",
      date_debut: "2025-06-04",
      date_fin: "2025-09-12",
      date_label: "4 juin 2025 – 12 septembre 2025",
      badge: "DT",
      kind: "professional",
      logo_text: "T",
      logo_url: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Deutsche_Telekom_2022.svg",
      logo_theme: "telekom",
      resume: "Travail au sein de l'équipe de digitalisation de la Fiber Factory de Deutsche Telekom Technik, dans le contexte du déploiement de la fibre optique en Allemagne.",
      contexte: "Stage de deuxième année de l'École polytechnique, effectué au siège de Bonn dans un environnement germanophone, au sein d'une équipe travaillant sur des sujets de digitalisation et d'organisation.",
      mission: "Contribuer aux travaux de l'équipe Digital Transformation / Fiber Factory, en particulier sur la documentation interne de l'équipe et sur des sujets liés à l'IA, en lien avec plusieurs interlocuteurs.",
      points_cles: [
        "Rédaction d'un playbook interne pour l'équipe de digitalisation (intégration des nouveaux arrivants, documentation des pratiques).",
        "Participation à des travaux sur l'usage de l'IA et à des réunions avec plusieurs équipes.",
        "Découverte des méthodes de travail et de coordination d'un grand groupe technologique international.",
        "Pratique quotidienne de l'allemand en contexte professionnel et adaptation rapide à un environnement de travail germanophone."
      ],
      environnement: ["Grand groupe technologique", "Transformation digitale", "Innovation", "Allemand professionnel", "Travail en équipe"],
      apport: "Cette expérience m'a donné une vision concrète du fonctionnement d'un grand groupe technologique, tout en renforçant mon autonomie, mon adaptation à un environnement germanophone et ma communication professionnelle en allemand."
    }
  ],
  cours: [
    {
      matiere: "Mécanique",
      matiere_id: "MEC",
      logo: "⚙",
      annees: [
        {
          annee: "2A",
          cours: [
            {
              titre: "Mécanique des milieux continus 1",
              description: "Structures élancées, équilibre, flambement et formulation variationnelle.",
              paragraphes: [
                "Introduction aux concepts fondamentaux de la mécanique des milieux continus dans le cadre simplifié des structures élancées (fils, tiges, poutres, arcs élastiques).",
                "Formulation des problèmes mécaniques : efforts intérieurs et extérieurs, équations d'équilibre, conditions aux limites et lois de comportement élastiques.",
                "Étude de la statique et des instabilités (flambement) et introduction à la formulation variationnelle et aux approches énergétiques, en vue de la méthode des éléments finis."
              ]
            },
            {
              titre: "Mécanique des milieux continus 2",
              description: "Mécanique des milieux continus tridimensionnels et principes variationnels.",
              paragraphes: [
                "Cinématique des milieux continus en trois dimensions : transformations, tenseurs de déformation, descriptions lagrangienne et eulérienne.",
                "Lois de bilan (masse, quantité de mouvement, moment cinétique), tenseur des contraintes et lois de comportement (élasticité isotrope, hyperélasticité).",
                "Formulation et résolution de problèmes d'élasticité en petites et grandes déformations, avec introduction aux principes variationnelles et aux méthodes énergétiques."
              ]
            },
            {
              titre: "Mécanique des fluides",
              description: "Bases de la mécanique des fluides pour l’analyse et la modélisation des écoulements.",
              paragraphes: [
                "Définition d'un fluide, propriétés physiques et forces qui génèrent ou limitent son mouvement.",
                "Équations de Navier–Stokes, écoulements incompressibles et compressibles.",
                "Analyse dimensionnelle, similitude et applications aux écoulements réels : régimes où l’inertie ou la viscosité domine, couches limites, écoulements autour des corps et premières notions d’instabilités."
              ]
            }
          ]
        },
        {
          annee: "3A",
          cours: [
            {
              titre: "Comportement des matériaux",
              description: "Étude des déformations irréversibles au-delà du domaine d’élasticité et modélisation des comportements non linéaires en petites déformations.",
              paragraphes: [
                "Le cours traite des comportements non linéaires des matériaux en petites déformations, avec un accent sur la viscoélasticité, la plasticité et la viscoplasticité.",
                "Il relie les mécanismes physiques aux lois de comportement macroscopiques, dans un cadre mécanique puis thermomécanique, et présente les essais utilisés pour identifier les paramètres des modèles.",
                "Une partie est consacrée à l’implémentation numérique des lois de comportement et au passage du matériau à la structure sur des cas de chargements thermomécaniques.",
                "Ce cours m’a permis de mieux relier phénomènes physiques, modélisation constitutive et analyse de structures au-delà du domaine élastique."
              ]
            },
            {
              titre: "Méthodes numériques en mécanique des solides",
              description: "Introduction approfondie aux méthodes numériques pour la mécanique des milieux continus, des systèmes algébriques à la méthode des éléments finis.",
              paragraphes: [
                "Le cours présente les bases de la résolution numérique en mécanique des milieux continus : systèmes linéaires et non linéaires, équations différentielles ordinaires et partielles, problèmes aux valeurs initiales et aux limites.",
                "Il développe ensuite la méthode des éléments finis, de la formulation variationnelle à la discrétisation, puis ses étapes de mise en œuvre : maillage, fonctions de forme, intégration numérique, assemblage et post-traitement.",
                "Les notions sont appliquées à des cas de poutres, plaques et solides en statique et en dynamique, avec des implémentations progressives en Python dans des notebooks Jupyter.",
                "Ce cours m’a apporté une vraie autonomie sur la chaîne complète d’un calcul numérique, de la modélisation à l’interprétation des résultats."
              ]
            },
            {
              titre: "Dynamique des solides et structures",
              description: "Panorama des phénomènes dynamiques des solides et structures, de l’analyse modale aux ondes en milieux continus.",
              paragraphes: [
                "Le cours donne une vision d’ensemble des phénomènes dynamiques en mécanique des solides, en régimes harmonique et transitoire, en reliant vibrations, ondes et dynamique structurale.",
                "La progression va des systèmes discrets (un degré de liberté puis N degrés de liberté) vers les milieux continus, avec des applications sur les poutres, les solides élastiques et les problèmes de stabilité.",
                "Des thèmes avancés sont abordés, notamment la dynamique des milieux structurés et la dynamique non linéaire, avec un appui fort sur les PC et l’implémentation numérique en Python.",
                "Ce cours m’a permis de mieux passer du modèle physique à l’outil de calcul pour analyser des phénomènes vibratoires complexes."
              ]
            },
            {
              titre: "Analyse et dimensionnement des structures et composants",
              description: "Cours-projet de conception et de dimensionnement appliqué à des cas industriels en mécanique des structures.",
              paragraphes: [
                "Après des rappels sur les poutres et les plaques, le cours est centré sur des projets concrets de conception et de dimensionnement issus de problématiques industrielles.",
                "Les sujets couvrent le génie civil, le génie mécanique et la modélisation de composants, avec des approches analytiques, numériques ou expérimentales selon le besoin.",
                "Le travail en binôme met l’accent sur la démarche d’ingénieur : hypothèses de modélisation, choix des méthodes, justification des résultats et prise en compte des contraintes de conception.",
                "Ce cours m’a apporté une expérience proche des pratiques industrielles, avec une meilleure capacité d’argumentation technique sur des choix de dimensionnement."
              ]
            },
            {
              titre: "Mécanique et couplages multiphysiques",
              description: "Outils théoriques et numériques pour modéliser des matériaux et systèmes couplés (thermiques, mécaniques, chimiques, électriques) en contexte d’ingénierie.",
              paragraphes: [
                "Le cours fournit un cadre unifié pour modéliser des systèmes où interagissent plusieurs physiques, notamment en énergétique, biomédical, durabilité des structures et capteurs/actionneurs.",
                "Il aborde le point de vue énergétique et thermodynamique, puis la construction de lois de comportement adaptées aux sollicitations multiphysiques, avec de nombreux exemples industriels.",
                "Les applications traitées incluent les couplages chimio-mécaniques, la thermo-mécanique des matériaux actifs, la thermo-piézo-électricité et les schémas numériques dédiés aux problèmes d’évolution.",
                "Ce cours m’a donné une vision intégrée des couplages physiques et des outils pour construire des modèles robustes de systèmes complexes."
              ]
            },
            {
              titre: "Mécanique de la rupture",
              description: "Introduction aux concepts fondamentaux de fissuration et de rupture, de l’élasticité aux modèles variationnels et à leur implémentation numérique.",
              paragraphes: [
                "Le cours relie les bases d’élasticité à la modélisation des phénomènes de fissuration et de rupture, à partir d’observations expérimentales et d’exemples d’incidents structuraux.",
                "L’approche repose sur des concepts énergétiques et variationnels pour construire des modèles utiles au calcul et au dimensionnement de structures sollicitées mécaniquement.",
                "Une partie numérique met en œuvre ces modèles par éléments finis en Python, avec analyse des champs de contraintes et simulation de propagation de fissures en 2D.",
                "Ce cours m’a permis d’articuler compréhension physique de la rupture, cadre théorique et simulation pour anticiper les mécanismes de défaillance."
              ]
            },
            {
              titre: "Solides en grandes transformations",
              description: "Étude des matériaux élastiques en grandes transformations, avec prise en compte des précontraintes et des contraintes résiduelles.",
              paragraphes: [
                "Le cours complète la mécanique des milieux continus en traitant les non-linéarités géométriques et le comportement des solides hors du cadre des petites perturbations.",
                "Il reprend la cinématique en grandes transformations, les tenseurs de contraintes associés, puis les lois de comportement non linéaires isotropes et anisotropes.",
                "Il aborde aussi les effets des précontraintes et contraintes résiduelles, les vibrations autour d’un état tendu, ainsi que des comportements non standards (croissance, polymérisation induite, viscoélasticité).",
                "Ce cours m’a permis de mieux modéliser des structures soumises à de fortes déformations et d’intégrer l’effet des contraintes internes dans l’analyse mécanique."
              ]
            },
            {
              titre: "Ingénierie informatique de la mécanique des solides",
              description: "Cours-projet à l’interface entre mécanique, microfluidique, nanophysique et bioingénierie, avec un fort volet transfert technologique.",
              paragraphes: [
                "Le cours combine des présentations sur la microfluidique, la nanophysique et la bioingénierie avec une réflexion sur la propriété intellectuelle, le transfert technologique et l’entrepreneuriat scientifique.",
                "Il s’appuie sur des projets courts pour acquérir des briques expérimentales (mesures de fluorescence, culture de bactéries) puis sur un projet long de conception-réalisation d’un laboratoire sur puce.",
                "L’ensemble relie état de l’art scientifique, prototypage et applications industrielles innovantes dans une démarche de projet en groupe.",
                "Ce cours m’a apporté une expérience concrète de projet interdisciplinaire et une meilleure compréhension du continuum recherche-innovation-industrie."
              ]
            }
          ]
        }
      ]
    },

    {
      matiere: "Mathématiques",
      matiere_id: "MAT",
      logo: "∫",
      annees: [
        {
          annee: "Prépa MPSI",
          cours: [
            {
              titre: "Mathématiques (MPSI)",
              description: "Formation intensive en algèbre, analyse et géométrie, avec un volume de 12h par semaine (hors colles et devoirs surveillés), au Lycée Sainte-Geneviève (Versailles).",
              paragraphes: [
                "Le programme couvre les fondamentaux de l'algèbre linéaire, de l'analyse (suites, séries, fonctions, intégration) et de la géométrie, avec une forte exigence de rigueur dans les démonstrations.",
                "Une place importante est donnée à la résolution de problèmes, à la modélisation et à l'articulation entre intuition et formalisation mathématique.",
                "Le rythme soutenu de la prépa m'a permis de consolider des automatismes solides en calcul, en raisonnement et en rédaction mathématique.",
                "Ce cours m'a donné une base très robuste pour aborder ensuite les mathématiques de niveau supérieur à l'École polytechnique."
              ]
            }
          ]
        },
        {
          annee: "Prépa MP* (option informatique)",
          cours: [
            {
              titre: "Mathématiques (MP*)",
              description: "Approfondissement des outils d'algèbre et d'analyse en deuxième année, avec 12h hebdomadaires (hors colles et devoirs surveillés), au Lycée Sainte-Geneviève (Versailles).",
              paragraphes: [
                "La deuxième année approfondit les structures algébriques, l'analyse différentielle et intégrale, les équations différentielles et les raisonnements de haut niveau attendus aux concours.",
                "Le cadre MP* pousse plus loin la technicité, la rapidité d'exécution et la capacité à relier plusieurs chapitres dans une même résolution.",
                "Le travail régulier sur des problèmes exigeants m'a fait progresser en synthèse, en précision et en stratégie de résolution.",
                "Ce cours m'a apporté une vraie maturité mathématique, utile ensuite en mécanique, en physique théorique et en modélisation."
              ]
            }
          ]
        },
        {
          annee: "1A",
          cours: [
            {
              titre: "Analyse réelle et méthodes variationnelles",
              description: "Analyse réelle, espaces de Hilbert et introduction aux méthodes variationnelles.",
              paragraphes: [
                "Socle de compétences en analyse fonctionnelle pour aborder les cours avancés de mathématiques, mécanique et physique théorique.",
                "Étude de la mesure et de l’intégration de Lebesgue, de la transformation de Fourier et de la théorie des espaces de Hilbert.",
                "Introduction aux méthodes variationnelles comme cadre unifié pour formuler et analyser des problèmes aux dérivées partielles et de physique mathématique."
              ]
            }
          ]
        },
        {
          annee: "2A",
          cours: [
            {
              titre: "Calcul différentiel et fonctions holomorphes",
              description: "Analyse complexe et calcul différentiel dans des espaces de dimension finie et de Banach.",
              paragraphes: [
                "Première partie consacrée à la théorie des fonctions holomorphes : propriétés des fonctions analytiques, intégrale de contour et outils classiques de l’analyse complexe.",
                "Seconde partie dédiée au calcul différentiel dans les espaces de Banach : différentiabilité, théorèmes d’inversion et des fonctions implicites, applications aux équations différentielles.",
                "Outils mathématiques de base pour les cours de mathématiques appliquées, de physique, de mécanique et d’économie, ainsi que pour les enseignements de niveau M1."
              ]
            }
          ]
        }
      ]
    },

    {
      matiere: "Physique",
      matiere_id: "PHY",
      logo: "Φ",
      annees: [
        {
          annee: "Prépa MPSI",
          cours: [
            {
              titre: "Physique-Chimie (MPSI)",
              description: "Socle de physique-chimie de première année (6h de physique + 2h de chimie par semaine, hors colles et devoirs surveillés), au Lycée Sainte-Geneviève (Versailles).",
              paragraphes: [
                "Le programme de physique traite notamment la mécanique, l'électromagnétisme, l'optique et la thermodynamique, en articulant modélisation et expériences.",
                "La partie chimie introduit les équilibres, la cinétique, les transformations de la matière et les outils de raisonnement physico-chimique.",
                "Les TP et les exercices m'ont appris à passer d'un phénomène concret à un modèle exploitable puis à une interprétation quantitative.",
                "Ce cours m'a donné une base expérimentale et conceptuelle solide pour les enseignements de physique avancée suivis ensuite."
              ]
            }
          ]
        },
        {
          annee: "Prépa MP* (option informatique)",
          cours: [
            {
              titre: "Physique-Chimie (MP*)",
              description: "Approfondissement en deuxième année avec 7h de physique et 2h de chimie par semaine (hors colles et devoirs surveillés), au Lycée Sainte-Geneviève (Versailles).",
              paragraphes: [
                "Le cursus MP* renforce l'analyse des systèmes dynamiques, des ondes, de l'électromagnétisme et des phénomènes de transport, avec un niveau de formalisation plus exigeant.",
                "La chimie conserve un rôle important dans la compréhension des équilibres, des transformations et des ordres de grandeur utiles en ingénierie.",
                "Le travail en problèmes et en TP m'a entraîné à mobiliser rapidement des outils variés pour traiter des situations nouvelles.",
                "Ce cours m'a apporté des réflexes puissants de modélisation physique et de validation des hypothèses."
              ]
            }
          ]
        },
        {
          annee: "1A",
          cours: [
            {
              titre: "Mécanique quantique",
              description: "Introduction à la physique quantique et à ses principales applications modernes.",
              paragraphes: [
                "Découverte de la dualité onde–corpuscule, de la fonction d’onde et des principes fondamentaux de la physique quantique.",
                "Étude de systèmes quantiques simples : états de polarisation d’un photon, particule en une dimension, transformée de Fourier en physique quantique.",
                "Produit tensoriel, intrication et spin 1/2, de l’expérience de Stern–Gerlach à la résonance magnétique nucléaire."
              ]
            }
          ]
        },
        {
          annee: "2A",
          cours: [
            {
              titre: "Physique quantique avancée",
              description: "Méthodes avancées de mécanique quantique pour systèmes à une ou plusieurs particules.",
              paragraphes: [
                "Étude des symétries en physique quantique (translations, rotations) et de leur impact sur les spectres d’énergie, du cristal périodique à l’atome d’hydrogène.",
                "Méthodes d’approximation (perturbations stationnaires, méthodes variationnelles) pour traiter des systèmes réalistes en mécanique quantique.",
                "Introduction aux particules indiscernables et à la structure des atomes, états non stationnaires et premières applications aux technologies quantiques modernes."
              ]
            },
            {
              titre: "Relativité et principes variationnels",
              description: "Relativité restreinte, mécanique analytique et liens avec la mécanique quantique.",
              paragraphes: [
                "Fondements de la relativité restreinte : transformations de Lorentz, optique relativiste et espace-temps de Minkowski.",
                "Principes variationnels, équations d’Euler–Lagrange, invariances du lagrangien et lois de conservation (énergie, impulsion, moment cinétique).",
                "Mécanique relativiste et hamiltonienne, relativité et électromagnétisme, ouverture vers la relativité générale et le principe de Feynman."
              ]
            },
            {
              titre: "Physique statistique",
              description: "Concepts et méthodes de la physique statistique pour systèmes à grand nombre de particules.",
              paragraphes: [
                "Ensembles statistiques, notion d’équilibre thermodynamique et dérivation des lois de la thermodynamique (température, entropie, chaleur) sur des systèmes simples comme le gaz parfait.",
                "Statistiques de Fermi–Dirac et de Bose–Einstein pour des particules indiscernables, applications aux métaux, semi-conducteurs et rayonnement électromagnétique.",
                "Introduction aux transitions de phase et aux phénomènes collectifs, brisure spontanée de symétrie et caractère universel de nombreux comportements physiques et hors-physique."
              ]
            },
            {
              titre: "Ondes électromagnétiques",
              description: "Propagation, rayonnement et interaction lumière–matière à partir des équations de Maxwell.",
              paragraphes: [
                "Équations de Maxwell dans les milieux matériels (conducteurs, diélectriques, milieux magnétiques) et lien entre propriétés microscopiques et grandeurs macroscopiques (indice, aimantation, conductivité).",
                "Propagation des ondes électromagnétiques dans le vide et dans des guides, diffraction (Huyghens–Fresnel), champ proche et optique guidée.",
                "Rayonnement électromagnétique (particules accélérées, dipôles), diffusion par la matière, calcul de l’indice optique et introduction à la propagation dans les milieux dispersifs et non linéaires."
              ]
            }
          ]
        }
      ]
    },

    {
      matiere: "Informatique",
      matiere_id: "INF",
      logo: "⌘",
      annees: [
        {
          annee: "Prépa MPSI",
          cours: [
            {
              titre: "Informatique tronc commun (MPSI)",
              description: "Bases de l'algorithmique et de la programmation scientifique, avec 2h hebdomadaires en tronc commun, au Lycée Sainte-Geneviève (Versailles).",
              paragraphes: [
                "Le tronc commun introduit la programmation structurée (principalement en Python), les structures de données usuelles et les premiers outils d'analyse de complexité.",
                "L'objectif est de savoir concevoir des algorithmes corrects, lisibles et efficaces pour résoudre des problèmes mathématiques et scientifiques.",
                "Ce cours m'a appris à formaliser une idée en étapes calculables et à vérifier la robustesse d'une solution."
              ]
            },
            {
              titre: "Option informatique (MPSI, S2)",
              description: "Approfondissement de l'algorithmique en option, avec 2h hebdomadaires supplémentaires au second semestre, au Lycée Sainte-Geneviève (Versailles).",
              paragraphes: [
                "L'option renforce les méthodes de raisonnement algorithmique, la maîtrise des structures de données et la résolution de problèmes plus exigeants.",
                "Le format m'a permis d'aller au-delà des automatismes de base pour travailler la qualité des preuves et la performance des programmes.",
                "Ce cours m'a donné le goût des approches plus théoriques de l'informatique, en complément de la pratique de programmation."
              ]
            }
          ]
        },
        {
          annee: "Prépa MP* (option informatique)",
          cours: [
            {
              titre: "Informatique tronc commun (MP*)",
              description: "Consolidation des bases algorithmiques en deuxième année, avec 1h hebdomadaire en tronc commun, au Lycée Sainte-Geneviève (Versailles).",
              paragraphes: [
                "Le tronc commun entretient les fondamentaux : rigueur de programmation, analyse de complexité et conception de solutions fiables.",
                "Il sert de socle méthodologique commun pour traiter les problèmes scientifiques nécessitant une implémentation rapide et juste.",
                "Ce cours m'a permis de garder des réflexes solides d'écriture et de vérification d'algorithmes."
              ]
            },
            {
              titre: "Informatique renforcée (MP*, option informatique)",
              description: "Approfondissement en option informatique en MP*, avec 2h hebdomadaires dédiées, au Lycée Sainte-Geneviève (Versailles).",
              paragraphes: [
                "Le module renforcé développe des notions plus avancées d'algorithmique et de structures discrètes, avec une exigence forte sur la qualité des raisonnements.",
                "Il prépare aux problèmes d'informatique de concours, à la fois sur la conception d'algorithmes et sur leur justification.",
                "Ce cours m'a apporté une meilleure capacité à traiter des problèmes abstraits d'informatique en gardant un ancrage concret d'implémentation."
              ]
            }
          ]
        },
        {
          annee: "1A",
          cours: [
            {
              titre: "Mécanismes de la programmation orientée objet",
              description: "Mécanismes avancés des langages et traits orientés objet en Java.",
              paragraphes: [
                "Étude détaillée des fonctionnalités de Java (hors threads) et de leur traduction vers une machine abstraite, avec un lien direct vers l’architecture des ordinateurs.",
                "Implémentation orientée objet de structures de données classiques (piles, files, tableaux dynamiques, arbres, tables de hachage) et analyse de leur représentation mémoire.",
                "Introduction à la compilation (analyse syntaxique, génération de code, optimisations), utilisation d’une bibliothèque graphique et preuves de propriétés de programmes via la logique de Hoare."
              ]
            }
          ]
        },
        {
          annee: "2A",
          cours: [
            {
              titre: "Informatique graphique 3D",
              description: "Création, animation et rendu interactif de mondes virtuels 3D.",
              paragraphes: [
                "Concepts fondamentaux de la synthèse d’images à partir de modèles 3D : rendu projectif, éclairage, textures et bases de l’animation.",
                "Techniques de modélisation géométrique et approches procédurales ou interactives pour construire des scènes 3D virtuelles.",
                "Programmation graphique interactive en C++/OpenGL à travers TPs et mini-projet de monde virtuel 3D, avec ouverture vers réalité virtuelle/augmentée et comportements « intelligents » des personnages."
              ]
            }
          ]
        }
      ]
    },

    {
      matiere: "Mathématiques appliquées",
      matiere_id: "APM",
      logo: "ℙ",
      annees: [
        {
          annee: "1A",
          cours: [
            {
              titre: "Aléatoire",
              description: "Introduction à la théorie des probabilités et aux premières notions de statistique.",
              paragraphes: [
                "Notions de probabilité discrète et continue : conditionnement, indépendance, variables aléatoires, lois usuelles et espérance.",
                "Vecteurs aléatoires, convergence des suites de variables aléatoires, lois des grands nombres et théorème central limite.",
                "Premiers outils de statistique (estimateurs, intervalles de confiance) et mise en pratique par des simulations Python et un projet de modélisation probabiliste."
              ]
            }
          ]
        },
        {
          annee: "2A",
          cours: [
            {
              titre: "Modélisation de phénomènes aléatoires",
              description: "Processus stochastiques pour la modélisation de données corrélées dans le temps.",
              paragraphes: [
                "Introduction aux chaînes de Markov et aux martingales comme modèles fondamentaux de phénomènes aléatoires dépendant du temps.",
                "Applications à des domaines variés : télécommunications, réseaux, économie, biologie, propagation d’épidémies et physique statistique.",
                "Analyse du comportement asymptotique et outils pour la prédiction et la gestion du risque dans des systèmes soumis à l’aléa."
              ]
            }
          ]
        }
      ]
    },

    {
      matiere: "Économie",
      matiere_id: "ECO",
      logo: "€",
      annees: [
        {
          annee: "1A",
          cours: [
            {
              titre: "Introduction aux sciences économiques",
              description: "Principes fondamentaux de l’analyse économique et fonctionnement des économies de marché.",
              paragraphes: [
                "Présentation des notions d’offre, de demande et d’équilibre de marché, et analyse des conditions d’efficacité et des défaillances de marché.",
                "Introduction au commerce international, à l’économie publique, à la concurrence imparfaite et à la théorie des jeux avec asymétries d’information.",
                "Premiers éléments d’économie du travail, de marchés financiers et de macroéconomie, avec mise en perspective de grandes problématiques économiques contemporaines."
              ]
            }
          ]
        }
      ]
    },

    {
      matiere: "Humanités et Sciences Sociales",
      matiere_id: "HSS",
      logo: "⚖",
      annees: [
        {
          annee: "Prépa MPSI",
          cours: [
            {
              titre: "Français-Philosophie (thème : L'enfance)",
              description: "Travail annuel de culture générale et de dissertation sur le thème de « l'enfance » en CPGE scientifique, au Lycée Sainte-Geneviève (Versailles).",
              paragraphes: [
                "Le cours articule lecture comparée d'oeuvres philosophiques et littéraires, analyse conceptuelle et entraînement méthodique à la dissertation.",
                "Le thème de l'enfance conduit à interroger l'éducation, la formation du sujet, la mémoire, la transmission et la construction de la liberté.",
                "Le travail hebdomadaire m'a entraîné à problématiser rapidement, structurer une argumentation solide et soigner la précision de l'expression.",
                "Ce cours m'a apporté une méthode durable de réflexion et de rédaction, utile bien au-delà des concours."
              ]
            }
          ]
        },
        {
          annee: "Prépa MP* (option informatique)",
          cours: [
            {
              titre: "Français-Philosophie (thème : Le travail)",
              description: "Approfondissement des méthodes d'analyse et de dissertation autour du thème de « le travail » en deuxième année de prépa, au Lycée Sainte-Geneviève (Versailles).",
              paragraphes: [
                "Le thème du travail permet d'examiner les dimensions économiques, sociales, politiques et existentielles de l'activité humaine.",
                "Le cours combine étude d'oeuvres, clarification des concepts, confrontation des positions d'auteurs et entraînement intensif à l'écrit.",
                "Il m'a aidé à mieux articuler lecture fine des textes, mise en perspective historique et argumentation personnelle rigoureuse.",
                "Ce cours m'a renforcé en culture générale et en qualité d'expression, avec un impact direct sur mes présentations et écrits académiques."
              ]
            }
          ]
        },
        {
          annee: "1A",
          cours: [
            {
              titre: "Équilibres mondiaux et enjeux de défense",
              description: "Introduction aux grands équilibres internationaux et à leur impact direct sur les politiques de défense contemporaines.",
              paragraphes: [
                "Le cours analyse la manière dont les enjeux de défense s’inscrivent dans un ordre mondial en recomposition, entre retour des rivalités de puissance, conflictualités hybrides et transformations de la souveraineté.",
                "Il mobilise les cadres des relations internationales et des war studies pour étudier les logiques d’alliance, de dissuasion, d’interdépendance et de compétition stratégique.",
                "Le séminaire thématique couvre notamment le lien armée-société, le rôle des organisations internationales, la dissuasion nucléaire française, la cybersécurité, les politiques industrielles de défense et l’impact des technologies émergentes.",
                "Les interventions de praticiens et d’experts permettent d’articuler concepts théoriques et enjeux opérationnels actuels.",
                "Ce cours m’a donné des repères solides pour lire les équilibres géopolitiques contemporains et comprendre leurs implications concrètes en matière de défense."
              ]
            }
          ]
        },
        {
          annee: "2A",
          cours: [
            {
              titre: "Pouvons-nous aimer la démocratie ?",
              description: "Réflexion philosophique sur le paradoxe démocratique contemporain : triomphe de la démocratie comme référence et crise de la confiance politique.",
              paragraphes: [
                "Le cours part d’un constat central : la démocratie est aujourd’hui universellement valorisée dans le langage politique, tout en faisant l’objet d’une défiance croissante dans les pratiques.",
                "Il interroge cette tension entre idéal démocratique et désaffection civique, en analysant notamment la crise de la représentation, la montée de l’abstention et la distance entre gouvernants et gouvernés.",
                "Le parcours mobilise des références philosophiques et historiques, de l’Antiquité à la période contemporaine, pour comprendre comment la démocratie est passée d’un régime critiqué à un horizon politique quasi incontournable.",
                "Ce cours m’a apporté des outils d’analyse rigoureux pour articuler concepts philosophiques et enjeux institutionnels actuels."
              ]
            },
            {
              titre: "Histoires d'Empires",
              description: "Approche historique de la notion d’empire, de ses formes anciennes à ses reconfigurations contemporaines.",
              paragraphes: [
                "Le cours étudie l’empire dans la longue durée, du modèle romain aux impérialismes modernes, afin de définir la notion et d’en dégager une typologie (territoriale, coloniale, idéologique).",
                "Il analyse l’effacement des empires au XXe siècle, puis leur retour dans les débats géopolitiques récents, en lien avec les notions d’hégémonie, de leadership et d’ordre international.",
                "La pluralité des interventions permet de comparer des cas variés (pharaonique, assyrien, perse, romain, carolingien, arabo-islamique, austro-hongrois, coloniaux) et de comprendre les logiques de durée, de circulation et d’identités multiples.",
                "Ce cours m’a permis d’affiner ma lecture historique des rapports de puissance et des formes politiques à grande échelle."
              ]
            },
            {
              titre: "Introduction aux problèmes institutionnels",
              description: "Analyse des cadres institutionnels et de la pratique du pouvoir, principalement sous la Ve République française.",
              paragraphes: [
                "Le cours combine science politique et droit constitutionnel pour présenter les notions clés du constitutionnalisme, de l’État et des régimes politiques.",
                "Il étudie les interactions entre exécutif et législatif, puis les institutions en action à travers la réforme de l’État, l’organisation territoriale, l’action publique et les mécanismes électoraux.",
                "Des comparaisons historiques et internationales permettent de situer les spécificités françaises dans un cadre plus large.",
                "Ce cours m’a donné une base solide pour analyser les institutions, leurs acteurs et leurs transformations dans le temps."
              ]
            },
            {
              titre: "Histoire politique et culturelle de la France : de la Commune à la Belle Époque",
              description: "Étude de la République, de la démocratie et de la citoyenneté en France entre 1871 et 1914.",
              paragraphes: [
                "Le cours montre comment la démocratie républicaine s’enracine au tournant des XIXe et XXe siècles, en articulant institutions, culture politique et pratiques sociales.",
                "L’approche est thématique : élections, presse, libertés, sociabilités politiques, question sociale, radicalisme, nationalismes, place des religions et rapports entre élus et citoyens.",
                "Une attention particulière est portée aux sources culturelles et iconographiques, ainsi qu’aux continuités et ruptures entre la Belle Époque et la période de l’après-guerre.",
                "Ce cours m’a aidé à relier histoire politique, histoire culturelle et enjeux contemporains de la démocratie."
              ]
            }
          ]
        },
        {
          annee: "3A",
          cours: [
            {
              titre: "Stratégie et géopolitique",
              description: "Analyse des conflictualités internationales contemporaines à partir des concepts clés des relations internationales.",
              paragraphes: [
                "Le cours interroge le paradoxe de l’après-1989 : une promesse de pacification globale, mais une persistance de conflits interétatiques, de violences civiles internationalisées et de violences terroristes.",
                "Il mobilise les grandes approches des relations internationales (réalistes, libérales, constructivistes, critiques) pour analyser les logiques de guerre, de dissuasion, d’hégémonie, d’interdépendance et de reconnaissance.",
                "Les séances s’appuient sur des cas empiriques concrets (Europe, Moyen-Orient, Russie, Chine, etc.) pour articuler concepts politistes et dynamiques géopolitiques contemporaines.",
                "Ce cours m’a donné des repères solides pour lire les rapports de force internationaux au-delà de l’actualité immédiate."
              ]
            },
            {
              titre: "Découverte de l'Opéra",
              description: "Introduction au monde de l’opéra comme art total et comme organisation complexe, entre esthétique, technique et management culturel.",
              paragraphes: [
                "Le séminaire explore l’opéra comme rencontre du chant, de la musique, du théâtre et de la mise en scène, avec une attention aux styles, aux grandes œuvres, aux voix et aux compositeurs.",
                "Il montre aussi l’envers du décor : coordination d’équipes artistiques et techniques, contraintes de production, arbitrages de programmation et exigences de qualité dans une grande institution culturelle.",
                "Le format combine cours à l’X et immersion sur le terrain (répétitions et représentations), afin d’observer concrètement les étapes qui précèdent la représentation publique.",
                "Ce cours m’a apporté une meilleure compréhension des liens entre création artistique, organisation collective et exigence d’exécution."
              ]
            }
          ]
        }
      ]
    },

    {
      matiere: "Management de l'innovation et entrepreneuriat",
      matiere_id: "MIE",
      logo: "↗",
      annees: [
        {
          annee: "2A",
          cours: [
            {
              titre: "Fondamentaux des Organisations",
              description: "Introduction aux dynamiques des organisations et aux outils de management pour agir dans des environnements complexes.",
              paragraphes: [
                "Le cours part du constat que les organisations (entreprises, laboratoires, services publics, etc.) structurent l’action collective et constituent le cadre principal de la vie professionnelle.",
                "Il montre que leur fonctionnement repose sur des dimensions à la fois techniques et humaines, et mobilise les apports des sciences de gestion pour mieux comprendre leurs logiques internes et externes.",
                "L’objectif est d’acquérir des repères concrets pour décoder ces dynamiques et mieux y agir, notamment en stage puis dans des responsabilités futures.",
                "Ce cours m’a donné des clés utiles pour analyser une organisation de manière systémique et y prendre des décisions plus pertinentes."
              ]
            }
          ]
        },
        {
          annee: "3A",
          cours: [
            {
              titre: "Gouvernance d'entreprise et finance durable",
              description: "Mise en perspective des travaux récents sur la gouvernance des entreprises et la finance responsable.",
              paragraphes: [
                "Le cours compare les grands modèles de gouvernance, notamment les approches « shareholder » et « stakeholder », et analyse leurs effets sur la définition des objectifs et la création de valeur.",
                "Il aborde la montée de la valeur actionnariale, les mécanismes d’incitation des dirigeants, les limites d’une lecture purement financière de la performance, et l’intégration des enjeux ESG.",
                "Une place importante est donnée à la finance durable : ISR, notation ESG, gestion de portefeuille responsable et articulation avec les politiques RSE des organisations.",
                "L’ensemble est traité dans une perspective internationale pour comprendre les spécificités des modèles européens par rapport aux cas américains et asiatiques.",
                "Ce cours m’a permis de mieux relier stratégie d’entreprise, gouvernance et critères de durabilité dans l’évaluation de la performance."
              ]
            }
          ]
        }
      ]
    }
  ],
  interets: [
    {
      titre: "Scoutisme marin",
      sous_titre: "Troupe Saint François-Xavier (Paris VI)",
      image: "images/hobbies/voile_scout.jpeg",
      paragraphes: [
        "J'ai commencé le scoutisme à la troupe Vème (cinquième) marine Brest, avec un premier camp d'été puis pendant 2 ans en troupe.",
        "Je suis actuellement chef assistant à la troupe Saint François-Xavier (SUF) de la paroisse Notre-Dame-des-Champs (Paris VI).",
        "J'ai participé à un camp d'été en 2024, un autre en 2025 et je préparerai mon dernier camp en 2026.",
        "La particularité de ces groupes est d'être des scouts marins : les camps comprennent une partie voile, en plus des activités scoutes habituelles.",
        "Je suis titulaire du CEP1 (qualification d'encadrement scout, proche dans son rôle du BAFA) et du PSC1."
      ],
      liens: []
    },
    {
      titre: "Chant choral",
      sous_titre: "Ensemble Vocal de l'École polytechnique",
      image: "images/hobbies/concert_chorale.jpeg",
      paragraphes: [
        "Je fais partie de l'Ensemble Vocal de l'École polytechnique depuis deux ans.",
        "J'ai été responsable de la communication pendant une année : réalisation des affiches, gestion du site web et des comptes Instagram / Facebook, préparation des concerts avec le bureau.",
        "La chorale fait partie des activités qui structurent mon année à l'école, autant sur le plan musical que collectif."
      ],
      liens: [
        {
          url: "https://www.instagram.com/chorale_x/",
          texte: "Le compte Instagram de l'Ensemble Vocal"
        }
      ]
    },
    {
      titre: "Orgue",
      sous_titre: "Formation au conservatoire et en cours particuliers",
      image: "images/hobbies/orgue.jpeg",
      paragraphes: [
        "J'ai commencé l'orgue au conservatoire pendant le primaire, puis j'ai poursuivi tout le collège avec un professeur particulier.",
        "Au lycée, j'ai continué une année avec un professeur particulier, organiste dans une église.",
        "Je suis particulièrement attaché à la musique de Bach"
      ],
      liens: [
        {
          url: "https://www.youtube.com/watch?v=a_pJjg6qUXk&list=RDa_pJjg6qUXk&start_radio=1",
          texte: "Une interprétation des petits préludes et fugues de Bach"
        }
      ]
    },
    {
      titre: "Piano",
      sous_titre: "Cours particuliers",
      image: "images/hobbies/schubert_piano.png",
      paragraphes: [
        "J'ai pris un an de cours particuliers de piano au lycée.",
        "Même si je ne joue pas à un niveau avancé, j'apprécie beaucoup le répertoire pour piano.",
        "En particulier, j'aime beaucoup Bach, mais également Chopin, Beethoven, Mozart ..."
      ],
      liens: [
        {
          url: "https://www.youtube.com/watch?v=NLF-OpGH-u4&list=RDNLF-OpGH-u4&start_radio=1",
          texte: "Le concerto pour clavier n°1 de Bach, interprété par Glenn Gould"
        }
      ]
    },
    {
      titre: "Football",
      sous_titre: "Gardien de but",
      image: "images/hobbies/football.jpeg",
      paragraphes: [
        "Je joue au football depuis le collège, essentiellement au poste de gardien de but.",
        "À l'École polytechnique, je suis gardien depuis deux ans. Nous avons deux créneaux d'entraînement par semaine (un seul en troisième année), ainsi que des matchs en championnat universitaire le jeudi.",
        "Avant cela, j'ai joué deux ans en club au collège et deux ans avec l'équipe de ma prépa."
      ],
      liens: []
    },
    {
      titre: "Langue allemande et culture germanique",
      sous_titre: "Allemand C1, littérature, musique et histoire",
      image: "images/hobbies/Caspar_David_Friedrich.jpg",
      paragraphes: [
        "J'ai vécu quatre ans en Allemagne, ce qui m'a donné un lien durable avec la langue et la culture germanophones.",
        "À l'École polytechnique, je suis des cours d'allemand de niveau C1, en particulier un cours de philosophie et un autre sur la musique chorale classique allemande.",
        "J'apprécie la littérature allemande et la musique classique de l'espace germanique, notamment Bach, Mozart, Schubert et Schumann.",
        "J'ai effectué un stage de trois mois chez Deutsche Telekom, à Bonn, ce qui m'a permis de renforcer ma pratique professionnelle de l'allemand.",
        "Je m'intéresse aussi beaucoup à l'histoire des Etats allemands et de l'Autriche."
      ],
      liens: []
    }
  ]
};
