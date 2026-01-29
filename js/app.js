// js/app.js

console.log("app.js chargé");

const routes = {
  accueil: 'templates/accueil.tpl.html',
  projets: 'templates/projets.tpl.html',
  cv: 'templates/cv.tpl.html',
  hobbies: 'templates/hobbies.tpl.html',
  cours: 'templates/cours.tpl.html'
};

function getData() {
  // Cloner les données pour éviter les modifications accidentelles
  const data = JSON.parse(JSON.stringify(portfolioData));

  // Trier les projets par date de fin décroissante (plus récent d'abord)
  data.projets.sort((a, b) => {
    // Extraire la date de fin (dernière date après le tiret) au format MM/YYYY
    let dateA = a.date.split('–')[1]?.trim() || a.date;
    let dateB = b.date.split('–')[1]?.trim() || b.date;

    // Convertir au format numérique YYYYMM pour comparaison
    let numA = 0, numB = 0;

    if (dateA.includes('Aujourd')) {
      numA = 202612; // Décembre 2026
    } else {
      const matchA = dateA.match(/(\d{2})\/(\d{4})/);
      if (matchA) numA = parseInt(matchA[2] + matchA[1]); // YYYYMM
    }

    if (dateB.includes('Aujourd')) {
      numB = 202612;
    } else {
      const matchB = dateB.match(/(\d{2})\/(\d{4})/);
      if (matchB) numB = parseInt(matchB[2] + matchB[1]); // YYYYMM
    }

    return numB - numA; // Décroissant (plus récent en premier)
  });

  return data;
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

      // Ajouter la classe active au premier carousel-item de chaque carousel
      document.querySelectorAll('.carousel').forEach((carouselEl) => {
        const firstItem = carouselEl.querySelector('.carousel-item');
        if (firstItem) {
          firstItem.classList.add('active');
        }

        // Ajouter les event listeners aux boutons de navigation
        const prevBtn = carouselEl.querySelector('.carousel-control-prev');
        const nextBtn = carouselEl.querySelector('.carousel-control-next');

        if (prevBtn) {
          prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const activeItem = carouselEl.querySelector('.carousel-item.active');
            const nextItem = activeItem.nextElementSibling || carouselEl.querySelector('.carousel-item:first-child');
            activeItem.classList.remove('active');
            nextItem.classList.add('active');
          });
        }
        if (nextBtn) {
          nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const activeItem = carouselEl.querySelector('.carousel-item.active');
            const prevItem = activeItem.previousElementSibling || carouselEl.querySelector('.carousel-item:last-child');
            activeItem.classList.remove('active');
            prevItem.classList.add('active');
          });
        }
      });
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
  $(document).on('pageLoaded', function (event, page) {
    $('.nav-link').removeClass('active');
    $('.nav-link[data-page="' + page + '"]').addClass('active');
  });
});
