class RegisterFormComponent extends Form {
  constructor() {
    super(registerParameters);
    this.addRegisterComponents();
    
  }
  #addSelectOptions() {
    registerSelectOptions.forEach((inputOption) =>
      registerSelectFeild.appendChild(inputOption)
    );
    registerSelect.appendChild(registerSelectFeild);
    this.formContainer.appendChild(registerSelect);
  }
  #addRadioOptions() {
    registerRadioFeild.forEach((radioOption) => {
      registerCheckbox.appendChild(radioOption);
      this.formContainer.appendChild(registerCheckbox);
    });
  }
  addLoginButton() {
    this.formClickables.appendChild(this.formSubmitButton);
  }
  addSwitchToRegisterLink() {
    this.formLink.appendChild(this.switchLink);
    this.formClickables.appendChild(this.formLink);
  }
  #addTermsAndConditionsLink() {
    this.formLink.appendChild(termsAndConditions);
    this.formClickables.appendChild(this.formLink);
  }
  addClickables() {
    this.formContainer.appendChild(this.formClickables);
  }
  #addPasswordValidation() {
    passwordValidationParagraphs.forEach((passwordValidation) => {
      passwordValidationContainer.appendChild(passwordValidation);
    });
    this.formContainer.appendChild(passwordValidationContainer);
  }
  #addEmailValidatoin() {
    emailValidationParagraphs.forEach((emailValidation) => {
      emailValidationContainer.appendChild(emailValidation);
    });
    this.formContainer.appendChild(emailValidationContainer);
  }
  #addUserNameValidation() {
    userNameValidationContainer.appendChild(userNameValidationTitle);
    userNameValidationContainer.appendChild(userNameValidationContent);
    this.formContainer.appendChild(userNameValidationContainer);
  }
  #addConfirmPasswordValidation() {
    confirmPasswordValidationContainer.appendChild(
      confirmPasswordValidationContent
    );
    this.formContainer.appendChild(confirmPasswordValidationContainer);
  }
  addRegisterComponents() {
    this.#addSelectOptions();
    this.#addRadioOptions();
    this.addLoginButton();
    this.addSwitchToRegisterLink();
    this.#addTermsAndConditionsLink();
    this.addClickables();
    this.#addPasswordValidation();
    this.#addEmailValidatoin();
    this.#addUserNameValidation();
    this.#addConfirmPasswordValidation();
  }
}
