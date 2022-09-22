import { elementFactory } from "../../Utilities/utilities.js";

export default class InputFeild {
  constructor(private type: string, private placeholder: string, private className: string , private iconClass: string) {
  }
  private addFormInput(): HTMLElement {
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
  public get formInput(): HTMLDivElement{
    return this.addFormInput() as HTMLDivElement;
  }
}
