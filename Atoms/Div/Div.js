import { elementFactory } from "../../Utilities/utilities.js";

export default class Container {
  constructor(className, containerText = "", id = "") {
    this.className = className;
    this.containerText = containerText;
    this.id = id; 
  }
  addContainer() {
    return elementFactory(
      "div",
      { class: this.className, id: this.id },
      this.containerText
    );
  }
  get container() {
    return this.addContainer();
  }
}
