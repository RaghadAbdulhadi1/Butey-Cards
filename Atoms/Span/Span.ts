import { elementFactory } from "../../Utilities/utilities";

interface ISpan {
  addSpan(): HTMLSpanElement
}

export default class Span implements ISpan {
  constructor(private spanText: string, private innerText: string) {
  }

  public addSpan(): HTMLSpanElement {
    return elementFactory(
      "span",
      {},
      this.spanText,
      elementFactory("a", {}, this.innerText)
    );
  }
  
  public get span(): HTMLSpanElement{
    return this.addSpan();
  }
}
