import { elementFactory } from "../../utilities.js";

export default class Li {
  constructor(href) {
    this.href = href;
  }
  createLi() {
    return elementFactory("li", { href: `#${this.href}` });
  }
  get li() {
    return this.createLi();
  }
}
