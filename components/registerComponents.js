class RegisterFormComponent {
  constructor() {
    this.addRegisterComponents();

  }
  #addTitle() {
    registerContainer.appendChild(registerFormTitle);
  }
  #addLineBreak() {
    registerContainer.appendChild(registerLineBreak);
  }
  #addInputs() {
    registerInputFeilds.forEach((inputField) =>
      registerFormContainer.appendChild(inputField)
    );
  }
  #addSelectOptions() {
    registerSelectOptions.forEach((inputOption) =>
      registerSelectFeild.appendChild(inputOption)
    );
    registerSelect.appendChild(registerSelectFeild);
    registerFormContainer.appendChild(registerSelect);
  }
  #addRadioOptions() {
    registerRadioFeild.forEach((radioOption) => {
      registerCheckbox.appendChild(radioOption);
      registerFormContainer.appendChild(registerCheckbox);
    });
  }
  #addRegisterButton() {
    registerClickables.appendChild(registerSubmitButton);
  }
  #addTermsAndConditionsLink() {
    registerLink.appendChild(termsAndConditions);
    registerClickables.appendChild(registerLink);
  }
  #addSwitchToRegisterLink() {
    registerLink.appendChild(switchToLoginFormLink);
    registerClickables.appendChild(registerLink);
  }
  #addClickables() {
    registerFormContainer.appendChild(registerClickables);
  }
  #addFormContent() {
    registerContainer.appendChild(registerFormContainer);
  }
  #addPasswordValidation() {
    passwordValidationParagraphs.forEach((passwordValidation) => {
      passwordValidationContainer.appendChild(passwordValidation);
    });
    registerFormContainer.appendChild(passwordValidationContainer);
  }
  #addEmailValidatoin() {
    emailValidationParagraphs.forEach((emailValidation) => {
      emailValidationContainer.appendChild(emailValidation);
    });
    registerFormContainer.appendChild(emailValidationContainer);
  }
  #addUserNameValidation() {
    userNameValidationContainer.appendChild(userNameValidationTitle);
    userNameValidationContainer.appendChild(userNameValidationContent);
    registerFormContainer.appendChild(userNameValidationContainer);
  }
  #addConfirmPasswordValidation() {
    confirmPasswordValidationContainer.appendChild(
      confirmPasswordValidationContent
    );
    registerFormContainer.appendChild(confirmPasswordValidationContainer);
  }
  addRegisterComponents() {
    this.#addTitle();
    this.#addLineBreak();
    this.#addInputs();
    this.#addSelectOptions();
    this.#addRadioOptions();
    this.#addRegisterButton();
    this.#addSwitchToRegisterLink();
    this.#addTermsAndConditionsLink();
    this.#addClickables();
    this.#addPasswordValidation();
    this.#addEmailValidatoin();
    this.#addUserNameValidation();
    this.#addConfirmPasswordValidation();
    this.#addFormContent();
    const checkboxes = document.querySelectorAll(".gender");
    console.log(checkboxes)
    document.body.addEventListener("click", (e) => {
      for (const c of checkboxes) {
        c.checked = false;
      }
      const clickedCheckbox = [...checkboxes].find((c) => c === e.target);
      clickedCheckbox.checked = true;
    });
  }
}
