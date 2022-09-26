import { elementFactory } from '../../Utilities/utilities';

interface IRadioField {
  addRadioChoice(): HTMLDivElement
}

export default class RadioField implements IRadioField {
  constructor(private radioText: string, private checkboxName: string) {
  }

  public addRadioChoice(): HTMLDivElement {
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
  
  public get radioFeild(): HTMLDivElement {
    return this.addRadioChoice();
  }
}
