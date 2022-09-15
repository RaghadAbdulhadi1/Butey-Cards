import { elementFactory } from "../../Utilities/utilities.js";

export default class InputFeild {
  constructor(type, placeholder, className, iconClass) {
    this.type = type;
    this.placeholder = placeholder;
    this.className = className;
    this.iconClass = iconClass;
  }
  addFormInput() {
    return elementFactory(
      "div",
      { class: "input-feild" },
      elementFactory("input", {
        type: this.type,
        placeholder: this.placeholder,
        class: this.className,
      }),
      elementFactory("i", { class: this.iconClass })
    );
  }
  get formInput(){
    return this.addFormInput();
  }
}
