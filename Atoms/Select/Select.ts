import { elementFactory } from "../../Utilities/utilities";

interface ISelectFeild {
  addSelectFeild(): HTMLElement
}

export default class SelectFeild implements ISelectFeild {
  public addSelectFeild(): HTMLElement {
    return elementFactory<HTMLSelectElement>("select", { class: "countries", name: "countries" });
  }
  
  public get select(): HTMLElement {
    return this.addSelectFeild();
  }
}
