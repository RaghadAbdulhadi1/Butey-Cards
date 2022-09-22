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

  private addSelectOptions(): void {
    constants.registerSelectOptions.forEach((inputOption) =>
      constants.registerSelectFeild.appendChild(inputOption)
    );
    constants.registerSelect.appendChild(constants.registerSelectFeild);
    this.formContainer.appendChild(constants.registerSelect);
  }

  private addRadioOptions(): void {
    constants.registerRadioFeild.forEach((radioOption) => {
      constants.registerCheckbox.appendChild(radioOption);
      this.formContainer.appendChild(constants.registerCheckbox);
    });
  }

  private addLoginButton(): void {
    this.formClickables.appendChild(this.formSubmitButton);
  }

  private addSwitchToRegisterLink(): void {
    this.formLink.appendChild(this.switchLink);
    this.formClickables.appendChild(this.formLink);
  }

  private addTermsAndConditionsLink(): void {
    this.formLink.appendChild(constants.termsAndConditions);
    this.formClickables.appendChild(this.formLink);
  }
  
  addClickables(): void {
    this.formContainer.appendChild(this.formClickables);
  }

  private addPasswordValidation(): void {
    constants.passwordValidationParagraphs.forEach((passwordValidation) => {
      constants.passwordValidationContainer.appendChild(passwordValidation);
    });
    this.formContainer.appendChild(constants.passwordValidationContainer);
  }

  private addEmailValidatoin(): void {
    constants.emailValidationParagraphs.forEach((emailValidation) => {
      constants.emailValidationContainer.appendChild(emailValidation);
    });
    this.formContainer.appendChild(constants.emailValidationContainer);
  }

  private addUserNameValidation(): void {
    constants.userNameValidationContainer.appendChild(
      constants.userNameValidationTitle
    );
    constants.userNameValidationContainer.appendChild(
      constants.userNameValidationContent
    );
    this.formContainer.appendChild(constants.userNameValidationContainer);
  }

  private addConfirmPasswordValidation(): void {
    constants.confirmPasswordValidationContainer.appendChild(
      constants.confirmPasswordValidationContent
    );
    this.formContainer.appendChild(
      constants.confirmPasswordValidationContainer
    );
  }

  public onSubmit(): void {
    this.email = (utils.getElementByClassName(".signup-email") as HTMLInputElement);
    this.username = utils.getElementByClassName(".signup-name") as HTMLInputElement;
    this.password = utils.getElementByClassName(".signup-password") as HTMLInputElement;
    this.confirmPassword = utils.getElementByClassName(".confirm-password") as HTMLInputElement;
    constants.registerFormContainer.addEventListener("submit", (e: Event) => {
      this.isValid = utils.getClassesWithSameName(".valid") as NodeListOf<HTMLElement>;
      e.preventDefault();
      if (this.isValid.length == 6) {
        const llocalStorage = new LocalStorage();
        const data = llocalStorage.getLocalStorage();
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

  private addRegisterComponents(): void {
    this.addSelectOptions();
    this.addRadioOptions();
    this.addLoginButton();
    this.addSwitchToRegisterLink();
    this.addTermsAndConditionsLink();
    this.addClickables();
    this.addPasswordValidation();
    this.addEmailValidatoin();
    this.addUserNameValidation();
    this.addConfirmPasswordValidation();
  }
}
