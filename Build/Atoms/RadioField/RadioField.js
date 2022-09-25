"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../../Utilities/utilities");
class RadioField {
    constructor(radioText, checkboxName) {
        this.radioText = radioText;
        this.checkboxName = checkboxName;
    }
    addRadioChoice() {
        return (0, utilities_1.elementFactory)("div", { class: "checkboxes-gender" }, (0, utilities_1.elementFactory)("input", {
            type: "checkbox",
            name: this.checkboxName,
            class: "gender",
        }), (0, utilities_1.elementFactory)("label", { class: "gender-label" }, this.radioText));
    }
    get radioFeild() {
        return this.addRadioChoice();
    }
}
exports.default = RadioField;
//# sourceMappingURL=RadioField.js.map