import Form from "../Form/Form.js";
import * as constants from "./RegisterConstants.js";
import * as utils from "../../Utilities/utilities.js";
import LocalStorage from "../../Utilities/LocalStorage.js";
export default class RegisterForm extends Form {
  email!: HTMLInputElement;
  username!: HTMLInputElement;
  password!: HTMLInputElement;
  confirmPassword!: HTMLInputElement;
  isValid!: NodeListOf<HTMLElement> | null;
  constructor() {
    super(constants.registerParameters);
    this.addRegisterComponents();
    this.onSubmit();
  }
  #addSelectOptions(): void {
    constants.registerSelectOptions.forEach((inputOption) =>
      constants.registerSelectFeild.appendChild(inputOption)
    );
    constants.registerSelect.appendChild(constants.registerSelectFeild);
    this.formContainer.appendChild(constants.registerSelect);
  }
  #addRadioOptions(): void {
    constants.registerRadioFeild.forEach((radioOption) => {
      constants.registerCheckbox.appendChild(radioOption);
      this.formContainer.appendChild(constants.registerCheckbox);
    });
  }
  addLoginButton(): void {
    this.formClickables.appendChild(this.formSubmitButton);
  }
  addSwitchToRegisterLink(): void {
    this.formLink.appendChild(this.switchLink);
    this.formClickables.appendChild(this.formLink);
  }
  #addTermsAndConditionsLink(): void {
    this.formLink.appendChild(constants.termsAndConditions);
    this.formClickables.appendChild(this.formLink);
  }
  addClickables(): void {
    this.formContainer.appendChild(this.formClickables);
  }
  #addPasswordValidation(): void {
    constants.passwordValidationParagraphs.forEach((passwordValidation) => {
      constants.passwordValidationContainer.appendChild(passwordValidation);
    });
    this.formContainer.appendChild(constants.passwordValidationContainer);
  }
  #addEmailValidatoin(): void {
    constants.emailValidationParagraphs.forEach((emailValidation) => {
      constants.emailValidationContainer.appendChild(emailValidation);
    });
    this.formContainer.appendChild(constants.emailValidationContainer);
  }
  #addUserNameValidation(): void {
    constants.userNameValidationContainer.appendChild(
      constants.userNameValidationTitle
    );
    constants.userNameValidationContainer.appendChild(
      constants.userNameValidationContent
    );
    this.formContainer.appendChild(constants.userNameValidationContainer);
  }
  #addConfirmPasswordValidation(): void {
    constants.confirmPasswordValidationContainer.appendChild(
      constants.confirmPasswordValidationContent
    );
    this.formContainer.appendChild(
      constants.confirmPasswordValidationContainer
    );
  }
  onSubmit(): void {
    this.email = utils.getElementByClassName(".signup-email") as HTMLInputElement;
    this.username = utils.getElementByClassName(".signup-name") as HTMLInputElement;
    this.password = utils.getElementByClassName(".signup-password") as HTMLInputElement;
    this.confirmPassword = utils.getElementByClassName(".confirm-password") as HTMLInputElement;
    constants.registerFormContainer.addEventListener("submit", (e: Event) => {
      this.isValid = utils.getClassesWithSameName(".valid") as NodeListOf<HTMLElement>;
      e.preventDefault();
      if (this.isValid.length == 6) {
        const llocalStorage = new LocalStorage();
        const users = localStorage.getItem("Users") as string | null;
        const data = users ? JSON.parse(users) : {};
        data[this.email.value] = {
          email: this.email.value,
          username: this.username.value,
          password: this.password.value,
        };
        llocalStorage.addToLocalStorage(data);
        utils.clearFormFeilds(
          this.email,
          this.username,
          this.password,
          this.confirmPassword
        );
      }
    });
  }
  addRegisterComponents(): void {
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
