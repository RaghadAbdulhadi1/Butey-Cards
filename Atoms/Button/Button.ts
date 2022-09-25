import { elementFactory } from "../../Utilities/utilities";

interface IButton {
  addButton(): HTMLElement
}
export default class Button implements IButton {
  constructor(private value: string) {
  }

  public addButton(): HTMLElement {
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
  
  public get button(): HTMLElement {
    return this.addButton();
  }
}
