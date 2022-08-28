class CardDetails {
  constructor() {
    this.colorsCount = document.createElement("h2");
    this.colorsName = document.createElement("h2");
    this.colorsCount.setAttribute("class", "colors-count");
    this.colorsName.setAttribute("class", "colors-name");
    this.colorsCount.innerText = "Count of Selected Cards: ";
    this.colorsCount.innerText = "Selected Colors: ";
  }

  get cardDetails() {
    return this.colorsCount, this.colorsName;
  }
}

class Header {
  static title = document.createElement("h1");
  constructor() {
    Header.title.setAttribute("class", "title");
    Header.title.innerText = "Lorem Ipsum";
  }
}

class CardItems {
  static card = document.createElement("div");
  static cardImage = document.createElement("img");
  static cardTitle = document.createElement("h3");
  static cardDescription = document.createElement("p");
  constructor() {
    this.cardButton = document.createElement("button");
    CardItems.card.setAttribute("class", "card");
    CardItems.cardImage.setAttribute(
      "src",
      CardItems.fetchedData.cardsData.url
    );
    CardItems.cardTitle.setAttribute("class", "card-title");
    CardItems.cardDescription.setAttribute("class", "card-description");
    this.cardButton.addEventListener("click", this.clickButton());
    CardItems.cardImage.textContent = CardItems.fetchedData.cardsData.url;
    CardItems.cardTitle.textContent = CardItems.fetchedData.cardsData.title;
    this.cardDescription.textContent = CardItems.fetchedData.cardsData.title;
    this.cardButton.textContent = "Button";
    CardItems.card.appendChild(cardImg);
    CardItems.card.appendChild(cardTitle);
    CardItems.card.appendChild(cardDescription);
    CardItems.card.appendChild(cardButton);
    /////////////////////////////////////
    // CardItems.cards.appendChild(card);
    /////////////////////////////////////
  }
}

class CardButton extends CardDetails {
  constructor() {
    this.colorsCounter = 0;
    this.colorsNameList = [];
    this.cardsCounter = 0;
    this.colorsCount += this.colorsCounter;
    this.colorsName += this.colorsName;
    this.isClicked = false;
    // this.selectedColor = colorsName[hexCode];
  }
  clickButton() {
    this.isClicked = !this.isClicked;
    if (this.isClicked) {
      // this.colorsNameList.push(selectedColor);
      this.cardsCounter++;
      this.cardButton.style.backgroundColor = "#669bbc";
    } else {
      // this.colorsNameList.splice();
      this.cardsCounter--;
      this.cardButton.style.backgroundColor = "#003049";
    }
  }
}

class Cards extends CardButton {
  static cards = document.createElement("div");

  constructor() {
    super();

    this.fetchedData = new FetchData();
    this.cardsDetails = [];
    this.hexCode = "";
  }

  drawCards() {
    this.cardsDetails = this.fetchedData.fetchData();
    this.cardsDetails.forEach((card) => {
      this.hexCode = card.url.substr(card.url.length - 6);
    });
  }
}

const cards = document.getElementById("cards");
const colorsName = {
  "92c952": "Mantis",
  771796: "Seance",
  "24f355": "Malachite",
  d32776: "Cerise",
  f66b97: "Froly",
  "56a8c2": "Fountain Blue",
  b0f7cc: "Ice Cold",
  "54176f": "Honey Flower",
  "51aa97": "Tradewind",
  "810b14": "Monarch",
};
async function fetchColorsJSON() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const colors = await response.json();
  return colors.slice(0, 10);
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
        const selected = colorsName[hexCode];
        if (isClicked) {
          colorNames.push(selected);
          counter = counter + 1;
          cardButton.style.backgroundColor = "#669bbc";
        } else {
          colorNames.splice(colorNames.indexOf(selected), 1);
          counter = counter - 1;
          cardButton.style.backgroundColor = "#003049";
        }
        count.innerHTML = "Count of Selected Cards: " + colorNames.length();
        cardsColors.innerHTML = "Selected Colors:" + colorNames;
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
