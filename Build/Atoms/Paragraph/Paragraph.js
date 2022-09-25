"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../../Utilities/utilities");
class Paragraph {
    constructor(paragraphText, id, className) {
        this.paragraphText = paragraphText;
        this.id = id;
        this.className = className;
    }
    addParagraph() {
        return (0, utilities_1.elementFactory)("p", { id: this.id, class: this.className }, this.paragraphText);
    }
    get paragraph() {
        return this.addParagraph();
    }
}
exports.default = Paragraph;
//# sourceMappingURL=Paragraph.js.map