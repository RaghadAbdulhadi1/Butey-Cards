import { elementFactory } from "../../Utilities/utilities.js";

export default class OptionField {
  constructor(private optionText: string) {
  }

  private addOptions(): HTMLElement {
    return elementFactory<HTMLOptionElement>(
      "option",
      { value: this.optionText.toLowerCase() },
      this.optionText
    );
  }
  
  public get option(): HTMLOptionElement {
    return this.addOptions() as HTMLOptionElement;
  }
}
