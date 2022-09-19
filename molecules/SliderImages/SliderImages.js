import Container from "../../atoms/Div/div.js";
import Image from "../../atoms/Image/Image.js";
import { IMAGE_URLS } from "../../constants.js";

export default class SliderImages {
  constructor() {
    this.slide = new Container("image-scroller snaps-inline").container;
    this.addSliderImages();
  }
  addSliderImages() {
    IMAGE_URLS.forEach((imageURL) =>
      this.slide.appendChild(new Image(imageURL).image)
    );
  }
  get images() {
    return this.slide;
  }
}
