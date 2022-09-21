import { elementFactory } from "../../Utilities/utilities.js";

export default class Icon {
  constructor(private iconClass: string) {
  }
  private addIcon() {
    return elementFactory<HTMLLinkElement>("i", { class: this.iconClass });
  }
  get Icon(): HTMLLinkElement{
    return this.addIcon() as HTMLLinkElement;
  }
}
