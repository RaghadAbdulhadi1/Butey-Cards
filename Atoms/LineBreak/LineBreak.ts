import { elementFactory } from "../../Utilities/utilities";

interface ILineBreak {
  addlineBreak(): HTMLElement
}

export default class LineBreak implements ILineBreak {
  public addlineBreak(): HTMLElement {
    return elementFactory<HTMLDivElement>("div", { class: "line-break" });
  }
  
  public get lineBreak(): HTMLElement {
    return this.addlineBreak();
  }
}
