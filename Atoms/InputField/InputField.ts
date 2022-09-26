import { elementFactory } from "../../Utilities/utilities";

interface IInputFeild {
  addFormInputFeild(): HTMLDivElement
}

export default class InputFeild implements IInputFeild {
  constructor(private type: string, private placeholder: string, private className: string, private iconClass: string) {
  }

  public addFormInputFeild(): HTMLDivElement {
    return elementFactory(
      "div",
      { class: "input-feild" },
      elementFactory("input", {
        type: this.type,
        placeholder: this.placeholder,
        class: this.className,
      }),
      elementFactory("i", { class: this.iconClass })
    );
  }
  
  public get formInput(): HTMLDivElement{
    return this.addFormInputFeild();
  }
}
