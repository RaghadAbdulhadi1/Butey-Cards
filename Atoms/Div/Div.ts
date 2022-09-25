import { elementFactory } from "../../Utilities/utilities";

interface IContainer {
  addContainer(): HTMLElement
}

export default class Container implements IContainer {
  constructor(private className: string, private containerText: string = "", private id: string = "") {
  }

  public addContainer(): HTMLElement {
    return elementFactory<HTMLDivElement>(
      "div",
      { class: this.className, id: this.id },
      this.containerText
    );
  }
  
  public get container(): HTMLElement {
    return this.addContainer();
  }
}
