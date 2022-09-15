import Form from "../../organisms/form/form.js";
import * as constants from "../../constants/constants.js";
import * as utils from "../../utilities/utilities.js";

export default class RegisterForm extends Form {
    constructor() {
        super(constants.registerParameters);
        this.addRegisterComponents();
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
        constants.userNameValidationContainer.appendChild(constants.userNameValidationTitle);
        constants.userNameValidationContainer.appendChild(constants.userNameValidationContent);
        this.formContainer.appendChild(constants.userNameValidationContainer);
      }
      #addConfirmPasswordValidation() {
        constants.confirmPasswordValidationContainer.appendChild(
            constants.confirmPasswordValidationContent
        );
        this.formContainer.appendChild(constants.confirmPasswordValidationContainer);
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
