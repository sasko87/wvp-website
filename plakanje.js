const buttons = document.querySelectorAll(".zivotno-items__button");
const uslugiTekst = document.querySelectorAll(".uslugi-tekst");

const nezivotnoBtns = document.querySelectorAll(".nezivotno-items__button");
const nezivotnoText = document.querySelectorAll(".nezivotno-tekst");

const nezivotnoSecondBtns = document.querySelectorAll(".nezivotno-second-btn");
const nezivotnoSecondTekst = document.querySelectorAll(
  ".nezivotno-second-tekst"
);

const nezivotnoThirdBtns = document.querySelectorAll(".nezivotno-third-btn");
const nezivotnoThirdTekst = document.querySelectorAll(".nezivotno-third-tekst");

function tabsClick(
  button,
  clickedClosestString,
  textButton,
  textClassSelect,
  ifClickedSelect
) {
  button.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const clicked = e.target.closest(`.${clickedClosestString}`);
      if (clicked.classList.contains("uslugi-tab__aktive")) {
        clicked.classList.remove("uslugi-tab__aktive");
        document
          .querySelector(`.${textClassSelect}-${clicked.dataset.tab}`)
          .classList.remove("plakanje-opcii_active");
        document
          .querySelector(`.${ifClickedSelect}`)
          .classList.remove("gray-background");
        return;
      }

      button.forEach((button) => button.classList.remove("uslugi-tab__aktive"));

      clicked.classList.add("uslugi-tab__aktive");
      textButton.forEach((us) => {
        us.classList.remove("plakanje-opcii_active");
      });
      document
        .querySelector(`.${textClassSelect}-${clicked.dataset.tab}`)
        .classList.add("plakanje-opcii_active");
      if (clicked) {
        document
          .querySelector(`.${ifClickedSelect}`)
          .classList.add("gray-background");
      }
      e.stopPropagation();
    });
  });
  document.addEventListener("click", () => {
    button.forEach((btn) => {
      btn.classList.remove("uslugi-tab__aktive");
    });
    textButton.forEach((us) => {
      us.classList.remove("plakanje-opcii_active");
    });
    document
      .querySelector(`.${ifClickedSelect}`)
      .classList.remove("gray-background");
  });
}

tabsClick(
  buttons,
  "zivotno-items__button",
  uslugiTekst,
  "uslugi-tekst",
  "plakanje-nezivotno-container"
);

tabsClick(
  nezivotnoBtns,
  "nezivotno-items__button",
  nezivotnoText,
  "nezivotno-tekst",
  "nezivotno-first"
);

tabsClick(
  nezivotnoSecondBtns,
  "nezivotno-second-btn",
  nezivotnoSecondTekst,
  "nezivotno-second-tekst",
  "nezivotno-bg"
);

tabsClick(
  nezivotnoThirdBtns,
  "nezivotno-third-btn",
  nezivotnoThirdTekst,
  "nezivotno-third-tekst",
  "nezivotno-third-bg"
);
