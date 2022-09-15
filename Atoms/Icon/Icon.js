import { elementFactory } from "../../utilities/utilities.js";

export default class Icon {
  constructor(iconClass) {
    this.iconClass = iconClass;
  }
  addIcon() {
    return elementFactory("i", { class: this.iconClass });
  }
  get Icon(){
    return this.addIcon();
  }
}
