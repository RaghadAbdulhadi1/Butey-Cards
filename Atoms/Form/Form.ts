import { elementFactory } from "../../Utilities/utilities";

interface IForm {
  addForm(): HTMLFormElement
}

export default class Form implements IForm {
  constructor(private className:string) {
  }

  public addForm(): HTMLFormElement {
    return elementFactory("form", { class: this.className });
  }
  
  public get form(): HTMLFormElement {
    return this.addForm();
  }
}
