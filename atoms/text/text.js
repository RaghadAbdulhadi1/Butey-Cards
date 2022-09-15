import { elementFactory } from '../../utilities/utilities.js';

export default class Title {
    constructor(className, containerText) {
        this.className = className;
        this.containerText = containerText;
        return this.addText();
    }
    addText() {
        return elementFactory("div", { class: this.className }, this.containerText);
    }
}
