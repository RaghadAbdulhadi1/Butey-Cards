import { elementFactory } from "../../Utilities/utilities.js";

export default class Button {
  constructor(private value: string) {
  }

  private addButton(): HTMLElement {
    return elementFactory<HTMLDivElement>(
      "div",
      { class: "button" },
      elementFactory<HTMLButtonElement>(
        "button",
        {
          type: "button",
        },
        this.value
      )
    );
  }
  
  public get button(): HTMLButtonElement {
    return this.addButton() as HTMLButtonElement;
  }
}
