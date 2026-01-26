// js/app.js

console.log("app.js chargé");

const routes = {
  accueil:  'templates/accueil.tpl.html',
  projets:  'templates/projets.tpl.html',
  cv:       'templates/cv.tpl.html',
  hobbies:  'templates/hobbies.tpl.html',
  cours:    'templates/cours.tpl.html'   // guillemet ajouté ici
};

function getData() {
  return {
    nom: "Philibert Pappens",
    projets: [
      {
        titre: "Analyse structurelle du gréement d’un voilier",
        contexte: "Projet de recherche – École polytechnique",
        description: "Étude approfondie du comportement mécanique du gréement et du mât, incluant le dimensionnement structural et l'analyse de stabilité en conditions de navigation variées.",
        date: "Septembre 2025 – Décembre 2025",
        technologies: ["Éléments finis", "Mechanics", "Python", "ANSYS"],
        resultats: [
          "Modèle numérique 3D du système de gréement",
          "Analyse modale et harmonique du mât",
          "Dimensionnement optimisé des éléments structuraux",
          "Validation par comparaison avec données expérimentales"
        ],
        liens: []
      },
      {
        titre: "Solution au problème d'isomorphisme de graphes",
        contexte: "Projet scientifique collectif – École polytechnique",
        description: "Implémentation et analyse comparative d'algorithmes pour la résolution du problème d'isomorphisme de graphes, incluant des approches heuristiques et exactes.",
        date: "Septembre 2024 – Avril 2025",
        technologies: ["Algorithmes", "Python", "Théorie des graphes", "Optimisation"],
        resultats: [
          "Implémentation de 3 algorithmes distincts",
          "Analyse de complexité et performances comparées",
          "Optimisations heuristiques significatives",
          "Rapport détaillé avec résultats expérimentaux"
        ],
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
        sous_titre: "Gardien de but",        image: "images/hobbies/football.jpeg",        paragraphes: [
          "Je joue au football depuis le collège, essentiellement au poste de gardien de but.",
          "À l’École polytechnique, je suis gardien depuis deux ans. Nous avons deux créneaux d’entraînement par semaine (un en troisième année), ainsi que des matchs en championnat universitaire le jeudi.",
          "Avant cela, j’ai joué deux ans en club au collège et deux ans avec l'équipe de ma prépa."
        ],
        liens: []
      },
      {
        titre: "Scoutisme marin",
        sous_titre: "Troupe Saint François-Xavier (Paris VI)",
        image: "images/hobbies/voile_scout.jpeg",
        paragraphes: [
          "J’ai commencé le scoutisme à la troupe Vé Brest marine, avec un premier camp d’été et deux années de troupe.",
          "Je suis actuellement assistant chef de troupe à la SUF Saint François-Xavier à Notre-Dame-des-Champs (Paris VI).",
          "J’ai participé à un camp d’été en 2024, un autre en 2025 et je préparerai mon dernier camp en 2026.",
          "La particularité de ces groupes est d’être des scouts marins : les camps comprennent une partie voile, en plus des activités scoutes habituelles.",
          "Je suis titulaire du CEP1 et du PSC1."
        ],
        liens: []
      },
      {
        titre: "Orgue",
        sous_titre: "Formation au conservatoire et en cours particuliers",
        paragraphes: [
          "J’ai commencé l’orgue au conservatoire pendant le primaire, puis j’ai poursuivi tout le collège avec un professeur particulier.",
          "Au lycée, j’ai continué une année avec un professeur particulier, organiste dans une église.",
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
          "J’ai pris un an de cours particuliers de piano au lycée.",
          "Même si je ne joue pas à un niveau avancé, j’apprécie beaucoup le répertoire pour piano.",
          "En particulier, j’aime beaucoup Bach, mais également Chopin, Beethoven, Mozart ..."
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
        sous_titre: "Ensemble Vocal de l’École polytechnique",        image: "images/hobbies/concert_chorale.jpeg",        paragraphes: [
          "Je fais partie de l’Ensemble Vocal de l’École polytechnique depuis deux ans.",
          "J’ai été responsable de la communication pendant une année : réalisation des affiches, gestion du site web et des comptes Instagram / Facebook, préparation des concerts avec le bureau.",
          "La chorale fait partie des activités qui structurent mon année à l’école, autant sur le plan musical que collectif."
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
}

function loadPage(page) {
  const path = routes[page] || routes.accueil;
  console.log("loadPage", page, "=>", path);

  $.ajax({
    url: path,
    method: 'GET',
    dataType: 'text'
  })
  .done(function (templateText) {
    console.log("template chargé, longueur =", templateText.length);
    const data = getData();
    const rendered = Mustache.render(templateText, data);
    $("#content").html(rendered);
  })
  .fail(function (err) {
    console.error("Erreur chargement template", path, err);
    $("#content").html("<p class='text-danger'>Erreur de chargement du template.</p>");
  });
}

$(function () {
  console.log("DOM prêt");
  loadPage("accueil");

  function goTo(page) {
    loadPage(page);
    $(".nav-link").removeClass("active");
    $('.nav-link[data-page="' + page + '"]').addClass("active");
  }

  $(".nav-link, .navbar-brand").on("click", function (e) {
    e.preventDefault();
    const page = $(this).data("page");
    console.log("click nav sur", page);
    goTo(page);
  });

  $(document).on("click", ".js-nav", function (e) {
    e.preventDefault();
    const page = $(this).data("page");
    console.log("click bouton sur", page);
    goTo(page);
  });
  
  // Active le lien de navigation correspondant
  $(document).on('pageLoaded', function(event, page) {
    $('.nav-link').removeClass('active');
    $('.nav-link[data-page="' + page + '"]').addClass('active');
  });
});
