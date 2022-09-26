import { elementFactory } from "../../Utilities/utilities";

interface ITitle {
  addText(): HTMLDivElement
}

export default class Title implements ITitle {
  constructor(private className: string, private containerText: string) {
  }

  public addText(): HTMLDivElement {
    return elementFactory("div", { class: this.className }, this.containerText);
  }
  
  public get text(): HTMLDivElement{
    return this.addText();
  }
}
