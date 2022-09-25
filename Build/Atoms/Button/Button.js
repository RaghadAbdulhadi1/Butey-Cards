"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../../Utilities/utilities");
class Button {
    constructor(value) {
        this.value = value;
    }
    addButton() {
        return (0, utilities_1.elementFactory)("div", { class: "button" }, (0, utilities_1.elementFactory)("button", {
            type: "button",
        }, this.value));
    }
    get button() {
        return this.addButton();
    }
}
exports.default = Button;
//# sourceMappingURL=Button.js.map