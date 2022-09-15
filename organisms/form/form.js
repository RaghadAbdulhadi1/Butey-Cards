import FormHeader from "../../molecules/form-header/formHeader.js";
import FormBody from "../../molecules/form-body/formBody.js";
import FormFooter from "../../molecules/form-footer/formFooter.js";

export default class Form {
  constructor(form) {
    this.addFormParameters(form);
    this.renderForm();
  }
  renderForm() {
    this.header = new FormHeader(
      this.container,
      this.formTitle,
      this.formLineBreak
    );
    this.body = new FormBody(
      this.container,
      this.formContainer,
      this.formInputFeilds
    );
    this.footer = new FormFooter(
      this.container,
      this.formClickables,
      this.formSubmitButton,
      this.formLink,
      this.switchLink
    );
  }
  addFormParameters(form){
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
}
