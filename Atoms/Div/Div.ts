import { elementFactory } from "../../Utilities/utilities";

interface IContainer {
  addContainer(): HTMLDivElement
}

export default class Container implements IContainer {
  constructor(private className: string, private containerText: string = "", private id: string = "") {
  }

  public addContainer(): HTMLDivElement {
    return elementFactory(
      "div",
      { class: this.className, id: this.id },
      this.containerText
    );
  }
  
  public get container(): HTMLDivElement {
    return this.addContainer();
  }
}
