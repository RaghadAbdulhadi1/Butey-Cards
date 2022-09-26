import { elementFactory } from "../../Utilities/utilities.js";
export default class Header {
    text;
    className;
    constructor(text, className) {
        this.text = text;
        this.className = className;
    }
    addHeader() {
        return elementFactory("h3", { class: this.className }, this.text);
    }
    get header() {
        return this.addHeader();
    }
}
