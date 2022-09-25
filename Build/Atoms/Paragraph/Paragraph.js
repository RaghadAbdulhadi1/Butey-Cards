import { elementFactory } from "../../Utilities/utilities.js";
export default class Paragraph {
    paragraphText;
    id;
    className;
    constructor(paragraphText, id, className) {
        this.paragraphText = paragraphText;
        this.id = id;
        this.className = className;
    }
    addParagraph() {
        return elementFactory("p", { id: this.id, class: this.className }, this.paragraphText);
    }
    get paragraph() {
        return this.addParagraph();
    }
}
