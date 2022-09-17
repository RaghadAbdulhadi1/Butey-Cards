import Form from "../Form/Form.js";
import * as constants from "./RegisterConstants.js";
import * as utils from "../../Utilities/utilities.js";
import LocalStorage from "../../Utilities/LocalStorage.js";

export default class RegisterForm extends Form {
  constructor() {
    super(constants.registerParameters);
    this.addRegisterComponents();
    this.onSubmit();
  }
  #addSelectOptions() {
    constants.registerSelectOptions.forEach((inputOption) =>
      constants.registerSelectFeild.appendChild(inputOption)
    );
    constants.registerSelect.appendChild(constants.registerSelectFeild);
    this.formContainer.appendChild(constants.registerSelect);
  }
  #addRadioOptions() {
    constants.registerRadioFeild.forEach((radioOption) => {
      constants.registerCheckbox.appendChild(radioOption);
      this.formContainer.appendChild(constants.registerCheckbox);
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
    this.formLink.appendChild(constants.termsAndConditions);
    this.formClickables.appendChild(this.formLink);
  }
  addClickables() {
    this.formContainer.appendChild(this.formClickables);
  }
  #addPasswordValidation() {
    constants.passwordValidationParagraphs.forEach((passwordValidation) => {
      constants.passwordValidationContainer.appendChild(passwordValidation);
    });
    this.formContainer.appendChild(constants.passwordValidationContainer);
  }
  #addEmailValidatoin() {
    constants.emailValidationParagraphs.forEach((emailValidation) => {
      constants.emailValidationContainer.appendChild(emailValidation);
    });
    this.formContainer.appendChild(constants.emailValidationContainer);
  }
  #addUserNameValidation() {
    constants.userNameValidationContainer.appendChild(
      constants.userNameValidationTitle
    );
    constants.userNameValidationContainer.appendChild(
      constants.userNameValidationContent
    );
    this.formContainer.appendChild(constants.userNameValidationContainer);
  }
  #addConfirmPasswordValidation() {
    constants.confirmPasswordValidationContainer.appendChild(
      constants.confirmPasswordValidationContent
    );
    this.formContainer.appendChild(
      constants.confirmPasswordValidationContainer
    );
  }
  onSubmit() {
    this.email = utils.getElementByClassName(".signup-email");
    this.username = utils.getElementByClassName(".signup-name");
    this.password = utils.getElementByClassName(".signup-password");
    this.confirmPassword = utils.getElementByClassName(".confirm-password");
    constants.registerFormContainer.addEventListener("submit", (e) => {
      this.isValid = utils.getClassesWithSameName(".valid");
      e.preventDefault();
      if (this.isValid.length == 6) {
        const llocalStorage = new LocalStorage();
        const users = JSON.parse(localStorage.getItem("Users")) || {};
        users[this.email.value] = {
          email: this.email.value,
          username: this.username.value,
          password: this.password.value,
        };
        llocalStorage.addToLocalStorage(users);
        utils.clearFormFeilds(
          this.email,
          this.username,
          this.password,
          this.confirmPassword
        );
      }
    });
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
