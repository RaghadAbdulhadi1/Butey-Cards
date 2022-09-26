import { elementFactory } from "../../Utilities/utilities";

interface IInputFeild {
  addFormInput(): HTMLInputElement
}

export default class InputFeild implements IInputFeild {
  constructor(private type: string, private placeholder: string, private className: string) {
  }

  public addFormInput(): HTMLInputElement {
      return elementFactory("input", {
        type: this.type,
        placeholder: this.placeholder,
        class: this.className,
      })
    }
  
  public get formInput(): HTMLInputElement{
    return this.addFormInput();
  }
}
