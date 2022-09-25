import { elementFactory } from "../../Utilities/utilities";

interface ILink {
  addLink(): HTMLElement
}

export default class Link implements ILink {
  constructor(private className: string, private innerText: string, private href: string = "#") {
  }

  public addLink(): HTMLElement {
    return elementFactory<HTMLAnchorElement>(
      "a",
      { class: this.className, href: this.href },
      this.innerText
    );
  }
  
  public get link(): HTMLElement {
    return this.addLink();
  }
}
