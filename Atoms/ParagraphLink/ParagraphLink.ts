import { elementFactory } from "../../Utilities/utilities";

interface IParagraphLink {
  addParagraphLink(): HTMLParagraphElement
}

export default class ParagraphLink implements IParagraphLink {
  constructor(private paragraphText: string, private innerText: string, private className: string = "", private href: string = "#") {
  }

  public addParagraphLink(): HTMLParagraphElement {
    return elementFactory(
      "p",
      { class: this.paragraphText },
      this.paragraphText,
      elementFactory("a", { class: this.className, href: this.href }, this.innerText)
    );
  }
  
  public get paragraphLink(): HTMLParagraphElement {
    return this.addParagraphLink();
  }
}
