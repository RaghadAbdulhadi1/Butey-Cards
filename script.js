class PageBackground {
  constructor() {
    this.pageLayout = document.getElementById("container");
    this.pageBackground = document.createElement("img");
    this.pageBackground.className = "page-background";
    this.pageBackground.setAttribute("src", "./images/sunset.jpg");
    this.pageLayout.appendChild(this.pageBackground);
  }
}

class SideBarOption {
  constructor(iconClass) {
    this.option = document.createElement("li");
    this.option.setAttribute("class", "options");
    this.optionLink = document.createElement("i");
    this.optionLink.setAttribute("class", iconClass);
    this.option.appendChild(this.optionLink);
  }
}

class PageSideBar extends PageBackground {
  constructor() {
    super();
    this.sideBar = document.createElement("div");
    this.sideBar.setAttribute("class", "side-bar");
    this.sideBarOptions = document.createElement("ul");
    this.sideBarOptions.setAttribute("class", "side-bar-options");
    this.downloadOption = new SideBarOption("fa fa-download");
    this.likeOption = new SideBarOption("fa fa-heart-o");
    this.saveOption = new SideBarOption("fa-solid fa-bookmark");
    this.sideBarOptions.appendChild(this.downloadOption.option);
    this.sideBarOptions.appendChild(this.likeOption.option);
    this.sideBarOptions.appendChild(this.saveOption.option);
    this.sideBar.appendChild(this.sideBarOptions);
    this.pageLayout.appendChild(this.sideBar);
    this.sideBar.addEventListener("mouseover", this.onMouseOver);
    this.sideBar.addEventListener("mouseout", this.onMouseOut);
  }
  onMouseOver() {
    this.sideBar.classList.add("show-bar");
    this.pageBackground.classList.add("shrink-img");
  }
  onMouseOut() {
    this.sideBar = document.querySelector(".side-bar");
    this.pageBackground = document.querySelector(".page-background");
    this.sideBar.classList.remove("show-bar");
    this.pageBackground.classList.remove("shrink-img");
  }
}

class RenderPage {
  constructor() {
    const pageSideBar = new PageSideBar();
  }
}

const renderPage = new RenderPage();
