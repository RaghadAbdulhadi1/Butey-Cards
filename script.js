class UserInterface {
  constructor() {
    this.container = document.getElementById("container");
    this.formContainer = document.createElement("div");
    this.formContainer.setAttribute("class", "forms-container");
    this.forms = document.createElement("div");
    this.forms.setAttribute("class", "forms");
    this.container.appendChild(this.formContainer);
    this.formContainer.appendChild(this.forms);
  }
}

const userInterface = new UserInterface();

class FormTitle {
  constructor(title) {
    this.title = document.createElement("div");
    this.title.setAttribute("class", "title");
    this.title.innerText = title;
  }
  get getTitle() {
    return this.title;
  }
}
class FormLineBreak {
  constructor() {
    this.breakLine = document.createElement("div");
    this.breakLine.setAttribute("class", "line-break");
  }
}

class FormInputFeild {
  constructor(type, placeholder, id, iconClass) {
    this.formInput = document.createElement("div");
    this.formInput.setAttribute("class", "input-feild");
    this.inputFeild = document.createElement("input");
    this.inputFeild.type = type;
    this.inputFeild.placeholder = placeholder;
    this.inputFeild.id = id;
    this.inputFeild.required;
    this.icon = document.createElement("i");
    this.icon.setAttribute("class", iconClass);
    this.formInput.appendChild(this.inputFeild);
    this.formInput.appendChild(this.icon);
  }
}

class FormButton {
  constructor(className, value) {
    this.submitButton = document.createElement("div");
    this.submitButton.setAttribute("class", className);
    this.button = document.createElement("div");
    this.button.setAttribute("class", "button");
    this.buttonInput = document.createElement("input");
    this.buttonInput.type = "submit";
    this.buttonInput.value = value;
    this.buttonInput.id = className;
    this.button.appendChild(this.buttonInput);
    this.submitButton.appendChild(this.button);
  }
}
class FormStructure {
  constructor() {
    this.form = document.createElement("form");
    this.form.id = "login-form-id";
    this.emailInput = new FormInputFeild(
      "email",
      "Enter your email",
      "login-email",
      "fa-regular fa-envelope"
    ).formInput;
    this.passwordInput = new FormInputFeild(
      "password",
      "Enter your password",
      "login-password",
      "fa-sharp fa-solid fa-shield-halved"
    ).formInput;
    this.form.appendChild(this.emailInput);
    this.form.appendChild(this.passwordInput);
    this.loginButton = new FormButton("login-button", "login").submitButton;
    this.register = document.createElement("div");
    this.register.setAttribute("class", "register");
    this.notMember = document.createElement("p");
    this.notMember.innerText = "Not a member?";
    this.notMemberAnchor = document.createElement("a");
    this.notMemberAnchor.href = "#";
    this.notMemberAnchor.setAttribute("class", "register-link");
    this.notMemberAnchor.innerText = "Register";
    this.notMember.appendChild(this.notMemberAnchor);
    this.register.appendChild(this.notMember);

    this.loginButton.appendChild(this.register);

    this.loginValidation = document.createElement("div");
    this.loginValidation.setAttribute("class", "loginValidation");

    this.success = document.createElement("p");
    this.success.setAttribute("class", "success-failure");
    this.success.innerText = "You have been logged in successfully";

    this.password = document.createElement("p");
    this.password.setAttribute("class", "password-failure");
    this.password.innerText = "Check your password";

    this.user = document.createElement("p");
    this.user.setAttribute("class", "user-failure");
    this.user.innerText = "User with this email doesn't exist";

    this.loginValidation.appendChild(this.success);
    this.loginValidation.appendChild(this.password);
    this.loginValidation.appendChild(this.user);

    this.form.appendChild(this.loginValidation);
    this.form.appendChild(this.loginButton);
  }
}

