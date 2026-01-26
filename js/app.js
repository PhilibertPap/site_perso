// js/app.js

console.log("app.js chargé");

const routes = {
  accueil:  'templates/accueil.tpl.html',
  projets:  'templates/projets.tpl.html',
  cv:       'templates/cv.tpl.html'
};

function getData() {
  return {
    nom: "Philibert Pappens",
    projets: [
      {
        titre: "Couplage thermo‑mécanique du combustible nucléaire",
        contexte: "Projet académique FEM",
        description: "Simulation FEM du comportement thermo‑mécanique des pastilles."
      },
      {
        titre: "Ingénierie navale – flambement de mât",
        contexte: "Projet de structure/naval",
        description: "Étude du flambement d’un mât sous son propre poids."
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
    dataType: 'text'   // <-- important : on veut une STRING
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
  // Chargement initial
  loadPage("accueil");

  // Clics navbar
  $(".nav-link, .navbar-brand").on("click", function (e) {
    e.preventDefault();
    const page = $(this).data("page");
    console.log("click sur", page);
    loadPage(page);
  });
});
