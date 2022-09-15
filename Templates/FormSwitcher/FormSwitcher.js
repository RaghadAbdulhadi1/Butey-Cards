import * as constants from "../../Constants/constants.js";
import LoginForm from '../../Organisms/LoginForm/LoginForm.js';
import RegisterForm from '../../Organisms/RegisterForm/RegisterForm.js';
import Validation from '../../Utilities/Validation.js';


import * as utils from "../../Utilities/utilities.js";

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
