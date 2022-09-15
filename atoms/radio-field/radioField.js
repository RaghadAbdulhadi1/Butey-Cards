import { elementFactory } from '../../utilities/utilities.js';

export default class RadioField {
  constructor(radioText, checkboxName) {
    this.radioText = radioText;
    this.checkboxName = checkboxName;
    return this.addRadioChoice();
  }
  addRadioChoice() {
    return elementFactory(
      "div",
      { class: "checkboxes-gender" },
      elementFactory("input", {
        type: "checkbox",
        name: this.checkboxName,
        class: "gender",
      }),
      elementFactory("label", { class: "gender-label" }, this.radioText)
    );
  }
}
