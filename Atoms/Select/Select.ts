import { elementFactory } from "../../Utilities/utilities.js";

export default class SelectFeild {
  private addSelectFeild(): HTMLElement {
    return elementFactory<HTMLSelectElement>("select", { class: "countries", name: "countries" });
  }
  public get select(): HTMLSelectElement {
    return this.addSelectFeild() as HTMLSelectElement;
  }
}
