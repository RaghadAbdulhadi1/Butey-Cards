import { elementFactory } from "../../Utilities/utilities";

interface IHeader {
  addHeader(): HTMLHeadingElement;
}

export default class Header implements IHeader {
  constructor(private text: string, private className: string) {
  }

  public addHeader(): HTMLHeadingElement {
    return elementFactory("h3", { class: this.className }, this.text);
  }
  
  public get header(): HTMLHeadingElement {
    return this.addHeader();
  }
}
