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
Object.defineProperty(exports, "__esModule", { value: true });
const constants = __importStar(require("../Organisms/RegisterForm/RegisterConstants"));
const utils = __importStar(require("./utilities"));
class Validation {
    constructor() {
        this.validateInputs();
    }
    userNameValidation() {
        this.smallLetters = utils.getElementById("small-letters");
        this.username = utils.getElementByClassName(".signup-name");
        this.username.onblur = this.onBlurUserNameFeild;
        this.username.onfocus = this.onFocusUserNameFeild;
        this.username.oninput = this.onKeyUserNameFeild;
    }
    onFocusUserNameFeild() {
        this.message = utils.getElementByClassName(".username-validation");
        this.message.classList.add("onUserValidation");
    }
    onBlurUserNameFeild() {
        this.message.classList.remove("onUserValidation");
    }
    onKeyUserNameFeild() {
        this.username = utils.getElementByClassName(".signup-name");
        this.smallLetters = utils.getElementById("small-letters");
        if (this.username.value.match(constants.usernameRegex)) {
            this.smallLetters.classList.remove("invalid");
            this.smallLetters.classList.add("valid");
        }
        else {
            this.smallLetters.classList.add("invalid");
            this.smallLetters.classList.remove("valid");
        }
    }
    emailValidation() {
        this.message = utils.getElementByClassName(".email-validation");
        this.email = utils.getElementByClassName(".signup-email");
        this.email.onfocus = this.onFocusEmailFeild;
        this.email.onblur = this.onBlurEmailFeild;
        this.email.onkeyup = this.onKeyupEmailFeild;
    }
    onFocusEmailFeild() {
        this.message = utils.getElementByClassName(".email-validation");
        this.message.classList.add("onEmailValidation");
    }
    onBlurEmailFeild() {
        this.message.classList.remove("onEmailValidation");
    }
    onKeyupEmailFeild() {
        this.email = utils.getElementByClassName(".signup-email");
        this.emailVal = utils.getElementById("email-val");
        const users = localStorage.getItem("Users");
        const data = users ? JSON.parse(users) : {};
        if (this.email.value.match(constants.emailRegex)) {
            if (!data[this.email.value]) {
                this.emailVal.classList.remove("invalid");
                this.emailVal.classList.add("valid");
                this.emailVal.innerText = "Valid email";
            }
            else {
                this.emailVal.classList.add("invalid");
                this.emailVal.classList.remove("valid");
                this.emailVal.innerText = "already exist";
            }
        }
        else {
            this.emailVal.classList.add("invalid");
            this.emailVal.classList.remove("valid");
        }
    }
    passwordValidation() {
        this.message = utils.getElementByClassName(".outValidation");
        this.password = utils.getElementByClassName(".signup-password");
        this.confirmPassword = utils.getElementByClassName(".confirm-password");
        this.letter = utils.getElementById("letter");
        this.capital = utils.getElementById("capital");
        this.number = utils.getElementById("number");
        this.characters = utils.getElementById("characters");
        this.password.onfocus = this.onFocusPasswordFeild;
        this.password.onblur = this.onBlurPasswordFeild;
        this.password.onkeyup = this.onKeyUpPasswordFeild;
        this.confirmPassword.onblur = this.onBlurConfirmPasswordFeild;
    }
    onFocusPasswordFeild() {
        this.message = utils.getElementByClassName(".outValidation");
        this.message.classList.add("onValidation");
    }
    onBlurPasswordFeild() {
        this.message.classList.remove("onValidation");
    }
    onKeyUpPasswordFeild() {
        this.password = utils.getElementByClassName(".signup-password");
        this.letter = utils.getElementById("letter");
        if (this.password.value.match(constants.smallLetterPasswordRegex)) {
            this.letter.classList.remove("invalid");
            this.letter.classList.add("valid");
        }
        else {
            this.letter.classList.add("invalid");
            this.letter.classList.remove("valid");
        }
        this.capital = utils.getElementById("capital");
        if (this.password.value.match(constants.capitalLetterPasswordRegex)) {
            this.capital.classList.remove("invalid");
            this.capital.classList.add("valid");
        }
        else {
            this.capital.classList.add("invalid");
            this.capital.classList.remove("valid");
        }
        this.number = utils.getElementById("number");
        if (this.password.value.match(constants.numbersLetterPasswordRegex)) {
            this.number.classList.remove("invalid");
            this.number.classList.add("valid");
        }
        else {
            this.number.classList.add("invalid");
            this.number.classList.remove("valid");
        }
        this.characters = utils.getElementById("characters");
        if (this.password.value.match(constants.charactersLetterPasswordRegex)) {
            this.characters.classList.remove("invalid");
            this.characters.classList.add("valid");
        }
        else {
            this.characters.classList.add("invalid");
            this.characters.classList.remove("valid");
        }
    }
    onBlurConfirmPasswordFeild() {
        this.password = utils.getElementByClassName(".signup-password");
        this.confirmPassword = utils.getElementByClassName(".confirm-password");
        if (this.password.value != this.confirmPassword.value) {
            this.passwordFailure = utils.getElementByClassName(".confirm-failure");
            this.passwordFailure.classList.add("confirm-succ");
        }
        else {
            this.passwordFailure = utils.getElementByClassName(".confirm-failure");
            this.passwordFailure.classList.remove("confirm-succ");
        }
    }
    validateInputs() {
        this.userNameValidation();
        this.emailValidation();
        this.passwordValidation();
    }
}
exports.default = Validation;
//# sourceMappingURL=Validation.js.map