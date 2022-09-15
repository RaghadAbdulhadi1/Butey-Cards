import { elementFactory } from "../../utilities/utilities.js";

export default class Span {
  constructor(spanText, anchorText) {
    this.spanText = spanText;
    this.anchorText = anchorText;
    return this.addSpan();
  }
  addSpan() {
    return elementFactory(
      "span",
      {},
      this.spanText,
      elementFactory("a", {}, this.anchorText)
    );
  }
}
