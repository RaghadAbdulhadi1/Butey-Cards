import LoginForm from "../../Organisms/LoginForm/LoginForm";
import RegisterForm from "../../Organisms/RegisterForm/RegisterForm";
import Validation from "../../Utilities/Validation";
import * as utils from "../../Utilities/utilities";
import * as loginConstants from "../../Organisms/LoginForm/LoginConstants";
import * as registerConstants from "../../Organisms/RegisterForm/RegisterConstants";
import {
  formsContainer,
  forms,
  container,
  registerContainer,
  logInContainer
} from "../../Atoms/Div/DivConstants";

interface IFormSwitcher {
  container: HTMLElement;
  switchToLogin(): void;
  switchToRegister(): void;
}

export default class FormSwitcher implements IFormSwitcher {
  container: HTMLElement;

  constructor() {
    new LoginForm();
    new RegisterForm();
    forms.appendChild(logInContainer);
    forms.appendChild(registerContainer);
    formsContainer.appendChild(forms);
    container.appendChild(formsContainer);
    this.container = utils.getElementById("container") as HTMLElement;
    loginConstants.switchToRegisterFormLink.addEventListener(
      "click",
      this.switchToLogin
    );
    registerConstants.switchToLoginFormLink.addEventListener(
      "click",
      this.switchToRegister
    );
    new Validation();
  }

  public switchToLogin = (): void => {
    formsContainer.classList.add("active");
  };
  
  public switchToRegister = (): void => {
    formsContainer.classList.remove("active");
  };
}
new FormSwitcher();
