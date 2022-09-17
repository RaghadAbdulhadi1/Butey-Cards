import Form from "../Form/Form.js";
import * as constants from "../LoginForm/LoginConstants.js";
import * as utils from "../../Utilities/utilities.js";

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
    this.email = utils.getElementByClassName(".login-email");
    this.password = utils.getElementByClassName(".login-password");
    const users = JSON.parse(localStorage.getItem("Users")) || {};
    if (users[this.email.value]) {
      this.password = utils.getElementById("login-password");
      if (users[this.email.value].password === this.password.value) {
        this.success = utils.getElementByClassName(".success-failure");
        this.success.classList.remove("success-failure");
        this.success.classList.add("success-succ");
        this.userFailure.classList.remove("user-succ");
        this.passwordFailure.classList.remove("password-succ");
        utils.clearFormFeilds(this.email, this.password);
      } else {
        this.userFailure = utils.getElementByClassName(".user-failure");
        this.passwordFailure = utils.getElementByClassName(".password-failure");
        this.passwordFailure.classList.add("password-succ");
        this.userFailure.classList.remove("user-succ");
      }
    } else {
      this.passwordFailure = utils.getElementByClassName(".password-failure");
      this.userFailure = utils.getElementByClassName(".user-failure");
      this.userFailure.classList.add("user-succ");
      this.passwordFailure.classList.remove("password-succ");
    }
  }
  addLoginComponents() {
    this.addLoginButton();
    this.addSwitchToRegisterLink();
    this.addClickables();
    this.#addValidationContent();
    this.formSubmitButton.addEventListener("click", this.#validateLogin);
  }
}
