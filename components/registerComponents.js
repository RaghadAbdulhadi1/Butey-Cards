class RegisterFormComponent extends FormInterface {
  constructor() {
    super(
      registerContainer,
      registerFormTitle,
      registerLineBreak,
      registerInputFeilds,
      registerFormContainer,
      registerClickables,
      registerSubmitButton,
      registerLink,
      switchToLoginFormLink
      );
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
  #addTermsAndConditionsLink() {
    this.formLink.appendChild(termsAndConditions);
    this.formClickables.appendChild(this.formLink);
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
    this.#addTermsAndConditionsLink();
    this.#addPasswordValidation();
    this.#addEmailValidatoin();
    this.#addUserNameValidation();
    this.#addConfirmPasswordValidation();
  }
}
