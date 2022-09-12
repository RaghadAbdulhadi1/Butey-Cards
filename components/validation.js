class Validation {
  constructor() {
    this.validateInputs();
  }
  userNameValidation() {
    this.username = getElementById("signup-name");
    this.smallLetters = getElementById("small-letters");
    this.username.onblur = this.onBlurUserNameFeild;
    this.username.onfocus = this.onFocusUserNameFeild;
    this.username.oninput = this.onKeyUserNameFeild;
  }
  onFocusUserNameFeild() {
    addClass(".username-validation", "onUserValidation");
  }
  onBlurUserNameFeild() {
    removeClass(".username-validation", "onUserValidation");
  }
  onKeyUserNameFeild() {
    this.username = getElementById("signup-name");
    this.smallLetters = getElementById("small-letters");
    if (this.username.value.match(usernameRegex)) {
      this.smallLetters.classList.remove("invalid");
      this.smallLetters.classList.add("valid");
    } else {
      this.smallLetters.classList.add("invalid");
      this.smallLetters.classList.remove("valid");
    }
  }
  emailValidation() {
    this.message = getElementByClassName(".email-validation");
    this.email = getElementById("signup-email");
    this.email.onfocus = this.onFocusEmailFeild;
    this.email.onblur = this.onBlurEmailFeild;
    this.email.onkeyup = this.onKeyupEmailFeild;
  }
  onFocusEmailFeild() {
    this.message = getElementByClassName(".email-validation");
    this.message.classList.add("onEmailValidation");
  }
  onBlurEmailFeild() {
    this.message.classList.remove("onEmailValidation");
  }
  onKeyupEmailFeild() {
    this.email = getElementById("signup-email");
    this.emailVal = getElementById("email-val");
    const users = getLocalStorage();
    const userExists = users.find((u) => {
      return u.email === this.email.value;
    });
    if (this.email.value.match(emailRegex)) {
      if (!userExists) {
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
  passwordValidation() {
    this.message = getElementByClassName(".outValidation");
    this.password = getElementById("signup-password");
    this.confirmPassword = getElementById("confirm-password");
    this.letter = getElementById("letter");
    this.capital = getElementById("capital");
    this.number = getElementById("number");
    this.characters = getElementById("characters");
    this.password.onfocus = this.onFocusPasswordFeild;
    this.password.onblur = this.onBlurPasswordFeild;
    this.password.onkeyup = this.onKeyUpPasswordFeild;
    this.confirmPassword.onblur = this.onBlurConfirmPasswordFeild;
  }
  onFocusPasswordFeild() {
    this.message = getElementByClassName(".outValidation");
    this.message.classList.add("onValidation");
  }
  onBlurPasswordFeild() {
    this.message.classList.remove("onValidation");
  }
  onKeyUpPasswordFeild() {
    // lowercase
    this.password = getElementById("signup-password");
    this.letter = getElementById("letter");
    if (this.password.value.match(smallLetterPasswordRegex)) {
      this.letter.classList.remove("invalid");
      this.letter.classList.add("valid");
    } else {
      this.letter.classList.add("invalid");
      this.letter.classList.remove("valid");
    }
    // uppercase
    this.capital = getElementById("capital");
    if (this.password.value.match(capitalLetterPasswordRegex)) {
      this.capital.classList.remove("invalid");
      this.capital.classList.add("valid");
    } else {
      this.capital.classList.add("invalid");
      this.capital.classList.remove("valid");
    }
    // special characters
    this.number = getElementById("number");
    if (this.password.value.match(numbersLetterPasswordRegex)) {
      this.number.classList.remove("invalid");
      this.number.classList.add("valid");
    } else {
      this.number.classList.add("invalid");
      this.number.classList.remove("valid");
    }
    // numbers
    this.characters = getElementById("characters");
    if (this.password.value.match(charactersLetterPasswordRegex)) {
      this.characters.classList.remove("invalid");
      this.characters.classList.add("valid");
    } else {
      this.characters.classList.add("invalid");
      this.characters.classList.remove("valid");
    }
  }
  onBlurConfirmPasswordFeild() {
    this.password = getElementById("signup-password");
    this.confirmPassword = getElementById("confirm-password");
    if (this.password.value != this.confirmPassword.value) {
      this.passwordFailure = getElementByClassName(".confirm-failure");
      this.passwordFailure.classList.add("confirm-succ");
    } else {
      this.passwordFailure = getElementByClassName(".confirm-failure");
      this.passwordFailure.classList.remove("confirm-succ");
    }
  }
  validateInputs() {
    this.userNameValidation();
    this.emailValidation();
    this.passwordValidation();
  }
}
