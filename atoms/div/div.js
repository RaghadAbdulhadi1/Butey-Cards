import { elementFactory } from "../../utilities/utilities.js";

export default class Container {
  constructor(className, containerText = "", id = "") {
    this.className = className;
    this.containerText = containerText;
    this.id = id;
    return this.addContainer();
  }
  addContainer() {
    return elementFactory(
      "div",
      { class: this.className, id: this.id },
      this.containerText
    );
  }
}
