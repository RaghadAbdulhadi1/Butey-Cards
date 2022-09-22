import { elementFactory } from "../../Utilities/utilities.js";

export default class Link {
  constructor(private className: string, private innerText: string, private href: string = "#") {
  }

  private addLink(): HTMLElement {
    return elementFactory<HTMLAnchorElement>(
      "a",
      { class: this.className, href: this.href },
      this.innerText
    );
  }
  
  public get link(): HTMLAnchorElement {
    return this.addLink() as HTMLAnchorElement;
  }
}
