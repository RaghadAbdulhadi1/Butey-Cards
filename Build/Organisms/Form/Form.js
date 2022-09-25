"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FormHeader_1 = __importDefault(require("../../Molecules/form-header/FormHeader"));
const FormBody_1 = __importDefault(require("../../Molecules/form-body/FormBody"));
const FormFooter_1 = __importDefault(require("../../Molecules/form-footer/FormFooter"));
class Form {
    constructor(form) {
        this.addFormParameters(form);
        this.renderForm();
    }
    addFormParameters(form) {
        this.container = form.container;
        this.formTitle = form.formTitle;
        this.formLineBreak = form.formLineBreak;
        this.formInputFeilds = form.formInputFeilds;
        this.formContainer = form.formContainer;
        this.formClickables = form.formClickables;
        this.formSubmitButton = form.formSubmitButton;
        this.formLink = form.formLink;
        this.switchLink = form.switchLink;
    }
    renderForm() {
        this.header = new FormHeader_1.default(this.container, this.formTitle, this.formLineBreak);
        this.body = new FormBody_1.default(this.container, this.formContainer, this.formInputFeilds);
        this.footer = new FormFooter_1.default(this.container, this.formClickables, this.formSubmitButton, this.formLink, this.switchLink);
    }
}
exports.default = Form;
//# sourceMappingURL=Form.js.map