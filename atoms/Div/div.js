import { elementFactory } from "../../utilities.js";

export default class Container {
  constructor(className, id = "", containerText = "") {
    this.className = className;
    this.id = id;
    this.containerText = containerText;
  }
  createContainer() {
    return elementFactory(
      "div",
      { class: this.className, id: this.id },
      this.containerText
    );
  }
  get container() {
    return this.createContainer();
  }
}
