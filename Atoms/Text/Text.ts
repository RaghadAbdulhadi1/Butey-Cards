import { elementFactory } from "../../Utilities/utilities.js";

export default class Title {
  constructor(private className: string, private containerText: string) {
  }
  private addText(): HTMLElement {
    return elementFactory<HTMLDivElement>("div", { class: this.className }, this.containerText);
  }
  public get text(): HTMLDivElement{
    return this.addText() as HTMLDivElement;
  }
}
