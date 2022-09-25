import { elementFactory } from "../../Utilities/utilities";

interface IForm {
  addForm(): HTMLElement
}

export default class Form implements IForm {
  constructor(private className:string) {
  }

  public addForm(): HTMLElement {
    return elementFactory<HTMLFormElement>("form", { class: this.className });
  }
  
  public get form(): HTMLElement {
    return this.addForm();
  }
}
