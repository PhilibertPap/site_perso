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
  cours: [
    {
      matiere: "Mécanique",
      matiere_id: "MEC",
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
        }
      ]
    },

    {
      matiere: "Mathématiques",
      matiere_id: "MAT",
      annees: [
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
      annees: [
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
      annees: [
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
    }
  ],
  interets: [
    {
      titre: "Football",
      sous_titre: "Gardien de but",
      image: "images/hobbies/football.jpeg",
      paragraphes: [
        "Je joue au football depuis le collège, essentiellement au poste de gardien de but.",
        "À l'École polytechnique, je suis gardien depuis deux ans. Nous avons deux créneaux d'entraînement par semaine (un en troisième année), ainsi que des matchs en championnat universitaire le jeudi.",
        "Avant cela, j'ai joué deux ans en club au collège et deux ans avec l'équipe de ma prépa."
      ],
      liens: []
    },
    {
      titre: "Scoutisme marin",
      sous_titre: "Troupe Saint François-Xavier (Paris VI)",
      image: "images/hobbies/voile_scout.jpeg",
      paragraphes: [
        "J'ai commencé le scoutisme à la troupe Vé Brest marine, avec un premier camp d'été et deux années de troupe.",
        "Je suis actuellement assistant chef de troupe à la SUF Saint François-Xavier à Notre-Dame-des-Champs (Paris VI).",
        "J'ai participé à un camp d'été en 2024, un autre en 2025 et je préparerai mon dernier camp en 2026.",
        "La particularité de ces groupes est d'être des scouts marins : les camps comprennent une partie voile, en plus des activités scoutes habituelles.",
        "Je suis titulaire du CEP1 et du PSC1."
      ],
      liens: []
    },
    {
      titre: "Orgue",
      sous_titre: "Formation au conservatoire et en cours particuliers",
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
    }
  ]
};
