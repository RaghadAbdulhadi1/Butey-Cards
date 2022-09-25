import { elementFactory } from "../../Utilities/utilities";

interface IHeader {
  addHeader(): HTMLElement;
}

export default class Header implements IHeader {
  constructor(private text: string, private className: string, private type: string = "h3") {
  }

  public addHeader(): HTMLElement {
    return elementFactory<HTMLTitleElement>(this.type, { class: this.className }, this.text);
  }
  
  public get header(): HTMLElement {
    return this.addHeader();
  }
}
