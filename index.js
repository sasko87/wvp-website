//------------ buttons za naslovna
const dpzoBtn = document.getElementById("btn-dpzo");
const zivotnoBtn = document.getElementById("btn-zivotno");
const nezivotnoBtn = document.getElementById("btn-nezivotno");

function buttonRedirect(button, destination) {
  button.addEventListener("click", () => {
    window.location.href = `${destination}`;
  });
}

buttonRedirect(dpzoBtn, "uslugi.html#dobrovolno-zdravstveno-osiguruvanje");

buttonRedirect(zivotnoBtn, "uslugi.html#main-uslugi");

buttonRedirect(nezivotnoBtn, "uslugi.html#nezivotno-osiguruvanje");

// COUNTER ZA NASLOVNA

const countDogovori = document.querySelector(".count-dogovori");
const countPremija = document.querySelector(".count-premija");

function startCounter(klasa, ostatok, brojac, maksimum) {
  let count = 1;
  const interval = setInterval(() => {
    klasa.textContent = formatNumberWithDot(count + ostatok);
    count += brojac; // 27240 % 1450 i na count se dodava 1139
    if (count > maksimum) {
      clearInterval(interval);
    }
  }, 90);
}

function formatNumberWithDot(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Startuvanje na counter koa ke se pojavi sekcijata
const counterSection = document.getElementById("naslovna-counter");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 655 % 2153 i na count se dodava 1103
      startCounter(countDogovori, 654, 2153, 35103);
      startCounter(countPremija, 20961917, 92152363, 1311095000);
      observer.unobserve(entry.target);
    }
  });
}, options);

observer.observe(counterSection);
