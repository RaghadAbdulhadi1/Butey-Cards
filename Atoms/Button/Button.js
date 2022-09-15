import { elementFactory } from "../../Utilities/utilities.js";

export default class Button {
  constructor(value) {
    this.value = value;
  }
  addButton() {
    return elementFactory(
      "div",
      { class: "button" },
      elementFactory(
        "button",
        {
          type: "button",
        },
        this.value
      )
    );
  }
  get button() {
    return this.addButton();
  }
}
