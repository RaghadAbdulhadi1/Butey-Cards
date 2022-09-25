"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../../Utilities/utilities");
class InputFeild {
    constructor(type, placeholder, className, iconClass) {
        this.type = type;
        this.placeholder = placeholder;
        this.className = className;
        this.iconClass = iconClass;
    }
    addFormInput() {
        return (0, utilities_1.elementFactory)("div", { class: "input-feild" }, (0, utilities_1.elementFactory)("input", {
            type: this.type,
            placeholder: this.placeholder,
            class: this.className,
        }), (0, utilities_1.elementFactory)("i", { class: this.iconClass }));
    }
    get formInput() {
        return this.addFormInput();
    }
}
exports.default = InputFeild;
//# sourceMappingURL=InputField.js.map