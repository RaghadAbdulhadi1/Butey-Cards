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
  if (user) {
    this.password = getElementById("login-password")
    if (user.password === this.password.value) {
      this.success = getElementByClassName(".success-failure");
      this.success.classList.remove("success-failure");
      this.success.classList.add("success-succ");
      this.userFailure.classList.remove("user-succ");
      this.passwordFailure.classList.remove("password-succ");
      clearFormFeilds(this.email, this.password);
    } else {
      this.passwordFailure = getElementByClassName(".password-failure");
      this.passwordFailure.classList.add("password-succ");
      this.userFailure.classList.remove("user-succ");
    }
  }
  else {
    this.passwordFailure = getElementByClassName(".password-failure");
    this.userFailure = getElementByClassName(".user-failure");
    this.userFailure.classList.add("user-succ");
    this.passwordFailure.classList.remove("password-succ")
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