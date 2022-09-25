"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../../Utilities/utilities");
class OptionField {
    constructor(optionText) {
        this.optionText = optionText;
    }
    addOptions() {
        return (0, utilities_1.elementFactory)("option", { value: this.optionText.toLowerCase() }, this.optionText);
    }
    get option() {
        return this.addOptions();
    }
}
exports.default = OptionField;
//# sourceMappingURL=OptionField.js.map