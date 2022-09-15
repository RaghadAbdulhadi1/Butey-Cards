import { elementFactory } from '../../utilities/utilities.js';

export default class HeaderThree {
    constructor(text) {
        this.text = text;
        return this.addHeaderThree();
    }
    addHeaderThree() {
        return elementFactory("h3", { class: "validationHeader" }, this.text);
    }
}
