import * as constants from "../Organisms/RegisterForm/RegisterConstants.js";

import * as utils from './utilities.js';
interface User {
  [email: string]: string;
}

export default class Validation {
  email!: HTMLInputElement
  emailVal!: HTMLParagraphElement
  message!: HTMLParagraphElement
  password!: HTMLInputElement
  smallLetters!: HTMLParagraphElement
  username!: HTMLInputElement
  confirmPassword!: HTMLInputElement
  letter!: HTMLParagraphElement
  capital!: HTMLParagraphElement
  number!: HTMLParagraphElement
  characters!: HTMLParagraphElement
  passwordFailure!: HTMLParagraphElement
  constructor(
  ) {
    this.validateInputs();
  }

  public userNameValidation(): void {
    this.smallLetters = utils.getElementById("small-letters") as HTMLInputElement;
    this.username = utils.getElementByClassName(".signup-name") as HTMLInputElement;
    this.username.onblur = this.onBlurUserNameFeild;
    this.username.onfocus = this.onFocusUserNameFeild;
    this.username.oninput = this.onKeyUserNameFeild;
  }
  public onFocusUserNameFeild(): void {
    this.message = utils.getElementByClassName(".username-validation") as HTMLParagraphElement;
    this.message.classList.add("onUserValidation");
  }
  public onBlurUserNameFeild(): void {
    this.message.classList.remove("onUserValidation");
  }
  public onKeyUserNameFeild(): void {
    this.username = utils.getElementByClassName(".signup-name") as HTMLInputElement;
    this.smallLetters = utils.getElementById("small-letters") as HTMLParagraphElement;
    if (this.username.value.match(constants.usernameRegex)) {
      this.smallLetters.classList.remove("invalid");
      this.smallLetters.classList.add("valid");
    } else {
      this.smallLetters.classList.add("invalid");
      this.smallLetters.classList.remove("valid");
    }
  }
  public emailValidation(): void {
    this.message = utils.getElementByClassName(".email-validation") as HTMLParagraphElement;
    this.email = utils.getElementByClassName(".signup-email") as HTMLInputElement;
    this.email.onfocus = this.onFocusEmailFeild;
    this.email.onblur = this.onBlurEmailFeild;
    this.email.onkeyup = this.onKeyupEmailFeild;
  }
  public onFocusEmailFeild(): void {
    this.message = utils.getElementByClassName(".email-validation") as HTMLParagraphElement;
    this.message.classList.add("onEmailValidation");
  }
  public onBlurEmailFeild(): void {
    this.message.classList.remove("onEmailValidation");
  }
  public onKeyupEmailFeild(): void {
    this.email = utils.getElementByClassName(".signup-email") as HTMLInputElement;
    this.emailVal = utils.getElementById("email-val") as HTMLParagraphElement;
    const users = localStorage.getItem("Users") as string | null;
    const data: User = users ? JSON.parse(users) : {};

    if (this.email.value.match(constants.emailRegex)) {
      if (!data[this.email.value]) {
        this.emailVal.classList.remove("invalid");
        this.emailVal.classList.add("valid");
        this.emailVal.innerText = "Valid email";
      } else {
        this.emailVal.classList.add("invalid");
        this.emailVal.classList.remove("valid");
        this.emailVal.innerText = "already exist";
      }
    } else {
      this.emailVal.classList.add("invalid");
      this.emailVal.classList.remove("valid");
    }
  }
  public passwordValidation(): void {
    this.message = utils.getElementByClassName(".outValidation") as HTMLParagraphElement;
    this.password = utils.getElementByClassName(".signup-password") as HTMLInputElement;
    this.confirmPassword = utils.getElementByClassName(".confirm-password") as HTMLInputElement;
    this.letter = utils.getElementById("letter") as HTMLParagraphElement;
    this.capital = utils.getElementById("capital") as HTMLParagraphElement;
    this.number = utils.getElementById("number") as HTMLParagraphElement;
    this.characters = utils.getElementById("characters") as HTMLParagraphElement;
    this.password.onfocus = this.onFocusPasswordFeild;
    this.password.onblur = this.onBlurPasswordFeild;
    this.password.onkeyup = this.onKeyUpPasswordFeild;
    this.confirmPassword.onblur = this.onBlurConfirmPasswordFeild;
  }
  public onFocusPasswordFeild(): void {
    this.message = utils.getElementByClassName(".outValidation") as HTMLParagraphElement;
    this.message.classList.add("onValidation");
  }
  public onBlurPasswordFeild(): void {
    this.message.classList.remove("onValidation");
  }
  public onKeyUpPasswordFeild(): void {
    // lowercase
    this.password = utils.getElementByClassName(".signup-password") as HTMLInputElement;
    this.letter = utils.getElementById("letter") as HTMLParagraphElement;
    if (this.password.value.match(constants.smallLetterPasswordRegex)) {
      this.letter.classList.remove("invalid");
      this.letter.classList.add("valid");
    } else {
      this.letter.classList.add("invalid");
      this.letter.classList.remove("valid");
    }
    // uppercase
    this.capital = utils.getElementById("capital") as HTMLParagraphElement;
    if (this.password.value.match(constants.capitalLetterPasswordRegex)) {
      this.capital.classList.remove("invalid");
      this.capital.classList.add("valid");
    } else {
      this.capital.classList.add("invalid");
      this.capital.classList.remove("valid");
    }
    // special characters
    this.number = utils.getElementById("number") as HTMLParagraphElement;
    if (this.password.value.match(constants.numbersLetterPasswordRegex)) {
      this.number.classList.remove("invalid");
      this.number.classList.add("valid");
    } else {
      this.number.classList.add("invalid");
      this.number.classList.remove("valid");
    }
    // numbers
    this.characters = utils.getElementById("characters") as HTMLParagraphElement;
    if (this.password.value.match(constants.charactersLetterPasswordRegex)) {
      this.characters.classList.remove("invalid");
      this.characters.classList.add("valid");
    } else {
      this.characters.classList.add("invalid");
      this.characters.classList.remove("valid");
    }
  }
  public onBlurConfirmPasswordFeild(): void {
    this.password = utils.getElementByClassName(".signup-password") as HTMLInputElement;
    this.confirmPassword = utils.getElementByClassName(".confirm-password") as HTMLInputElement;
    if (this.password.value != this.confirmPassword.value) {
      this.passwordFailure = utils.getElementByClassName(".confirm-failure") as HTMLParagraphElement;
      this.passwordFailure.classList.add("confirm-succ");
    } else {
      this.passwordFailure = utils.getElementByClassName(".confirm-failure") as HTMLParagraphElement;
      this.passwordFailure.classList.remove("confirm-succ");
    }
  }
  public validateInputs(): void {
    this.userNameValidation();
    this.emailValidation();
    this.passwordValidation();
  }
}
