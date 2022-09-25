import { elementFactory } from '../../Utilities/utilities';

interface IRadioField {
  addRadioChoice(): HTMLElement
}

export default class RadioField implements IRadioField {
  constructor(private radioText: string, private checkboxName: string) {
  }

  public addRadioChoice(): HTMLElement {
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
  
  public get radioFeild(): HTMLElement {
    return this.addRadioChoice();
  }
}
