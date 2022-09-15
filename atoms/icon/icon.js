import { elementFactory } from '../../utilities/utilities.js';

export default class Icon {
    constructor(iconClass) {
        this.iconClass = iconClass;
        return this.addIcon();
    }
    addIcon() {
        return elementFactory("i", { class: this.iconClass })
    }
}
