import { elementFactory } from "../../Utilities/utilities.js";
export default class InputFeild {
    type;
    placeholder;
    className;
    constructor(type, placeholder, className) {
        this.type = type;
        this.placeholder = placeholder;
        this.className = className;
    }
    addFormInput() {
        return elementFactory("input", {
            type: this.type,
            placeholder: this.placeholder,
            class: this.className,
        });
    }
    get formInput() {
        return this.addFormInput();
    }
}
