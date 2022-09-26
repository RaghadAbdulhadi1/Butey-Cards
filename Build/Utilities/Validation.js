import * as constants from "../Organisms/RegisterForm/RegisterConstants.js";
export default class Validation {
    email;
    emailVal;
    message;
    password;
    smallLetters;
    username;
    confirmPassword;
    letter;
    capital;
    number;
    characters;
    passwordFailure;
    constructor() {
        this.validateInputs();
    }
    userNameValidation() {
        this.smallLetters = document.querySelector("small-letters");
        this.username = document.querySelector(".signup-name");
        if (this.username) {
            this.username.onblur = this.onBlurUserNameFeild;
            this.username.onfocus = this.onFocusUserNameFeild;
            this.username.oninput = this.onKeyUserNameFeild;
        }
    }
    onFocusUserNameFeild() {
        this.message = document.querySelector(".username-validation");
        this.message?.classList.add("onUserValidation");
    }
    onBlurUserNameFeild() {
        this.message?.classList.remove("onUserValidation");
    }
    onKeyUserNameFeild() {
        this.username = document.querySelector(".signup-name");
        this.smallLetters = document.querySelector("small-letters");
        if (this.username)
            if (this.username.value.match(constants.usernameRegex)) {
                this.smallLetters?.classList.remove("invalid");
                this.smallLetters?.classList.add("valid");
            }
            else {
                this.smallLetters?.classList.add("invalid");
                this.smallLetters?.classList.remove("valid");
            }
    }
    emailValidation() {
        this.message = document.querySelector(".email-validation");
        this.email = document.querySelector(".signup-email");
        if (this.email) {
            this.email.onfocus = this.onFocusEmailFeild;
            this.email.onblur = this.onBlurEmailFeild;
            this.email.onkeyup = this.onKeyupEmailFeild;
        }
    }
    onFocusEmailFeild() {
        this.message = document.querySelector(".email-validation");
        this.message?.classList.add("onEmailValidation");
    }
    onBlurEmailFeild() {
        this.message?.classList.remove("onEmailValidation");
    }
    onKeyupEmailFeild() {
        this.email = document.querySelector(".signup-email");
        this.emailVal = document.querySelector("email-val");
        const users = localStorage.getItem("Users");
        const data = users ? JSON.parse(users) : {};
        if (this.email && this.emailVal)
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
        this.message = document.querySelector(".outValidation");
        this.password = document.querySelector(".signup-password");
        this.confirmPassword = document.querySelector(".confirm-password");
        this.letter = document.querySelector("letter");
        this.capital = document.querySelector("capital");
        this.number = document.querySelector("number");
        this.characters = document.querySelector("characters");
        if (this.password) {
            this.password.onfocus = this.onFocusPasswordFeild;
            this.password.onblur = this.onBlurPasswordFeild;
            this.password.onkeyup = this.onKeyUpPasswordFeild;
        }
        if (this.confirmPassword)
            this.confirmPassword.onblur = this.onBlurConfirmPasswordFeild;
    }
    onFocusPasswordFeild() {
        this.message = document.querySelector(".outValidation");
        this.message?.classList.add("onValidation");
    }
    onBlurPasswordFeild() {
        this.message?.classList.remove("onValidation");
    }
    onKeyUpPasswordFeild() {
        // lowercase
        this.password = document.querySelector(".signup-password");
        this.letter = document.querySelector("letter");
        if (this.password?.value.match(constants.smallLetterPasswordRegex)) {
            this.letter?.classList.remove("invalid");
            this.letter?.classList.add("valid");
        }
        else {
            this.letter?.classList.add("invalid");
            this.letter?.classList.remove("valid");
        }
        // uppercase
        this.capital = document.querySelector("capital");
        if (this.password?.value.match(constants.capitalLetterPasswordRegex)) {
            this.capital?.classList.remove("invalid");
            this.capital?.classList.add("valid");
        }
        else {
            this.capital?.classList.add("invalid");
            this.capital?.classList.remove("valid");
        }
        // special characters
        this.number = document.querySelector("number");
        if (this.password?.value.match(constants.numbersLetterPasswordRegex)) {
            this.number?.classList.remove("invalid");
            this.number?.classList.add("valid");
        }
        else {
            this.number?.classList.add("invalid");
            this.number?.classList.remove("valid");
        }
        // numbers
        this.characters = document.querySelector("characters");
        if (this.password?.value.match(constants.charactersLetterPasswordRegex)) {
            this.characters?.classList.remove("invalid");
            this.characters?.classList.add("valid");
        }
        else {
            this.characters?.classList.add("invalid");
            this.characters?.classList.remove("valid");
        }
    }
    onBlurConfirmPasswordFeild() {
        this.password = document.querySelector(".signup-password");
        this.confirmPassword = document.querySelector(".confirm-password");
        if (this.password && this.confirmPassword)
            if (this.password.value != this.confirmPassword.value) {
                this.passwordFailure = document.querySelector(".confirm-failure");
                this.passwordFailure?.classList.add("confirm-succ");
            }
            else {
                this.passwordFailure = document.querySelector(".confirm-failure");
                this.passwordFailure?.classList.remove("confirm-succ");
            }
    }
    validateInputs() {
        this.userNameValidation();
        this.emailValidation();
        this.passwordValidation();
    }
}
