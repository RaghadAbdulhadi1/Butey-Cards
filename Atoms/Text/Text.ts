import { elementFactory } from "../../Utilities/utilities.js";

export default class Title {
  constructor(private className: string, private containerText: string) {
  }
  addText(): HTMLElement {
    return elementFactory<HTMLDivElement>("div", { class: this.className }, this.containerText);
  }
  get text(): HTMLDivElement{
    return this.addText() as HTMLDivElement;
  }
}
