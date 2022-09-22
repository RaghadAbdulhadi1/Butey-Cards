import { elementFactory } from "../../Utilities/utilities.js";

export default class Span {
  constructor(private spanText: string, private innerText: string) {
  }
  private addSpan(): HTMLElement {
    return elementFactory<HTMLSpanElement>(
      "span",
      {},
      this.spanText,
      elementFactory<HTMLAnchorElement>("a", {}, this.innerText)
    );
  }
  public get span(): HTMLSpanElement{
    return this.addSpan() as HTMLSpanElement;
  }
}
