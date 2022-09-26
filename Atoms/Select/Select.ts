import { elementFactory } from "../../Utilities/utilities";

interface ISelectFeild {
  addSelectFeild(): HTMLSelectElement
}

export default class SelectFeild implements ISelectFeild {
  public addSelectFeild(): HTMLSelectElement {
    return elementFactory("select", { class: "countries", name: "countries" });
  }
  
  public get select(): HTMLElement {
    return this.addSelectFeild();
  }
}
