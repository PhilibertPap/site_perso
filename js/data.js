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
      categorie: "Mécanique",
      elements: [
        {
          titre: "Mécanique des milieux continus",
          description: "Formulation mathématique du comportement des solides et fluides.",
          paragraphes: [
            "Introduction aux principes fondamentaux de la mécanique du continu : cinématique, déformation, contrainte et lois de conservation.",
            "Formulation locale et faible des problèmes mécaniques, tenseurs de contrainte et de déformation.",
            "Application aux matériaux élastiques et théorie de l'élasticité linéaire."
          ]
        },
        {
          titre: "Mécanique des structures et flambement",
          description: "Analyse des structures élancées et problèmes de stabilité.",
          paragraphes: [
            "Théorie des poutres (Euler-Bernoulli et Timoshenko), plaques et coques.",
            "Stabilité des structures : flambement élastique, post-flambement et comportement non-linéaire.",
            "Méthodes énergétiques et résolution des problèmes de valeurs propres pour la stabilité."
          ]
        },
        {
          titre: "Mécanique des matériaux",
          description: "Comportement des matériaux sous charge et endommagement.",
          paragraphes: [
            "Comportement élasto-plastique des matériaux métalliques.",
            "Introduction à la mécanique de l'endommagement et critères de rupture.",
            "Essais mécaniques et caractérisation expérimentale des matériaux."
          ]
        }
      ]
    },
    {
      categorie: "Mathématiques",
      elements: [
        {
          titre: "Cours 1",
          description: "À compléter",
          paragraphes: ["À compléter"]
        }
      ]
    },
    {
      categorie: "Physique",
      elements: [
        {
          titre: "Cours 1",
          description: "À compléter",
          paragraphes: ["À compléter"]
        }
      ]
    },
    {
      categorie: "Mathématiques appliquées",
      elements: [
        {
          titre: "Méthodes numériques pour l'ingénieur",
          description: "Schémas d'approximation, erreurs et analyse de stabilité.",
          paragraphes: [
            "Méthodes de discrétisation : différences finies, éléments finis, volumes finis.",
            "Analyse de convergence, stabilité et ordre de précision des schémas numériques.",
            "Résolution de systèmes linéaires et problèmes aux valeurs propres."
          ]
        },
        {
          titre: "Éléments finis",
          description: "Formulation variationnelle et méthode des éléments finis.",
          paragraphes: [
            "Formulations variationnelle et faible des problèmes différentiels.",
            "Construction d'espaces d'approximation, fonctions de forme et intégration numérique.",
            "Assemblage et résolution de systèmes linéaires et non-linéaires en FEM."
          ]
        },
        {
          titre: "Simulation numérique avancée",
          description: "Problèmes couplés, non-linéarités et applications pratiques.",
          paragraphes: [
            "Résolution de problèmes multi-physiques couplés (thermomécanique, fluide-structure, etc.).",
            "Gestion de la non-linéarité : matérielle, géométrique et de contact.",
            "Analyse de sensibilité et optimisation en calcul scientifique."
          ]
        }
      ]
    },
    {
      categorie: "Informatique",
      elements: [
        {
          titre: "Informatique scientifique",
          description: "Python, algorithmes et structures de données pour l'ingénierie.",
          paragraphes: [
            "Programmation en Python pour les applications scientifiques.",
            "Structures de données, algorithmes et complexité computationnelle.",
            "Bibliothèques scientifiques : NumPy, SciPy, Matplotlib pour post-traitement."
          ]
        }
      ]
    },
    {
      categorie: "Humanités et sciences sociales",
      elements: [
        {
          titre: "Cours 1",
          description: "À compléter",
          paragraphes: ["À compléter"]
        }
      ]
    },
    {
      categorie: "Langues",
      elements: [
        {
          titre: "Cours 1",
          description: "À compléter",
          paragraphes: ["À compléter"]
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
