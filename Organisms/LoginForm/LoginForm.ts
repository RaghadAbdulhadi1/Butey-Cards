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
  public email!: HTMLInputElement | null;

  public password!: HTMLInputElement | null;

  public success!: HTMLParagraphElement | null;

  public userFailure!: HTMLParagraphElement | null;

  public passwordFailure!: HTMLParagraphElement | null;
  
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
    this.email = document.querySelector(".login-email");
    this.password = document.querySelector(".login-password");
    const users = localStorage.getItem("Users") as string | null;
    const data = users ? JSON.parse(users) : {};
    e.preventDefault();
    if(this.email)
    if (data[this.email.value]) {
      this.password = document.querySelector(".login-password");
      if(this.password)
      if (data[this.email.value].password === this.password.value) {
        if(this.success)
        this.success = document.querySelector(".success-failure");
        this.success?.classList.remove("success-failure");
        this.success?.classList.add("success-succ");
        this.userFailure?.classList.remove("user-succ");
        this.passwordFailure?.classList.remove("password-succ");
        utils.clearFormFeilds(this.email, this.password);
      } else {
        this.userFailure = document.querySelector(".user-failure");
        this.passwordFailure = document.querySelector(".password-failure");
        this.passwordFailure?.classList.add("password-succ");
        this.userFailure?.classList.remove("user-succ");
        utils.clearFormFeilds(this.password);
      }
    } else {
      this.passwordFailure = document.querySelector(".password-failure");
      this.userFailure = document.querySelector(".user-failure");
      this.userFailure?.classList.add("user-succ");
      this.passwordFailure?.classList.remove("password-succ");
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
