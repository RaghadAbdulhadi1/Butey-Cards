import { elementFactory } from "../../Utilities/utilities.js";

export default class Paragraph {
  constructor(private paragraphText: string, private id: string, private className: string) {
  }
  private addParagraph(): HTMLElement {
    return elementFactory<HTMLParagraphElement>(
      "p",
      { id: this.id, class: this.className },
      this.paragraphText
    );
  }
  public get paragraph(): HTMLParagraphElement {
    return this.addParagraph() as HTMLParagraphElement;
  }
}
