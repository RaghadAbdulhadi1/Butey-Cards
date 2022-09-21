import { elementFactory } from "../../Utilities/utilities.js";
export default class Header {
    text;
    type;
    constructor(text, type = "h3") {
        this.text = text;
        this.type = type;
    }
    addHeader() {
        return elementFactory(this.type, { class: "validationHeader" }, this.text);
    }
    get header() {
        return this.addHeader();
    }
}
