const cards = document.getElementById("cards");
const colorsName = {
  "92c952": "Mantis",
  "771796": "Seance",
  "24f355": "Malachite",
  "d32776": "Cerise",
  "f66b97":"Froly",
  "56a8c2": "Fountain Blue",
  "b0f7cc": "Ice Cold",
  "54176f": "Honey Flower",
  "51aa97": "Tradewind",
  "810b14": "Monarch"
}
async function fetchColorsJSON() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const colors = await response.json();
  return colors.slice(0,10);
}

let counter = 0;
let colorNames = [];
async function addColorsToCards() {
  const colors = await fetchColorsJSON();

  // Get Element
  const count = document.getElementById("cards-count");
  const cardsColors = document.getElementById("cards-colors");
  colors.forEach((color) => {
    const hexCode = color.url.substr(color.url.length - 6);
    console.log(hexCode);
    let isClicked = false;
    // Create Elements
    const card = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardTitle = document.createElement("h3");
    const cardDescription = document.createElement("p");
    const cardButton = document.createElement("button");

    // Set Attributes
    card.setAttribute("class", "card");
    cardImg.setAttribute("src", color.url);
    cardTitle.setAttribute("class", "card-title");
    cardDescription.setAttribute("class", "card-description");
    cardButton.setAttribute(
      "onClick",
      cardButton.addEventListener("click", function () {
        isClicked = !isClicked;
        const selected = colorsSelected(hexCode);
        if (isClicked) {
          colorNames.push(selected);
          counter = counter + 1;
          cardButton.style.backgroundColor = "#669bbc";
        } else {
          colorNames.splice(colorNames.indexOf(selected), 1);
          counter = counter - 1;
          cardButton.style.backgroundColor = "#003049";
        }
        count.innerHTML = "Count of Selected Cards: " + counter;
        cardsColors.innerHTML = "Selected Colors:" + colorNames;
        console.log(colorNames)
      })
    );

    // Elements Content
    cardImg.textContent = color.url;
    cardTitle.textContent = color.title;
    cardDescription.textContent = color.title;
    cardButton.textContent = "Button";

    // Append Childs
    card.appendChild(cardImg);
    card.appendChild(cardTitle);
    card.appendChild(cardDescription);
    card.appendChild(cardButton);
    cards.appendChild(card);
  });
}
addColorsToCards();

function colorsSelected(hexCode) {
  return colorsName[hexCode];
  };