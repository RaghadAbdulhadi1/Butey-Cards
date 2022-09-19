import SliderImages from "../../molecules/SliderImages/SliderImages.js";
// import SliderControls from "../../molecules/SliderControls/SliderControls.js";
// import { buttonControls } from "../../constants.js";

class Slider {
  constructor() {
    this.slideContainer = document.getElementById("container");
    this.slide = document.querySelector(".image-scroller");
    this.addComponents();
  }
  addComponents() {
    // this.slideContainer.appendChild(new SliderControls().controls);
    this.slideContainer.appendChild(new SliderImages().images);
  }
}

const slider = new Slider();
