import { elementFactory } from "../../Utilities/utilities";

interface IIcon {
  addIcon(): HTMLElement;
}

export default class Icon implements IIcon {
  constructor(private iconClass: string) {
  }

  public addIcon(): HTMLElement {
    return elementFactory("i", { class: this.iconClass });
  }
  
  public get iconLink(): HTMLElement{
    return this.addIcon();
  }
}
