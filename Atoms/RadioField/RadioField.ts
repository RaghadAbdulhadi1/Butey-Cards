import { elementFactory } from '../../Utilities/utilities.js';

export default class RadioField {
  constructor(private radioText: string, private checkboxName: string) {
  }
  private addRadioChoice(): HTMLElement {
    return elementFactory<HTMLDivElement>(
      "div",
      { class: "checkboxes-gender" },
      elementFactory("input", {
        type: "checkbox",
        name: this.checkboxName,
        class: "gender",
      }),
      elementFactory<HTMLLabelElement>("label", { class: "gender-label" }, this.radioText)
    );
  }
  get radioFeild(): HTMLDivElement {
    return this.addRadioChoice() as HTMLDivElement;
  }
}
