let currentlyDisplayedIndex = -1;
const prasanja = document.querySelectorAll(".prasanja");

function toggleOdgovori(index) {
  const odgovori = document.querySelectorAll(".odgovori")[index];

  if (index === currentlyDisplayedIndex) {
    odgovori.style.display = "none";
    currentlyDisplayedIndex = -1;
  } else {
    if (currentlyDisplayedIndex !== -1) {
      const prevOdgovori =
        document.querySelectorAll(".odgovori")[currentlyDisplayedIndex];
      prevOdgovori.style.display = "none";
    }
    odgovori.style.display = "block";
    currentlyDisplayedIndex = index;
  }
}

for (let i = 0; i < prasanja.length; i++) {
  const prasanja = document.querySelectorAll(".prasanja")[i];
  prasanja.addEventListener("click", () => toggleOdgovori(i));
}
