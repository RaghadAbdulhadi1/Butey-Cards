import { elementFactory } from "../../Utilities/utilities.js";
export default class Header {
    text;
    className;
    type;
    constructor(text, className, type = "h3") {
        this.text = text;
        this.className = className;
        this.type = type;
    }
    addHeader() {
        return elementFactory(this.type, { class: this.className }, this.text);
    }
    get header() {
        return this.addHeader();
    }
}
