class FetchData {
  constructor() {
    this.url = "https://jsonplaceholder.typicode.com/photos";
    this.apiResponse = [];
    this.jsonFormat = {};
    this.numberOfObjects = 10;
  }
  async fetchData() {
    this.apiResponse = await fetch(this.url);
    this.jsonFormat = await this.apiResponse.json();
    return this.jsonFormat.slice(0, this.numberOfObjects);
  }
  getColorsNames() {
    return {
      "92c952": "Mantis",
      "771796": "Seance",
      "24f355": "Malachite",
      "d32776": "Cerise",
      "f66b97": "Froly",
      "56a8c2": "Fountain Blue",
      "b0f7cc": "Ice Cold",
      "54176f": "Honey Flower",
      "51aa97": "Tradewind",
      "810b14": "Monarch",
    };
  }
}

class CardsTrack {
  constructor() {
    this.colorsCount = document.createElement("h2");
    this.colorsName = document.createElement("h2");

    this.colorsCount.setAttribute("class", "colors-count");
    this.colorsName.setAttribute("class", "colors-name");

    this.colorsCount.innerText = "Count of Selected Cards: ";
    this.colorsName.innerText = "Selected Colors: ";
  }
}

class PageHeader extends CardsTrack {
  constructor() {
    super();
    this.header = document.createElement("header");
    this.title = document.createElement("h1");

    this.title.setAttribute("class", "title");
    this.header.setAttribute("class", "page-header");

    this.title.innerText = "Lorem Ipsum";

    this.header.appendChild(this.title);
    this.header.appendChild(this.colorsCount);
    this.header.appendChild(this.colorsName);

    this.body = document.querySelector("body");
    this.body.appendChild(this.header);
  }
}

class Card extends CardsTrack {
  constructor(card, cardName, colorslist) {
    super();
    this.card = card;

    this.card = document.createElement("div");
    this.cardImage = document.createElement("img");
    this.cardTitle = document.createElement("h3");
    this.cardDescription = document.createElement("p");
    this.cardButton = document.createElement("button");

    this.card.setAttribute("class", "card");
    this.cardImage.setAttribute("src", card.url);
    this.cardTitle.setAttribute("class", "card-title");
    this.cardDescription.setAttribute("class", "card-description");
    this.cardButton.addEventListener("click", this.onClick);

    this.cardImage.textContent = card.url;
    this.cardTitle.textContent = card.title;
    this.cardDescription.textContent = card.title;
    this.cardButton.textContent = "Button";
    this.cardButton.classList.add("card-button");

    this.card.appendChild(this.cardImage);
    this.card.appendChild(this.cardTitle);
    this.card.appendChild(this.cardDescription);
    this.card.appendChild(this.cardButton);

    this.hexCode = card.url.substr(card.url.length - 6);
    this.isClicked = false;
    this.cardName = cardName;
    this.colorsNameList = colorslist;
  }
  onClick = () => {
    this.isClicked = !this.isClicked;
    if (this.isClicked) {
      this.colorsNameList.push(this.cardName[this.hexCode]);
      this.cardButton.classList.add("clicked-button");
      this.card.classList.add("clicked-card");
    } else {
      this.colorsNameList.splice(
        this.colorsNameList.indexOf(this.cardName[this.hexCode]),
        1
      );
      this.cardButton.classList.remove("clicked-button");
      this.card.classList.remove("clicked-card");
    }
    this.colorsCount = document.querySelector(".colors-count");
    this.colorsCount.innerHTML =
      "Count of Selected Cards: " + this.colorsNameList.length;
    this.colorsName = document.querySelector(".colors-name");
    this.colorsName.innerHTML = "Selected Colors: " + this.colorsNameList;
  };
  get getCard() {
    return this.card;
  }
}

class Cards {
  constructor() {
    this.body = document.querySelector("body");
    this.cards = document.createElement("div");

    this.cards.setAttribute("class", "cards");

    this.body.appendChild(this.cards);

    this.fetchedData = new FetchData();
    this.colorsName = this.fetchedData.getColorsNames();
    this.cardsData = [];
    this.colorsNameList = [];
  }
  async renderCards() {
    this.cardsData = await this.fetchedData.fetchData();
    this.cardsData?.forEach((card) => {
      this.cards.appendChild(
        new Card(card, this.colorsName, this.colorsNameList).getCard
      );
    });
  }
}

class RenderPage {
  constructor() {
    this.header = new PageHeader();
    this.body = new Cards();
    this.body.renderCards();
  }
}
const render = new RenderPage();
