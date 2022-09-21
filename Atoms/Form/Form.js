import { elementFactory } from "../../Utilities/utilities.js";
export default class Form {
    className;
    constructor(className) {
        this.className = className;
    }
    addForm() {
        return elementFactory("form", { class: this.className });
    }
    get form() {
        return this.addForm();
    }
}
