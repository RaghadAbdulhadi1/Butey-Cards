import { elementFactory } from "../../Utilities/utilities";

interface IButton {
  addButton(): HTMLDivElement
}
export default class Button implements IButton {
  constructor(private value: string) {
  }

  public addButton(): HTMLDivElement {
    return elementFactory(
      "div",
      { class: "button" },
      elementFactory(
        "button",
        {
          type: "button",
        },
        this.value
      )
    );
  }
  
  public get button(): HTMLDivElement {
    return this.addButton();
  }
}
