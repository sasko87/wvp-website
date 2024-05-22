const buttons = document.querySelectorAll(".zivotno-items__button");
const uslugiTekst = document.querySelectorAll(".uslugi-tekst");
const nezivotnoButtons = document.querySelectorAll(".nezivotno-items__button");
const nezivotnoTekst = document.querySelectorAll(".nezivotno-tekst");

function clickHandler(
  button,
  clickedClosestString,
  activeTabClass,
  textUslugi,
  activeText,
  textClassSelect
) {
  button.forEach((btn) => {
    //buttons
    btn.addEventListener("click", (e) => {
      button.forEach(
        (
          button //buttons
        ) => button.classList.remove(activeTabClass)
      );
      const clicked = e.target.closest(`.${clickedClosestString}`); //".zivotno-items__button"
      clicked.classList.add(activeTabClass);
      textUslugi.forEach((us) => {
        //uslugiTekst
        us.classList.remove(activeText);
      });
      document
        .querySelector(`.${textClassSelect}-${clicked.dataset.tab}`) //`.uslugi-tekst-${clicked.dataset.tab}`)
        .classList.add(activeText);
    });
  });
}

clickHandler(
  buttons,
  "zivotno-items__button",
  "uslugi-tab__aktive",
  uslugiTekst,
  "uslugi-tekst__activ",
  "uslugi-tekst"
);

clickHandler(
  nezivotnoButtons,
  "nezivotno-items__button",
  "nezivotno-tab__active",
  nezivotnoTekst,
  "nezivotno-tekst__activ",
  "nezivotno-tekst"
);
