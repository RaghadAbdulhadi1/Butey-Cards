import { elementFactory } from "../../utilities/utilities.js";

export default class Paragraph {
  constructor(paragraphText, id, className) {
    this.paragraphText = paragraphText;
    this.id = id;
    this.className = className;
    return this.addParagraph();
  }
  addParagraph() {
    return elementFactory(
      "p",
      { id: this.id, class: this.className },
      this.paragraphText
    );
  }
}
