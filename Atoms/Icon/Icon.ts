import { elementFactory } from "../../Utilities/utilities.js";

export default class Icon {
  constructor(private iconClass: string) {
  }
  private addIcon(): HTMLElement {
    return elementFactory<HTMLLinkElement>("i", { class: this.iconClass });
  }
  public get Icon(): HTMLLinkElement{
    return this.addIcon() as HTMLLinkElement;
  }
}
