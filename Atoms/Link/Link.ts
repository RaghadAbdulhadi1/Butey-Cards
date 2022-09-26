import { elementFactory } from "../../Utilities/utilities";

interface ILink {
  addLink(): HTMLAnchorElement
}

export default class Link implements ILink {
  constructor(private className: string, private innerText: string, private href: string = "#") {
  }

  public addLink(): HTMLAnchorElement {
    return elementFactory(
      "a",
      { class: this.className, href: this.href },
      this.innerText
    );
  }
  
  public get link(): HTMLAnchorElement {
    return this.addLink();
  }
}
