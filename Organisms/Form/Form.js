import FormHeader from "../../Molecules/form-header/FormHeader.js";
import FormBody from "../../Molecules/form-body/FormBody.js";
import FormFooter from "../../Molecules/form-footer/FormFooter.js";
export default class Form {
    static header;
    static body;
    static footer;
    formInputFeilds;
    container;
    formTitle;
    formLineBreak;
    formContainer;
    formClickables;
    formSubmitButton;
    formLink;
    switchLink;
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
        Form.header = new FormHeader(this.container, this.formTitle, this.formLineBreak);
        Form.body = new FormBody(this.container, this.formContainer, this.formInputFeilds);
        Form.footer = new FormFooter(this.container, this.formClickables, this.formSubmitButton, this.formLink, this.switchLink);
    }
}
