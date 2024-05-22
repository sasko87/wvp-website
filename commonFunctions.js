// mark path in nav
function markPath() {
  const path = window.location.pathname;
  const links = document.querySelectorAll("#meni-list a");

  links.forEach(function (link) {
    let href = link.getAttribute("href");
    if (path.indexOf(href) !== -1) {
      link.classList.add("active");
    }
  });
}
markPath();
// hamburger menu

function menu() {
  const mainMenu = document.querySelector("#meni-list");
  const closeMenu = document.querySelector(".closeMenu");
  const openMenu = document.querySelector(".openMenu");

  openMenu.addEventListener("click", show);
  closeMenu.addEventListener("click", close);

  function show() {
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";
  }

  function close() {
    mainMenu.style.top = "-150%";
  }
}

menu();

//revail sections

const revealSection = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("section--hidden");
      observer.unobserve(entry.target);
    }
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

document.querySelectorAll("section").forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
