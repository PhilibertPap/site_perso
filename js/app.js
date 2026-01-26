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
        description: "Étude du comportement du gréement et du mât, dimensionnement et analyse de stabilité.",
        date: "Septembre 2025 – Décembre 2025"
      },
      {
        titre: "Solution au problème d'isomorphisme de graphes",
        contexte: "Projet scientifique collectif – École polytechnique",
        description: "Implémentation et étude d’algorithmes pour l’isomorphisme de graphes.",
        date: "Septembre 2024 – Avril 2025"
      }
    ],
    cours: [
      {
        categorie: "Mécanique",
        elements: [
          {
            titre: "Mécanique des milieux continus",
            description: "Bases du comportement des matériaux, formulation locale/faible."
          },
          {
            titre: "Mécanique des structures et flambement",
            description: "Poutres, plaques, stabilité et post‑flambement."
          },
          {
            titre: "Mécanique des matériaux",
            description: "Comportement élasto‑plastique, endommagement (intro)."
          }
        ]
      },
      {
        categorie: "Méthodes numériques / Calcul scientifique",
        elements: [
          {
            titre: "Méthodes numériques pour l’ingénieur",
            description: "Schémas d’approximation, erreurs, stabilité."
          },
          {
            titre: "Éléments finis",
            description: "Formulation variationnelle, espaces d’approximation, assemblage."
          },
          {
            titre: "Simulation numérique avancée",
            description: "Problèmes couplés et non linéaires (projets)."
          }
        ]
      },
      {
        categorie: "Autres domaines",
        elements: [
          {
            titre: "Probabilités / statistiques",
            description: "Outils pour l’analyse de données et la fiabilité."
          },
          {
            titre: "Informatique scientifique",
            description: "Python, structures de données, algorithmes."
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
});
