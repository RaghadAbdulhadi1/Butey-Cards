import { elementFactory } from "../../Utilities/utilities.js";

export default class Title {
  constructor(className, containerText) {
    this.className = className;
    this.containerText = containerText;
  }
  addText() {
    return elementFactory("div", { class: this.className }, this.containerText);
  }
  get text(){
    return this.addText();
  }
}
