import { elementFactory } from "../../Utilities/utilities.js";

export default class Container {
  constructor(private className: string, private containerText: string = "", private id: string = "") {
  }

  private addContainer(): HTMLElement {
    return elementFactory<HTMLDivElement>(
      "div",
      { class: this.className, id: this.id },
      this.containerText
    );
  }
  
  public get container(): HTMLDivElement {
    return this.addContainer() as HTMLDivElement;
  }
}
