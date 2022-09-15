import { elementFactory } from "../../utilities/utilities.js";

export default class InputFeild {
  constructor(type, placeholder, id, iconClass) {
    this.type = type;
    this.placeholder = placeholder;
    this.id = id;
    this.iconClass = iconClass;
    return this.addFormInput();
  }
  addFormInput() {
    return elementFactory(
      "div",
      { class: "input-feild" },
      elementFactory("input", {
        type: this.type,
        placeholder: this.placeholder,
        id: this.id,
      }),
      elementFactory("i", { class: this.iconClass })
    );
  }
}
