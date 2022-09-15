import FormHeader from "../../molecules/form-header/formHeader.js";
import FormBody from "../../molecules/form-body/formBody.js";
import FormFooter from "../../molecules/form-footer/formFooter.js";

export default class Form {
  constructor({
    container,
    formTitle,
    formLineBreak,
    formInputFeilds,
    formContainer,
    formClickables,
    formSubmitButton,
    formLink,
    switchLink,
  }) {
    this.container = container;
    this.formTitle = formTitle;
    this.formLineBreak = formLineBreak;
    this.formInputFeilds = formInputFeilds;
    this.formContainer = formContainer;
    this.formClickables = formClickables;
    this.formSubmitButton = formSubmitButton;
    this.formLink = formLink;
    this.switchLink = switchLink;

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
}
