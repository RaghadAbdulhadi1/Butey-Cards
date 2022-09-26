import { elementFactory } from '../../Utilities/utilities.js';
export default class RadioField {
    radioText;
    checkboxName;
    constructor(radioText, checkboxName) {
        this.radioText = radioText;
        this.checkboxName = checkboxName;
    }
    addRadioChoice() {
        return elementFactory("div", { class: "checkboxes-gender" }, elementFactory("input", {
            type: "checkbox",
            name: this.checkboxName,
            class: "gender",
        }), elementFactory("label", { class: "gender-label" }, this.radioText));
    }
    get radioFeild() {
        return this.addRadioChoice();
    }
}
