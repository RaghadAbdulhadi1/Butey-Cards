import { elementFactory } from "../../utilities.js";

export default class Image {
  constructor(imageURL) {
    this.imageURL = imageURL;
  }
  createImage() {
    return elementFactory(
      "div",
      { class: "image-element" },
      elementFactory("img", { src: this.imageURL })
    );
  }
  get image() {
    return this.createImage();
  }
}
