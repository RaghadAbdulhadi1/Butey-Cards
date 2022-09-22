import { elementFactory } from "../../Utilities/utilities.js";

export default class ParagraphLink {
  constructor(private paragraphText: string, private innerText: string, private className: string = "", private href: string = "#") {
  }
  private addParagraphLink(): HTMLElement {
    return elementFactory<HTMLParagraphElement>(
      "p",
      { class: this.paragraphText },
      this.paragraphText,
      elementFactory<HTMLAnchorElement>("a", { class: this.className, href: this.href }, this.innerText)
    );
  }
  public get paragraphLink(): HTMLParagraphElement {
    return this.addParagraphLink() as HTMLParagraphElement;
  }
}
