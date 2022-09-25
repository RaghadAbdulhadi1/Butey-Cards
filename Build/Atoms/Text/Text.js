"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../../Utilities/utilities");
class Title {
    constructor(className, containerText) {
        this.className = className;
        this.containerText = containerText;
    }
    addText() {
        return (0, utilities_1.elementFactory)("div", { class: this.className }, this.containerText);
    }
    get text() {
        return this.addText();
    }
}
exports.default = Title;
//# sourceMappingURL=Text.js.map