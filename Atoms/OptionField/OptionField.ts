import { elementFactory } from "../../Utilities/utilities";

interface IOptionFeild {
  addOptions(): HTMLOptionElement
}

export default class OptionField implements IOptionFeild {
  constructor(private optionText: string) {
  }

  public addOptions(): HTMLOptionElement {
    return elementFactory(
      "option",
      { value: this.optionText.toLowerCase() },
      this.optionText
    );
  }
  
  public get option(): HTMLOptionElement {
    return this.addOptions();
  }
}
