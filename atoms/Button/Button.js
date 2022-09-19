import { elementFactory } from "../../utilities.js";

export default class Button {
  constructor(id, className) {
    this.id = id;
    this.className = className;
  }
  createButton() {
    return elementFactory(
      "button",
      { id: this.id },
      elementFactory("i", { class: this.className })
    );
  }
  get button() {
    return this.createButton();
  }
}
