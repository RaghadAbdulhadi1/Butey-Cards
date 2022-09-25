import Form from "../Form/Form";
import * as constants from "../LoginForm/LoginConstants";
import * as utils from "../../Utilities/utilities";

interface ILoginForm {
  addLoginButton(): void;
  addSwitchToRegisterLink(): void ;
  addClickables(): void;
  addValidationContent(): void;
  validateLogin(e: Event): void;
  addLoginComponents(): void;
}

export default class LoginForm extends Form implements ILoginForm{
  email!: HTMLInputElement;

  password!: HTMLInputElement;

  success!: HTMLParagraphElement;

  userFailure!: HTMLParagraphElement;

  passwordFailure!: HTMLParagraphElement;
  
  constructor() {
    super(constants.loginParameters);
    this.addLoginComponents();
  }

  public addLoginButton(): void {
    this.formClickables.appendChild(this.formSubmitButton);
  }

  public addSwitchToRegisterLink(): void {
    this.formLink.appendChild(this.switchLink);
    this.formClickables.appendChild(this.formLink);
  }

  public addClickables(): void {
    this.formContainer.appendChild(this.formClickables);
  }

  public addValidationContent(): void {
    constants.loginValidationContent.forEach((validationParaghraph) =>
      constants.validationContainer.appendChild(validationParaghraph)
    );
    this.formContainer.appendChild(constants.validationContainer);
  }

  public validateLogin(e: Event): void {
    e.preventDefault();
    this.email = utils.getElementByClassName(".login-email") as HTMLInputElement;
    this.password = utils.getElementByClassName(".login-password") as HTMLInputElement;
    const users = localStorage.getItem("Users") as string | null;
    const data = users ? JSON.parse(users) : {};
    if (data[this.email.value]) {
      this.password = utils.getElementById("login-password") as HTMLInputElement;
      if (data[this.email.value].password === this.password.value) {
        this.success = utils.getElementByClassName(".success-failure") as HTMLParagraphElement;
        this.success.classList.remove("success-failure");
        this.success.classList.add("success-succ");
        this.userFailure.classList.remove("user-succ");
        this.passwordFailure.classList.remove("password-succ");
        utils.clearFormFeilds(this.email, this.password);
      } else {
        this.userFailure = utils.getElementByClassName(".user-failure") as HTMLParagraphElement;
        this.passwordFailure = utils.getElementByClassName(".password-failure") as HTMLParagraphElement;
        this.passwordFailure.classList.add("password-succ");
        this.userFailure.classList.remove("user-succ");
      }
    } else {
      this.passwordFailure = utils.getElementByClassName(".password-failure") as HTMLParagraphElement;
      this.userFailure = utils.getElementByClassName(".user-failure") as HTMLParagraphElement;
      this.userFailure.classList.add("user-succ");
      this.passwordFailure.classList.remove("password-succ");
    }
  }
  
  public addLoginComponents(): void {
    this.addLoginButton();
    this.addSwitchToRegisterLink();
    this.addClickables();
    this.addValidationContent();
    this.formSubmitButton.addEventListener("click", this.validateLogin);
  }
}
