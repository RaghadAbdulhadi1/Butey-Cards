import { elementFactory } from "../../Utilities/utilities";

interface ITitle {
  addText(): HTMLElement
}

export default class Title implements ITitle {
  constructor(private className: string, private containerText: string) {
  }

  public addText(): HTMLElement {
    return elementFactory<HTMLDivElement>("div", { class: this.className }, this.containerText);
  }
  
  public get text(): HTMLElement{
    return this.addText();
  }
}
