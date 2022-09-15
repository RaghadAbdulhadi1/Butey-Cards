import { elementFactory } from "../../utilities/utilities.js";

export default class ParagraphLink {
  constructor(paragraphText, anchorText, className = "") {
    this.paragraphText = paragraphText;
    this.anchorText = anchorText;
    this.className = className;
    return this.addParagraphLink();
  }
  addParagraphLink() {
    return elementFactory(
      "p",
      {},
      this.paragraphText,
      elementFactory("a", { class: this.className, href: "#" }, this.anchorText)
    );
  }
}
