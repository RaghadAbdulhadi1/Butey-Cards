import { elementFactory } from "../../Utilities/utilities";

interface IOptionFeild {
  addOptions(): HTMLElement
}

export default class OptionField implements IOptionFeild {
  constructor(private optionText: string) {
  }

  public addOptions(): HTMLElement {
    return elementFactory<HTMLOptionElement>(
      "option",
      { value: this.optionText.toLowerCase() },
      this.optionText
    );
  }
  
  public get option(): HTMLElement {
    return this.addOptions();
  }
}