class LogInFormRender {
  constructor() {
    this.loginFormContent = document.createElement("div");
    this.loginFormContent.setAttribute("class", "login-form");
    this.formTitle = new FormTitle("Login").title;
    this.lineBreak = new FormLineBreak().breakLine;
    this.formStructure = new FormStructure();
    this.loginFormContent.appendChild(this.formTitle);
    this.loginFormContent.appendChild(this.lineBreak);
    this.loginFormContent.appendChild(this.formStructure.form);
    userInterface.forms.appendChild(this.loginFormContent);
  }
}
const loginFormRender = new LogInFormRender();

class CountryChoices {
  constructor() {
    this.countries = document.createElement("div");
    this.countries.setAttribute("class", "country-choices");
    this.countries.id = "countries";
    this.options = document.createElement("select");
    this.options.id = "countries";
    this.options.name = "countries";

    this.option = document.createElement("option");
    this.option.setAttribute("value", "");
    this.option.disabled = true;
    this.option.selected = true;
    this.option.innerHTML = "Country";

    this.option1 = document.createElement("option");
    this.option1.setAttribute("value", "jordan");
    this.option1.innerHTML = "Jordan";

    this.option2 = document.createElement("option");
    this.option2.setAttribute("value", "lebanon");
    this.option2.innerHTML = "Lebanon";

    this.option3 = document.createElement("option");
    this.option3.setAttribute("value", "syria");
    this.option3.innerHTML = "Syria";

    this.options.appendChild(this.option);
    this.options.appendChild(this.option1);
    this.options.appendChild(this.option2);
    this.options.appendChild(this.option3);
    this.countries.appendChild(this.options);
  }
}

class GenderOptions {
  constructor(radioChoiceNum, genderType) {
    this.radioChoice = document.createElement("div");

    this.genderInput = document.createElement("input");
    this.genderInput.type = "radio";
    this.genderInput.name = "radio-choice";
    this.genderInput.id = "gender";

    this.genderLabelMale = document.createElement("label");
    this.genderLabelMale.for = radioChoiceNum;
    this.genderLabelMale.innerHTML = genderType;
    this.genderLabelMale.id = "gender-label";

    this.radioChoice.appendChild(this.genderInput);
    this.radioChoice.appendChild(this.genderLabelMale);
  }
}

class ValidationRulesGenerator {
  constructor(id, content) {
    this.validationContent = document.createElement("p");
    this.validationContent.setAttribute("class", "invalid");
    this.validationContent.id = id;
    this.validationContent.innerHTML = content;
  }
}

class ValidationTitlesGenerator {
  constructor(validationTitle) {
    this.validationTitle = document.createElement("h3");
    this.validationTitle.innerHTML = validationTitle;
  }
}

