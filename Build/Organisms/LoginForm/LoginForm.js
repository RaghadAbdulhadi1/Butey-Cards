import Form from "../Form/Form.js";
import * as constants from "./LoginConstants.js";
import * as utils from "../../Utilities/utilities.js";
export default class LoginForm extends Form {
    email;
    password;
    success;
    userFailure;
    passwordFailure;
    constructor() {
        super(constants.loginParameters);
        this.addLoginComponents();
    }
    addLoginButton() {
        this.formClickables.appendChild(this.formSubmitButton);
    }
    addSwitchToRegisterLink() {
        this.formLink.appendChild(this.switchLink);
        this.formClickables.appendChild(this.formLink);
    }
    addClickables() {
        this.formContainer.appendChild(this.formClickables);
    }
    addValidationContent() {
        constants.loginValidationContent.forEach((validationParaghraph) => constants.validationContainer.appendChild(validationParaghraph));
        this.formContainer.appendChild(constants.validationContainer);
    }
    validateLogin(e) {
        this.email = document.querySelector(".login-email");
        this.password = document.querySelector(".login-password");
        const users = localStorage.getItem("Users");
        const data = users ? JSON.parse(users) : {};
        e.preventDefault();
        if (this.email)
            if (data[this.email.value]) {
                this.password = document.querySelector(".login-password");
                if (this.password)
                    if (data[this.email.value].password === this.password.value) {
                        if (this.success)
                            this.success = document.querySelector(".success-failure");
                        this.success?.classList.remove("success-failure");
                        this.success?.classList.add("success-succ");
                        this.userFailure?.classList.remove("user-succ");
                        this.passwordFailure?.classList.remove("password-succ");
                        utils.clearFormFeilds(this.email, this.password);
                    }
                    else {
                        this.userFailure = document.querySelector(".user-failure");
                        this.passwordFailure = document.querySelector(".password-failure");
                        this.passwordFailure?.classList.add("password-succ");
                        this.userFailure?.classList.remove("user-succ");
                        utils.clearFormFeilds(this.password);
                    }
            }
            else {
                this.passwordFailure = document.querySelector(".password-failure");
                this.userFailure = document.querySelector(".user-failure");
                this.userFailure?.classList.add("user-succ");
                this.passwordFailure?.classList.remove("password-succ");
            }
    }
    addLoginComponents() {
        this.addLoginButton();
        this.addSwitchToRegisterLink();
        this.addClickables();
        this.addValidationContent();
        this.formSubmitButton.addEventListener("click", this.validateLogin);
    }
}
