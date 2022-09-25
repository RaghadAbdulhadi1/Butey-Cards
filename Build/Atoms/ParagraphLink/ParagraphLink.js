"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../../Utilities/utilities");
class ParagraphLink {
    constructor(paragraphText, innerText, className = "", href = "#") {
        this.paragraphText = paragraphText;
        this.innerText = innerText;
        this.className = className;
        this.href = href;
    }
    addParagraphLink() {
        return (0, utilities_1.elementFactory)("p", { class: this.paragraphText }, this.paragraphText, (0, utilities_1.elementFactory)("a", { class: this.className, href: this.href }, this.innerText));
    }
    get paragraphLink() {
        return this.addParagraphLink();
    }
}
exports.default = ParagraphLink;
//# sourceMappingURL=ParagraphLink.js.map