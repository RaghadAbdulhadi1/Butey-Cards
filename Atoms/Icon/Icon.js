import { elementFactory } from "../../Utilities/utilities.js";
export default class Icon {
    iconClass;
    constructor(iconClass) {
        this.iconClass = iconClass;
    }
    addIcon() {
        return elementFactory("i", { class: this.iconClass });
    }
    get Icon() {
        return this.addIcon();
    }
}
