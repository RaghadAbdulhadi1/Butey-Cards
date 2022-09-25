"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FormHeader {
    constructor(container, formTitle, formLineBreak) {
        this.container = container;
        this.formTitle = formTitle;
        this.formLineBreak = formLineBreak;
        this.addHeaderComponents();
    }
    addTitle() {
        this.container.appendChild(this.formTitle);
    }
    addLineBreak() {
        this.container.appendChild(this.formLineBreak);
    }
    addHeaderComponents() {
        this.addTitle();
        this.addLineBreak();
    }
}
exports.default = FormHeader;
//# sourceMappingURL=FormHeader.js.map