import Form from "../Form/Form";
import * as constants from "./RegisterConstants";
import * as utils from "../../Utilities/utilities";
import LocalStorage from "../../Utilities/LocalStorage";

interface IRegisterForm {
  addSelectOptions(): void;
  addRadioOptions(): void;
  addLoginButton(): void;
  addSwitchToRegisterLink(): void;
  addTermsAndConditionsLink(): void;
  addClickables(): void;
  addPasswordValidation(): void;
  addEmailValidatoin(): void;
  addUserNameValidation(): void;
  addConfirmPasswordValidation(): void;
  onSubmit(): void;
}

export default class RegisterForm extends Form implements IRegisterForm {
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

  public addSelectOptions(): void {
    constants.registerSelectOptions.forEach((inputOption) =>
      constants.registerSelectFeild.appendChild(inputOption)
    );
    constants.registerSelect.appendChild(constants.registerSelectFeild);
    this.formContainer.appendChild(constants.registerSelect);
  }

  public addRadioOptions(): void {
    constants.registerRadioFeild.forEach((radioOption) => {
      constants.registerCheckbox.appendChild(radioOption);
      this.formContainer.appendChild(constants.registerCheckbox);
    });
  }

  public addLoginButton(): void {
    this.formClickables.appendChild(this.formSubmitButton);
  }

  public addSwitchToRegisterLink(): void {
    this.formLink.appendChild(this.switchLink);
    this.formClickables.appendChild(this.formLink);
  }

  public addTermsAndConditionsLink(): void {
    this.formLink.appendChild(constants.termsAndConditions);
    this.formClickables.appendChild(this.formLink);
  }
  
  public addClickables(): void {
    this.formContainer.appendChild(this.formClickables);
  }

  public addPasswordValidation(): void {
    constants.passwordValidationParagraphs.forEach((passwordValidation) => {
      constants.passwordValidationContainer.appendChild(passwordValidation);
    });
    this.formContainer.appendChild(constants.passwordValidationContainer);
  }

  public addEmailValidatoin(): void {
    constants.emailValidationParagraphs.forEach((emailValidation) => {
      constants.emailValidationContainer.appendChild(emailValidation);
    });
    this.formContainer.appendChild(constants.emailValidationContainer);
  }

  public addUserNameValidation(): void {
    constants.userNameValidationContainer.appendChild(
      constants.userNameValidationTitle
    );
    constants.userNameValidationContainer.appendChild(
      constants.userNameValidationContent
    );
    this.formContainer.appendChild(constants.userNameValidationContainer);
  }

  public addConfirmPasswordValidation(): void {
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

  public addRegisterComponents(): void {
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
