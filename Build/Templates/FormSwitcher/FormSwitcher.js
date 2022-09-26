import LoginForm from "../../Organisms/LoginForm/LoginForm.js";
import RegisterForm from "../../Organisms/RegisterForm/RegisterForm.js";
import Validation from "../../Utilities/Validation.js";
import * as utils from "../../Utilities/utilities.js";
import * as loginConstants from "../../Organisms/LoginForm/LoginConstants.js";
import * as registerConstants from "../../Organisms/RegisterForm/RegisterConstants.js";
import { formsContainer, forms, container, registerContainer, logInContainer } from "../../Atoms/Div/DivConstants.js";
export default class FormSwitcher {
    container;
    constructor() {
        new LoginForm();
        new RegisterForm();
        forms.appendChild(logInContainer);
        forms.appendChild(registerContainer);
        formsContainer.appendChild(forms);
        container.appendChild(formsContainer);
        this.container = utils.getElementById("container");
        loginConstants.switchToRegisterFormLink.addEventListener("click", this.switchToLogin);
        registerConstants.switchToLoginFormLink.addEventListener("click", this.switchToRegister);
        new Validation();
    }
    switchToLogin = () => {
        formsContainer.classList.add("active");
    };
    switchToRegister = () => {
        formsContainer.classList.remove("active");
    };
}
new FormSwitcher();
