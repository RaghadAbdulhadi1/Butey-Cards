import { elementFactory } from "../../Utilities/utilities";

interface ISpan {
  addSpan(): HTMLElement
}

export default class Span implements ISpan {
  constructor(private spanText: string, private innerText: string) {
  }

  public addSpan(): HTMLElement {
    return elementFactory<HTMLSpanElement>(
      "span",
      {},
      this.spanText,
      elementFactory<HTMLAnchorElement>("a", {}, this.innerText)
    );
  }
  
  public get span(): HTMLElement{
    return this.addSpan();
  }
}
