import { elementFactory } from "../../Utilities/utilities.js";
export default class OptionField {
    optionText;
    constructor(optionText) {
        this.optionText = optionText;
    }
    addOptions() {
        return elementFactory("option", { value: this.optionText.toLowerCase() }, this.optionText);
    }
    get option() {
        return this.addOptions();
    }
}
