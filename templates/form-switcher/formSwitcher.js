import * as constants from "../../constants/constants.js";
import LoginForm from '../../organisms/login-form/loginForm.js';
import RegisterForm from '../../organisms/register-form/registerForm.js';
import Validation from '../../utilities/validation.js';


import * as utils from "../../utilities/utilities.js";

export default class FormSwitcher {
  constructor() {
    new LoginForm();
    new RegisterForm();
    constants.forms.appendChild(constants.logInContainer);
    constants.forms.appendChild(constants.registerContainer);
    constants.formsContainer.appendChild(constants.forms);
    constants.container.appendChild(constants.formsContainer);
    this.container = utils.getElementById("container");
    constants.switchToRegisterFormLink.addEventListener("click", this.switchToLogin);
    constants.switchToLoginFormLink.addEventListener("click", this.switchToRegister);
    new Validation();
  }
  switchToLogin = () => {
    constants.formsContainer.classList.add("active");
  };
  switchToRegister = () => {
    constants.formsContainer.classList.remove("active");
  };
  
}

const formHandler = new FormSwitcher();
