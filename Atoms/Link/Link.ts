import { elementFactory } from "../../Utilities/utilities.js";

export default class link {
  constructor(private className: string, private innerText: string, private href: string = "#") {
  }
  private addLink() {
    return elementFactory<HTMLAnchorElement>(
      "a",
      { class: this.className, href: this.href },
      this.innerText
    );
  }
  get link(): HTMLAnchorElement {
    return this.addLink() as HTMLAnchorElement;
  }
}