class RegisterFormStructure {
  constructor() {
    this.form = document.createElement("form");
    this.form.id = "register-form-id";

    this.emailInput = new FormInputFeild(
      "email",
      "Enter your email",
      "signup-email",
      "fa-regular fa-envelope"
    ).formInput;
    this.username = new FormInputFeild(
      "text",
      "Enter your name",
      "signup-name",
      "fa-solid fa-user"
    ).formInput;
    this.password = new FormInputFeild(
      "password",
      "Create a password",
      "signup-password",
      "fa-sharp fa-solid fa-shield-halved"
    ).formInput;
    this.confirmPassword = new FormInputFeild(
      "password",
      "Confirm your password",
      "confirm-password",
      "fa-sharp fa-solid fa-shield-halved"
    ).formInput;

    this.countriesOptions = new CountryChoices().countries;
    this.genderChoices = document.createElement("div");
    this.genderChoices.setAttribute("id", "gender-choices");
    this.genderMale = new GenderOptions("radio-choice-1", "Male").radioChoice;
    this.genderFemale = new GenderOptions(
      "radio-choice-2",
      "Female"
    ).radioChoice;
    this.genderChoices.appendChild(this.genderMale);
    this.genderChoices.appendChild(this.genderFemale);

    this.registerButton = new FormButton(
      "register-button",
      "Register"
    ).submitButton;

    this.register = document.createElement("div");
    this.register.setAttribute("class", "register");

    this.registerparag = document.createElement("span");
    this.registerparag.innerHTML = "By Clicking on register, you agree on ";
    this.termsConditions = document.createElement("a");
    this.termsConditions.innerHTML = "terms and conditions";
    this.registerparag.appendChild(this.termsConditions);

    this.alreadyRegistered = document.createElement("p");
    this.alreadyRegistered.innerHTML = "Already registered? ";
    this.loginLink = document.createElement("a");
    this.loginLink.href = "#";
    this.loginLink.setAttribute("class", "login-link");
    this.loginLink.innerHTML = "Login";
    this.alreadyRegistered.appendChild(this.loginLink);

    this.register.appendChild(this.registerparag);
    this.register.appendChild(this.alreadyRegistered);

    this.validatePassword = document.createElement("div");
    this.validatePassword.setAttribute("class", "outValidation");
    this.validatePasswordTitle = new ValidationTitlesGenerator(
      "Password must contain the following:"
    ).validationTitle;
    this.validateSmallLetter = new ValidationRulesGenerator(
      "letter",
      "A small (loswercase) letter"
    ).validationContent;
    this.validateCapitalLetter = new ValidationRulesGenerator(
      "capital",
      "A capital (uppercase) letter"
    ).validationContent;
    this.validateNumber = new ValidationRulesGenerator(
      "number",
      "A number"
    ).validationContent;
    this.validateCharc = new ValidationRulesGenerator(
      "characters",
      "A symbol"
    ).validationContent;

    this.validatePassword.appendChild(this.validatePasswordTitle);
    this.validatePassword.appendChild(this.validateCapitalLetter);
    this.validatePassword.appendChild(this.validateNumber);
    this.validatePassword.appendChild(this.validateCharc);
    this.validatePassword.appendChild(this.validateSmallLetter);

    this.validateUserName = document.createElement("div");
    this.validateUserName.setAttribute("class", "username-validation");
    this.validateUserNameTitle = new ValidationTitlesGenerator(
      "UserName must contain the following:"
    ).validationTitle;
    this.validateSmallLetterStart = new ValidationRulesGenerator(
      "small-letters",
      "All small (lowercase) letters and starts with a character"
    ).validationContent;

    this.validateUserName.appendChild(this.validateUserNameTitle);
    this.validateUserName.appendChild(this.validateSmallLetterStart);

    this.validateEmail = document.createElement("div");
    this.validateEmail.setAttribute("class", "email-validation");
    this.validateEmailTitle = new ValidationTitlesGenerator(
      "Email adress must be in a correct format:"
    ).validationTitle;
    this.validateEmailSyntax = new ValidationRulesGenerator(
      "email-val",
      "Invalid email"
    ).validationContent;

    this.validateEmail.appendChild(this.validateEmailTitle);
    this.validateEmail.appendChild(this.validateEmailSyntax);

    this.validateConfirmPassword = document.createElement("div");
    this.validateConfirmPassword.setAttribute(
      "class",
      "confirm-password-validation"
    );

    this.validateConfirmPasswordpar = document.createElement("p");
    this.validateConfirmPasswordpar.setAttribute("class", "confirm-failure");
    this.validateConfirmPasswordpar.innerHTML = "Passwords doesn't match";

    this.validateConfirmPassword.appendChild(this.validateConfirmPasswordpar);

    this.form.appendChild(this.emailInput);
    this.form.appendChild(this.username);
    this.form.appendChild(this.password);
    this.form.appendChild(this.confirmPassword);
    this.form.appendChild(this.countriesOptions);
    this.form.appendChild(this.genderChoices);
    this.form.appendChild(this.registerButton);
    this.registerButton.appendChild(this.register);
    this.form.appendChild(this.validatePassword);
    this.form.appendChild(this.validateUserName);
    this.form.appendChild(this.validateEmail);
    this.form.appendChild(this.validateConfirmPassword);
  }
}

