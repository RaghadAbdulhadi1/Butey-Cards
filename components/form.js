class Form {
  constructor(fomParameters) {
    this.addFormParameter(fomParameters);
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
  addFormParameter(fomParameters) {
    this.container = fomParameters.container;
    this.formTitle = fomParameters.formTitle;
    this.formLineBreak = fomParameters.formLineBreak;
    this.formInputFeilds = fomParameters.formInputFeilds;
    this.formContainer = fomParameters.formContainer;
    this.formClickables = fomParameters.formClickables;
    this.formSubmitButton = fomParameters.formSubmitButton;
    this.formLink = fomParameters.formLink;
    this.switchLink = fomParameters.switchLink;
  }
  addContent() {
    this.addTitle();
    this.addLineBreak();
    this.addInputs();
    this.addFormContent();
  }
}
