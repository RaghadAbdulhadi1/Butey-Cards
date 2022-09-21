import { elementFactory } from "../../Utilities/utilities.js";

export default class Header {
  constructor(private text: string, private type: string = "h3") {
  }
  private addHeader(): HTMLElement {
    return elementFactory<HTMLTitleElement>(this.type, { class: "validationHeader" }, this.text);
  }
  get header(): HTMLTitleElement {
    return this.addHeader() as HTMLTitleElement;
  }
}