class RegisterFormRender {
  constructor() {
    this.signupFormContent = document.createElement("div");
    this.signupFormContent.setAttribute("class", "register-form");
    this.formTitle = new FormTitle("Registeration").title;
    this.lineBreak = new FormLineBreak().breakLine;
    this.formStructure = new RegisterFormStructure().form;

    this.signupFormContent.appendChild(this.formTitle);
    this.signupFormContent.appendChild(this.lineBreak);
    this.signupFormContent.appendChild(this.formStructure);
    userInterface.forms.appendChild(this.signupFormContent);
  }
}

const registerForm = new RegisterFormRender();

class FormsSwitcher {
  constructor() {
    this.container = document.querySelector(".forms-container");
    this.register = document.querySelector(".register-link");
    this.login = document.querySelector(".login-link");
    console.log(this.login);
    this.register.addEventListener("click",()=>{console.log("hi");})
    this.register.addEventListener("click", () => {
      this.container.classList.add("active");
    });
    this.login.addEventListener("click", () => {
      this.container.classList.remove("active");
    });
  }
}
const formSwitcher = new FormsSwitcher();

class PasswordValidation {
  constructor() {
    this.message = document.querySelector(".outValidation");
    this.password = document.getElementById("signup-password");
    this.confirmPassword = document.getElementById("confirm-password");
    this.letter = document.getElementById("letter");
    this.capital = document.getElementById("capital");
    this.number = document.getElementById("number");
    this.characters = document.getElementById("characters");
    this.password.onfocus = this.onFocusPasswordFeild;
    this.password.onblur = this.onBlurPasswordFeild;
    this.password.onkeyup = this.onKeyUpPasswordFeild;
    this.confirmPassword.onblur = this.onBlurConfirmPasswordFeild;
  }
  onFocusPasswordFeild() {
    this.message = document.querySelector(".outValidation");
    this.message.classList.add("onValidation");
  }
  onBlurPasswordFeild() {
    this.message.classList.remove("onValidation");
  }
  onKeyUpPasswordFeild() {
    // lowercase
    this.password = document.getElementById("signup-password");
    this.letter = document.getElementById("letter");
    const lowerCaseLetters = /[a-z]/g;
    if (this.password.value.match(lowerCaseLetters)) {
      this.letter.classList.remove("invalid");
      this.letter.classList.add("valid");
    } else {
      this.letter.classList.add("invalid");
      this.letter.classList.remove("valid");
    }
    // uppercase
    this.capital = document.getElementById("capital");
    const upperCaseLetters = /[A-Z]/g;
    if (this.password.value.match(upperCaseLetters)) {
      this.capital.classList.remove("invalid");
      this.capital.classList.add("valid");
    } else {
      this.capital.classList.add("invalid");
      this.capital.classList.remove("valid");
    }
    // special characters
    this.number = document.getElementById("number");
    const numbers = /[0-9]/g;
    if (this.password.value.match(numbers)) {
      this.number.classList.remove("invalid");
      this.number.classList.add("valid");
    } else {
      this.number.classList.add("invalid");
      this.number.classList.remove("valid");
    }
    // numbers
    this.characters = document.getElementById("characters");
    const characters = /\W/g;
    if (this.password.value.match(characters)) {
      this.characters.classList.remove("invalid");
      this.characters.classList.add("valid");
    } else {
      this.characters.classList.add("invalid");
      this.characters.classList.remove("valid");
    }
  }
  onBlurConfirmPasswordFeild () {
    this.password = document.getElementById("signup-password");
    this.confirmPassword = document.getElementById("confirm-password");
    if (this.password.value != this.confirmPassword.value) {

      this.passwordFailure = document.querySelector(".confirm-failure");
      this.passwordFailure.classList.add("confirm-succ");
    }else{
      this.passwordFailure = document.querySelector(".confirm-failure");
      this.passwordFailure.classList.remove("confirm-succ");
    }
  }
}

