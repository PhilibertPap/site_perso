// js/app.js

console.log("app.js chargé");

const routes = {
  accueil: 'templates/accueil.tpl.html',
  projets: 'templates/projets.tpl.html',
  cv: 'templates/cv.tpl.html',
  hobbies: 'templates/hobbies.tpl.html',
  cours: 'templates/cours.tpl.html'
};

function parseProjectEndDate(dateRange) {
  if (!dateRange) return 0;

  const value = String(dateRange).trim();
  if (/aujourd/i.test(value)) {
    const now = new Date();
    return now.getFullYear() * 100 + (now.getMonth() + 1);
  }

  const parts = value.split(/\s*[–-]\s*/);
  const endPart = parts.length > 1 ? parts[parts.length - 1] : parts[0];
  const match = endPart.match(/(0[1-9]|1[0-2])\/(\d{4})/);

  if (!match) return 0;
  return parseInt(match[2] + match[1], 10);
}

function getData() {
  // Cloner les données pour éviter les modifications accidentelles
  const data = JSON.parse(JSON.stringify(portfolioData));

  // Trier les projets par date de fin décroissante (plus récent d'abord)
  data.projets.sort((a, b) => {
    return parseProjectEndDate(b.date) - parseProjectEndDate(a.date);
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
        const activeItem = carouselEl.querySelector('.carousel-item.active');

        if (firstItem && !activeItem) {
          firstItem.classList.add('active');
        }

        // Ajouter les event listeners aux boutons de navigation
        const prevBtn = carouselEl.querySelector('.carousel-control-prev');
        const nextBtn = carouselEl.querySelector('.carousel-control-next');

        if (prevBtn) {
          prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const currentItem = carouselEl.querySelector('.carousel-item.active');
            if (!currentItem) return;

            const previousItem = currentItem.previousElementSibling || carouselEl.querySelector('.carousel-item:last-child');
            currentItem.classList.remove('active');
            previousItem.classList.add('active');
          });
        }
        if (nextBtn) {
          nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const currentItem = carouselEl.querySelector('.carousel-item.active');
            if (!currentItem) return;

            const followingItem = currentItem.nextElementSibling || carouselEl.querySelector('.carousel-item:first-child');
            currentItem.classList.remove('active');
            followingItem.classList.add('active');
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

    const navbarCollapseEl = document.getElementById('navbarMain');
    if (navbarCollapseEl && navbarCollapseEl.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(navbarCollapseEl).hide();
    }
  });

  $(document).on("click", ".js-nav", function (e) {
    e.preventDefault();
    const page = $(this).data("page");
    console.log("click bouton sur", page);
    goTo(page);
  });

  goTo("accueil");
});
