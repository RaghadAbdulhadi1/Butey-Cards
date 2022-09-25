"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../../Utilities/utilities");
class Form {
    constructor(className) {
        this.className = className;
    }
    addForm() {
        return (0, utilities_1.elementFactory)("form", { class: this.className });
    }
    get form() {
        return this.addForm();
    }
}
exports.default = Form;
//# sourceMappingURL=Form.js.map