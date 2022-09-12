class FormInterface {
  constructor(
    container,
    formTitle,
    formLineBreak,
    formInputFeilds,
    formContainer,
    formClickables,
    formSubmitButton,
    formLink,
    switchLink
  ) {
    this.container = container;
    this.formTitle = formTitle;
    this.formLineBreak = formLineBreak;
    this.formInputFeilds = formInputFeilds;
    this.formContainer = formContainer;
    this.formClickables = formClickables;
    this.formSubmitButton = formSubmitButton;
    this.formLink = formLink;
    this.switchLink = switchLink;
    this.addContent();
  }
  addTitle() {
    this.container.appendChild(this.formTitle);
  }
  addLineBreak() {
    this.container.appendChild(this.formLineBreak);
  }
  addInputs() {
    this.formInputFeilds.forEach((inputField) =>
      this.formContainer.appendChild(inputField)
    );
  }
  addLoginButton() {}
  addSwitchToRegisterLink() {}
  addClickables() {}
  addFormContent() {
    this.container.appendChild(this.formContainer);
  }
  addContent() {
    this.addTitle();
    this.addLineBreak();
    this.addInputs();
    this.addFormContent();
  }
}
