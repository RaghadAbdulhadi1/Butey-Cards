import { elementFactory } from "../../utilities/utilities.js";

export default class Button {
  constructor(value, id) {
    this.value = value;
    this.id = id;
    return this.addButton();
  }
  addButton() {
    return elementFactory(
      "div",
      { class: "button" },
      elementFactory("input", {
        type: "submit",
        value: this.value.charAt(0).toUpperCase() + this.value.slice(1),
        id: this.id,
      })
    );
  }
}
