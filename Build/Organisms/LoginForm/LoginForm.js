"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Form_1 = __importDefault(require("../Form/Form"));
const constants = __importStar(require("../LoginForm/LoginConstants"));
const utils = __importStar(require("../../Utilities/utilities"));
class LoginForm extends Form_1.default {
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
        e.preventDefault();
        this.email = utils.getElementByClassName(".login-email");
        this.password = utils.getElementByClassName(".login-password");
        const users = localStorage.getItem("Users");
        const data = users ? JSON.parse(users) : {};
        if (data[this.email.value]) {
            this.password = utils.getElementById("login-password");
            if (data[this.email.value].password === this.password.value) {
                this.success = utils.getElementByClassName(".success-failure");
                this.success.classList.remove("success-failure");
                this.success.classList.add("success-succ");
                this.userFailure.classList.remove("user-succ");
                this.passwordFailure.classList.remove("password-succ");
                utils.clearFormFeilds(this.email, this.password);
            }
            else {
                this.userFailure = utils.getElementByClassName(".user-failure");
                this.passwordFailure = utils.getElementByClassName(".password-failure");
                this.passwordFailure.classList.add("password-succ");
                this.userFailure.classList.remove("user-succ");
            }
        }
        else {
            this.passwordFailure = utils.getElementByClassName(".password-failure");
            this.userFailure = utils.getElementByClassName(".user-failure");
            this.userFailure.classList.add("user-succ");
            this.passwordFailure.classList.remove("password-succ");
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
exports.default = LoginForm;
//# sourceMappingURL=LoginForm.js.map