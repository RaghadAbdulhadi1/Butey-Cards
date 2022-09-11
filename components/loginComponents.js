class LoginFormComponent {
    constructor() {
    this.addLoginComponents();
  }
  #addTitle() {
    logInContainer.appendChild(loginFormTitle)
  }
  #addLineBreak() {
    logInContainer.appendChild(loginLineBreak)
  }
  #addInputs() {
    loginInputFeilds.forEach((inputField) =>
    loginFormContainer.appendChild(inputField)
    );
  }
  #addLoginButton() {
    loginClickables.appendChild(loginSubmitButton)
  }
  #addSwitchToRegisterLink() {
    loginLink.appendChild(switchToRegisterFormLink)
    loginClickables.appendChild(loginLink)
  }
  #addClickables() {
    loginFormContainer.appendChild(loginClickables)
  }
  #addValidationContent() {
    loginValidationContent.forEach((validationParaghraph) =>
    validationContainer.appendChild(validationParaghraph)
    );
    loginFormContainer.appendChild(validationContainer);
  }
  #addFormContent() {
    logInContainer.appendChild(loginFormContainer);
  }
  #validateLogin(e) {
    e.preventDefault();
    this.email =  getElementById("login-email")
    this.password = getElementById("login-password")
    const users = getLocalStorage();
    const user = users.find((u) => u.email === this.email.value);
    clearFormFeilds(this.email, this.password);
    if (user) {
      if (user.password === this.password.value) {
        removeClass(".success-failure", "success-failure");
        addClass(".success-failure", "success-succ");
        removeClass(".user-failure", "user-succ");
        removeClass(".password-failure", "password-succ");
      } else {
        addClass(".password-failure", "password-succ");
        removeClass(".user-failure", "user-succ");
      }
    }
    else {
      addClass(".user-failure", "user-succ");
      removeClass(".password-failure", "password-succ");
    }
  }
  addLoginComponents() {
    this.#addTitle();
    this.#addLineBreak();
    this.#addInputs();
    this.#addLoginButton();
    this.#addSwitchToRegisterLink();
    this.#addClickables();
    this.#addValidationContent();
    this.#addFormContent();
    loginSubmitButton.addEventListener("click", this.#validateLogin);
  }
}