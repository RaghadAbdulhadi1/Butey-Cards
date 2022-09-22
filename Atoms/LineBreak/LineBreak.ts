import { elementFactory } from "../../Utilities/utilities.js";

export default class LineBreak {
  private addlineBreak(): HTMLElement {
    return elementFactory<HTMLDivElement>("div", { class: "line-break" });
  }
  
  public get lineBreak(): HTMLDivElement {
    return this.addlineBreak() as HTMLDivElement;
  }
}
