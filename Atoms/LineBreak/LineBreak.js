import { elementFactory } from "../../Utilities/utilities.js";

export default class LineBreak {
  constructor() {}
  addlineBreak() {
    return elementFactory("div", { class: "line-break" });
  }
  get lineBreak() {
    return this.addlineBreak();
  }
}