class UserNameValidation {
  constructor() {
    this.message = document.querySelector(".email-validation");
    this.username = document.getElementById("signup-name")
    this.smallLetters = document.getElementById("small-letters")
    this.username.onblur = this.onBlurUserNameFeild
    this.username.onfocus = this.onFocusUserNameFeild
    this.username.oninput = this.onKeyUserNameFeild
  }
  onFocusUserNameFeild() {
    this.message = document.querySelector(".username-validation");
    this.message.classList.add("onUserValidation");
  }
  onBlurUserNameFeild() {
    this.message.classList.remove("onUserValidation");

  }
  onKeyUserNameFeild() {
    this.username = document.getElementById("signup-name")
    this.smallLetters = document.getElementById("small-letters")
    const lowerCaseLetters = /^[a-z][a-z0-9_]+[a-z0-9]$/g;
    if (this.username.value.match(lowerCaseLetters)) {
      this.smallLetters.classList.remove("invalid");
      this.smallLetters.classList.add("valid");
    } else {
      this.smallLetters.classList.add("invalid");
      this.smallLetters.classList.remove("valid");
    }
    return this.isValidatedUserName;
  }
}

class EmailValidation {
  constructor() {
    this.message = document.querySelector(".email-validation");
    this.email = document.getElementById("signup-email");
    this.emailVal = document.getElementById("email-val");
    this.email.onfocus = this.onFocusEmailFeild;
    this.email.onblur = this.onBlurEmailFeild;
    this.email.onkeyup = this.onKeyupEmailFeild;
  }
  onFocusEmailFeild() {
    this.message = document.querySelector(".email-validation");
    this.message.classList.add("onEmailValidation");
  }
  onBlurEmailFeild() {
    this.message.classList.remove("onEmailValidation");
  }
  onKeyupEmailFeild() {
    this.email = document.getElementById("signup-email");
    this.emailVal = document.getElementById("email-val");
    const validEmail =
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (this.email.value.match(validEmail)) {
      this.isValidatedEmail = true;

      this.emailVal.classList.remove("invalid");
      this.emailVal.classList.add("valid");
    } else {
      this.emailVal.classList.add("invalid");
      this.emailVal.classList.remove("valid");
    }
  }
}

class LogInValidation {
  constructor() {
    this.email = document.getElementById("login-email");
    this.password = document.getElementById("login-password");
    this.loginButton = document.getElementById("login-button");
    this.loginButton.addEventListener("click", this.validateSignin);
  };
  validateSignin(e) {
    e.preventDefault();
    this.email = document.getElementById("login-email");
    this.password = document.getElementById("login-password");
    this.success = document.querySelector(".success-failure")
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === this.email.value);
    if (user) {
      if (user.password === this.password.value) {
        this.success = document.querySelector(".success-failure");
        this.success.classList.remove("success-failure");
        this.success.classList.add("success-succ");
      } else {
        this.passwordFailure = document.querySelector(".password-failure");
        this.passwordFailure.classList.add("password-succ");
      }
    } else {
      this.userFailure = document.querySelector(".user-failure");
      this.userFailure.classList.add("user-succ");
    }
}
  }

const logIn = new LogInValidation();

class Render {
  constructor() {
    this.validatePassword = new PasswordValidation();
    this.username = new UserNameValidation();
    this.email = new EmailValidation();
  }
}
class localStorageGenerator extends Render{
  constructor() {
    super();
    this.form = document.getElementById("register-form-id");
    this.email = document.getElementById("signup-email");
    this.username = document.getElementById("signup-name");
    this.password = document.getElementById("signup-password");
    this.isValid = document.querySelectorAll(".invalid")

    this.confirmPassword = document.getElementById("confirm-password");
    this.country = document.getElementById("countries");
    this.gender = document.getElementById("gender-choices");
    this.user = {};

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(this.isValid)
      if(this.isValid.length == 6) {
        this.user = {
          email: this.email.value,
          username: this.username.value,
          password: this.password.value,
          country: this.country.value,
          gender: this.gender.value,
        };
        const users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(this.user);
        localStorage.setItem("users", JSON.stringify(users));
        this.email.value = "";
        this.username.value = "";
        this.password.value = "";
        this.confirmPassword.value = "";
        this.country.value = "";
        this.gender.value = "";
      }
      });
    }
  }

const storage = new localStorageGenerator();