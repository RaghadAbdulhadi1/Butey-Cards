import { elementFactory } from "../../Utilities/utilities.js";

export default class Paragraph {
  constructor(private paragraphText: string, private id: string, private className: string) {
  }
  private addParagraph() {
    return elementFactory<HTMLParagraphElement>(
      "p",
      { id: this.id, class: this.className },
      this.paragraphText
    );
  }
  get paragraph(): HTMLParagraphElement {
    return this.addParagraph() as HTMLParagraphElement;
  }
}
