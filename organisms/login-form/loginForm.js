import Form from "../../organisms/form/form.js";
import * as constants from "../../constants/constants.js";
import * as utils from "../../utilities/utilities.js";

export default class LoginForm extends Form {
  constructor() {
    super(constants.loginParameters);
    this.addLoginComponents();
  }
  addLoginButton() {
    this.formClickables.appendChild(this.formSubmitButton);
  }
  addSwitchToRegisterLink() {
    this.formLink.appendChild(this.switchLink);
    this.formClickables.appendChild(this.formLink);
  }
  addClickables() {
    this.formContainer.appendChild(this.formClickables);
  }
  #addValidationContent() {
    constants.loginValidationContent.forEach((validationParaghraph) =>
    constants.validationContainer.appendChild(validationParaghraph)
    );
    this.formContainer.appendChild(constants.validationContainer);
  }
  #validateLogin(e) {
    e.preventDefault();
    this.email = utils.getElementById("login-email");
    this.password = utils.getElementById("login-password");
    const users = utils.getLocalStorage();
    const user = users.find((u) => u.email === this.email.value);
    if (user) {
      this.password = utils.getElementById("login-password");
      if (user.password === this.password.value) {
        this.success = utils.getElementByClassName(".success-failure");
        this.success.classList.remove("success-failure");
        this.success.classList.add("success-succ");
        this.userFailure.classList.remove("user-succ");
        this.passwordFailure.classList.remove("password-succ");
        clearFormFeilds(this.email, this.password);
      }
      this.passwordFailure = utils.getElementByClassName(".password-failure");
      this.passwordFailure.classList.add("password-succ");
      this.userFailure.classList.remove("user-succ");
    }
    this.passwordFailure = utils.getElementByClassName(".password-failure");
    this.userFailure = utils.getElementByClassName(".user-failure");
    this.userFailure.classList.add("user-succ");
    this.passwordFailure.classList.remove("password-succ");
  }

  addLoginComponents() {
    this.addLoginButton();
    this.addSwitchToRegisterLink();
    this.addClickables();
    this.#addValidationContent();
    this.formSubmitButton.addEventListener("click", this.#validateLogin);
  }
}
