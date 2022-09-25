import { elementFactory } from "../../Utilities/utilities";

interface IParagraphLink {
  addParagraphLink(): HTMLElement
}

export default class ParagraphLink implements IParagraphLink {
  constructor(private paragraphText: string, private innerText: string, private className: string = "", private href: string = "#") {
  }

  public addParagraphLink(): HTMLElement {
    return elementFactory<HTMLParagraphElement>(
      "p",
      { class: this.paragraphText },
      this.paragraphText,
      elementFactory<HTMLAnchorElement>("a", { class: this.className, href: this.href }, this.innerText)
    );
  }
  
  public get paragraphLink(): HTMLElement {
    return this.addParagraphLink();
  }
}
