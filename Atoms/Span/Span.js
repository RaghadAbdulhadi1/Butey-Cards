import { elementFactory } from "../../Utilities/utilities.js";

export default class Span {
  constructor(spanText, innerText) {
    this.spanText = spanText;
    this.innerText = innerText;
  }
  addSpan() {
    return elementFactory(
      "span",
      {},
      this.spanText,
      elementFactory("a", {}, this.innerText)
    );
  }
  get span(){
    return this.addSpan();
  }
}
