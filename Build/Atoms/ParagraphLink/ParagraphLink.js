import { elementFactory } from "../../Utilities/utilities.js";
export default class ParagraphLink {
    paragraphText;
    innerText;
    className;
    href;
    constructor(paragraphText, innerText, className = "", href = "#") {
        this.paragraphText = paragraphText;
        this.innerText = innerText;
        this.className = className;
        this.href = href;
    }
    addParagraphLink() {
        return elementFactory("p", { class: this.paragraphText }, this.paragraphText, elementFactory("a", { class: this.className, href: this.href }, this.innerText));
    }
    get paragraphLink() {
        return this.addParagraphLink();
    }
}
