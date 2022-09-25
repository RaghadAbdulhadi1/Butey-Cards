import { elementFactory } from "../../Utilities/utilities";

interface IInputFeild {
  addFormInput(): HTMLElement
}

export default class InputFeild implements IInputFeild {
  constructor(private type: string, private placeholder: string, private className: string, private iconClass: string) {
  }

  public addFormInput(): HTMLElement {
    return elementFactory<HTMLDivElement>(
      "div",
      { class: "input-feild" },
      elementFactory<HTMLInputElement>("input", {
        type: this.type,
        placeholder: this.placeholder,
        class: this.className,
      }),
      elementFactory<HTMLLinkElement>("i", { class: this.iconClass })
    );
  }
  
  public get formInput(): HTMLElement{
    return this.addFormInput();
  }
}
