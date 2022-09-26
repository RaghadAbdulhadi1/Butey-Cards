import { elementFactory } from "../../Utilities/utilities";

interface ILineBreak {
  addlineBreak(): HTMLDivElement
}

export default class LineBreak implements ILineBreak {
  public addlineBreak(): HTMLDivElement {
    return elementFactory("div", { class: "line-break" });
  }
  
  public get lineBreak(): HTMLDivElement {
    return this.addlineBreak();
  }
}
