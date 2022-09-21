import { elementFactory } from "../../Utilities/utilities.js";

export default class Form {
  constructor(private className:string) {
  }
  private addForm(): HTMLElement {
    return elementFactory<HTMLFormElement>("form", { class: this.className });
  }
  get form(): HTMLFormElement {
    return this.addForm() as HTMLFormElement;
  }
}
