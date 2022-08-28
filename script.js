class PageBackground {
  constructor() {
    this.pageLayout = document.getElementById("container");
    this.pageBackground = document.createElement("img");
    this.pageBackground.setAttribute("src", "./images/sunset.jpg");
    this.pageLayout.appendChild(this.pageBackground);
  }
}

class DownloadOption {
  constructor() {
    this.downloadOption = document.createElement("li");
    this.downloadOption.setAttribute("class", "options");
    this.downloadOptionLink = document.createElement("a");
    this.downloadOptionLink.setAttribute("href", "#");
    this.downloadOption.appendChild(this.downloadOptionLink);
  }
}

class LikeOption {
  constructor() {
    this.likeOption = document.createElement("li");
    this.likeOption.setAttribute("class", "options");
    this.likeOptionLink = document.createElement("a");
    this.likeOptionLink.setAttribute("href", "#");
    this.likeOption.appendChild(this.likeOptionLink);
  }
}

class SaveOption {
  constructor() {
    this.saveOption = document.createElement("li");
    this.saveOption.setAttribute("class", "options");
    this.saveOptionLink = document.createElement("a");
    this.saveOptionLink.setAttribute("href", "#");
    this.saveOption.appendChild(this.saveOptionLink);
  }
}

class PageSideBar {
  constructor() {
    this.pageLayout = document.getElementById("container");
    this.sideBar = document.createElement("ul");
    this.sideBar.setAttribute("class", "sidebar");
    this.pageLayout.appendChild(this.sideBar);
    this.downloadOption = new DownloadOption();
    this.likeOption = new LikeOption();
    this.saveOption = new SaveOption();
    this.sideBar.appendChild(this.likeOption.likeOption);
    this.sideBar.appendChild(this.saveOption.saveOption);
    this.sideBar.appendChild(this.downloadOption.downloadOption);
  }
}

class RenderPage {
  constructor() {
    const pageLayout = new PageBackground();
    const pageSideBar = new PageSideBar();
  }
}

const renderPage = new RenderPage();
