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

class FormInterface {
  addTitle(title) {
    this.title = document.createElement("div");
    this.title.setAttribute("class", "title");
    this.title.innerText = title;
    return this.title;
  }
  addBreakLine() {
    this.breakLine = document.createElement("div");
    this.breakLine.setAttribute("class", "line-break");
    return this.breakLine;
  }
  addInputFeild(type, placeholder, id, iconClass) {
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
    return this.formInput;
  }
  addButton(className, value) {
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
    return this.submitButton;
  }
}

class LogInForm extends FormInterface {
  constructor() {
    super();
    this.loginFormContent = document.createElement("div");
    this.loginFormContent.setAttribute("class", "login-form");
    this.formTitle = this.addTitle("Login");
    this.lineBreak = this.addBreakLine();
    this.formStructure = this.#addFormComponents();
    this.loginFormContent.appendChild(this.formTitle);
    this.loginFormContent.appendChild(this.lineBreak);
    this.loginFormContent.appendChild(this.formStructure);
    userInterface.forms.appendChild(this.loginFormContent);
    this.email = document.getElementById("login-email");
    this.password = document.getElementById("login-password");
    this.loginButton = document.getElementById("login-button");
    this.loginButton.addEventListener("click", this.#validateLogin);
  }
  #addFormComponents() {
    this.form = document.createElement("form");
    this.form.id = "login-form-id";
    this.emailInput = this.addInputFeild(
      "email",
      "Enter your email",
      "login-email",
      "fa-regular fa-envelope"
    );
    this.passwordInput = this.addInputFeild(
      "password",
      "Enter your password",
      "login-password",
      "fa-sharp fa-solid fa-shield-halved"
    );
    this.form.appendChild(this.emailInput);
    this.form.appendChild(this.passwordInput);
    this.loginButton = this.addButton("login-button", "login");
    this.register = document.createElement("div");
    this.register.setAttribute("class", "register");
    this.notMember = document.createElement("p");
    this.notMember.innerText = "Not a member? ";
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

    this.emptyFeilds = document.createElement("p");
    this.emptyFeilds.setAttribute("class", "empty-feilds-failure");
    this.emptyFeilds.innerText = "Please fill in the email and password";

    this.loginValidation.appendChild(this.success);
    this.loginValidation.appendChild(this.password);
    this.loginValidation.appendChild(this.user);
    this.loginValidation.appendChild(this.emptyFeilds);


    this.form.appendChild(this.loginValidation);
    this.form.appendChild(this.loginButton);

    return this.form;
  }
  #validateLogin(e) {
    e.preventDefault();
    this.email = document.getElementById("login-email");
    this.password = document.getElementById("login-password");
    this.success = document.querySelector(".success-failure");
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === this.email.value);
    if (user) {
      if (user.password === this.password.value) {
        this.success = document.querySelector(".success-failure");
        this.success.classList.remove("success-failure");
        this.success.classList.add("success-succ");
        this.userFailure.classList.remove("user-succ");
        this.passwordFailure.classList.remove("password-succ");
        this.emptyFeildsFailure.classList.remove("empty-feilds-succ");
      } else {
        this.passwordFailure = document.querySelector(".password-failure");
        this.passwordFailure.classList.add("password-succ");
        this.userFailure.classList.remove("user-succ");
        this.emptyFeildsFailure.classList.remove("empty-feilds-succ");
      }
    } else if (this.email.value == "") {
      console.log("Please select")
      this.emptyFeildsFailure = document.querySelector(".empty-feilds-failure");
      this.emptyFeildsFailure.classList.add("empty-feilds-succ");
    }
    else {
      this.userFailure = document.querySelector(".user-failure");
      this.userFailure.classList.add("user-succ");
      this.passwordFailure.classList.remove("password-succ");
      this.emptyFeildsFailure.classList.remove("empty-feilds-succ");
    }
  }
}

class RegisterForm extends FormInterface {
  constructor() {
    super();
    this.signupFormContent = document.createElement("div");
    this.signupFormContent.setAttribute("class", "register-form");
    this.formTitle = this.addTitle("Registeration");
    this.lineBreak = this.addBreakLine();
    this.formStructure = this.#addFormComponents();

    this.signupFormContent.appendChild(this.formTitle);
    this.signupFormContent.appendChild(this.lineBreak);
    this.signupFormContent.appendChild(this.formStructure);
    userInterface.forms.appendChild(this.signupFormContent);
    this.validatePassword = this.passwordValidation();
    this.username = this.userNameValidation();
    this.email = this.emailValidation();
    const checkboxes = document.querySelectorAll(".gender");
    this.genderLabel = document.querySelector(".gender-label");
    document.body.addEventListener("click", (e) => {
      for (const c of checkboxes) {
        c.checked = false;
      }
      const clickedCheckbox = [...checkboxes].find((c) => c === e.target);
      clickedCheckbox.checked = true;
      const checked = document.querySelectorAll(
        'input[type="checkbox"]:checked'
      );
      console.log([...checked].map((c) => c.value));
    });
  }
  #addFormComponents() {
    this.form = document.createElement("form");
    this.form.id = "register-form-id";

    this.emailInput = this.addInputFeild(
      "email",
      "Enter your email",
      "signup-email",
      "fa-regular fa-envelope"
    );
    this.username = this.addInputFeild(
      "text",
      "Enter your name",
      "signup-name",
      "fa-solid fa-user"
    );
    this.password = this.addInputFeild(
      "password",
      "Create a password",
      "signup-password",
      "fa-sharp fa-solid fa-shield-halved"
    );
    this.confirmPassword = this.addInputFeild(
      "password",
      "Confirm your password",
      "confirm-password",
      "fa-sharp fa-solid fa-shield-halved"
    );

    this.countriesOptions = this.#addCountryChoices();
    this.genderChoices = document.createElement("div");
    this.genderChoices.setAttribute("id", "gender-choices");
    this.genderMale = this.#addGenderOptions("radio-choice-1", "Male");
    this.genderFemale = this.#addGenderOptions("radio-choice-2", "Female");
    this.genderChoices.appendChild(this.genderMale);
    this.genderChoices.appendChild(this.genderFemale);

    this.registerButton = this.addButton("register-button", "Register");

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
    this.validatePasswordTitle = this.#addValidationTitle(
      "Password must contain the following:"
    );
    this.validateSmallLetter = this.#addValidationContent(
      "letter",
      "A small (loswercase) letter"
    );
    this.validateCapitalLetter = this.#addValidationContent(
      "capital",
      "A capital (uppercase) letter"
    );
    this.validateNumber = this.#addValidationContent("number", "A number");
    this.validateCharc = this.#addValidationContent("characters", "A symbol");

    this.validatePassword.appendChild(this.validatePasswordTitle);
    this.validatePassword.appendChild(this.validateCapitalLetter);
    this.validatePassword.appendChild(this.validateNumber);
    this.validatePassword.appendChild(this.validateCharc);
    this.validatePassword.appendChild(this.validateSmallLetter);

    this.validateUserName = document.createElement("div");
    this.validateUserName.setAttribute("class", "username-validation");
    this.validateUserNameTitle = this.#addValidationTitle(
      "UserName must contain the following:"
    );
    this.validateSmallLetterStart = this.#addValidationContent(
      "small-letters",
      "All small (lowercase) letters and starts with a character"
    );

    this.validateUserName.appendChild(this.validateUserNameTitle);
    this.validateUserName.appendChild(this.validateSmallLetterStart);

    this.validateEmail = document.createElement("div");
    this.validateEmail.setAttribute("class", "email-validation");
    this.validateEmailTitle = this.#addValidationTitle(
      "Email adress must be in a correct format:"
    );
    this.validateEmailSyntax = this.#addValidationContent(
      "email-val",
      "Invalid email"
    );

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
    return this.form;
  }
  #addGenderOptions(name, genderType) {
    this.radioChoice = document.createElement("div");
    this.radioChoice.setAttribute("class", "checkboxes-gender");

    this.genderInput = document.createElement("input");
    this.genderInput.type = "checkbox";
    this.genderInput.name = name;
    this.genderInput.setAttribute("class", "gender");
    this.genderInput.checked = true;

    this.genderLabel = document.createElement("label");
    this.genderLabel.innerHTML = genderType;
    this.genderLabel.setAttribute("class", "gender-label");

    this.radioChoice.appendChild(this.genderInput);
    this.radioChoice.appendChild(this.genderLabel);

    return this.radioChoice;
  }
  #addCountryChoices() {
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
    return this.countries;
  }
  #addValidationTitle(validationTitle) {
    this.validationTitle = document.createElement("h3");
    this.validationTitle.innerHTML = validationTitle;
    return this.validationTitle;
  }
  #addValidationContent(id, content) {
    this.validationContent = document.createElement("p");
    this.validationContent.setAttribute("class", "invalid");
    this.validationContent.id = id;
    this.validationContent.innerHTML = content;
    return this.validationContent;
  }
  userNameValidation() {
    this.message = document.querySelector(".email-validation");
    this.username = document.getElementById("signup-name");
    this.smallLetters = document.getElementById("small-letters");
    this.username.onblur = this.#onBlurUserNameFeild;
    this.username.onfocus = this.#onFocusUserNameFeild;
    this.username.oninput = this.#onKeyUserNameFeild;
  }
  #onFocusUserNameFeild() {
    this.message = document.querySelector(".username-validation");
    this.message.classList.add("onUserValidation");
  }
  #onBlurUserNameFeild() {
    this.message.classList.remove("onUserValidation");
  }
  #onKeyUserNameFeild() {
    this.username = document.getElementById("signup-name");
    this.smallLetters = document.getElementById("small-letters");
    const lowerCaseLetters = /^[a-z][a-z0-9_]+[a-z0-9]$/g;
    if (this.username.value.match(lowerCaseLetters)) {
      this.smallLetters.classList.remove("invalid");
      this.smallLetters.classList.add("valid");
    } else {
      this.smallLetters.classList.add("invalid");
      this.smallLetters.classList.remove("valid");
    }
  }
  emailValidation() {
    this.message = document.querySelector(".email-validation");
    this.email = document.getElementById("signup-email");
    this.emailVal = document.getElementById("email-val");
    this.email.onfocus = this.#onFocusEmailFeild;
    this.email.onblur = this.#onBlurEmailFeild;
    this.email.onkeyup = this.#onKeyupEmailFeild;
  }
  #onFocusEmailFeild() {
    this.message = document.querySelector(".email-validation");
    this.message.classList.add("onEmailValidation");
  }
  #onBlurEmailFeild() {
    this.message.classList.remove("onEmailValidation");
  }
  #onKeyupEmailFeild() {
    this.email = document.getElementById("signup-email");
    this.emailVal = document.getElementById("email-val");
    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (this.email.value.match(validEmail)) {
      this.isValidatedEmail = true;

      this.emailVal.classList.remove("invalid");
      this.emailVal.classList.add("valid");
    } else {
      this.emailVal.classList.add("invalid");
      this.emailVal.classList.remove("valid");
    }
  }
  passwordValidation() {
    this.message = document.querySelector(".outValidation");
    this.password = document.getElementById("signup-password");
    this.confirmPassword = document.getElementById("confirm-password");
    this.letter = document.getElementById("letter");
    this.capital = document.getElementById("capital");
    this.number = document.getElementById("number");
    this.characters = document.getElementById("characters");
    this.password.onfocus = this.#onFocusPasswordFeild;
    this.password.onblur = this.#onBlurPasswordFeild;
    this.password.onkeyup = this.#onKeyUpPasswordFeild;
    this.confirmPassword.onblur = this.#onBlurConfirmPasswordFeild;
  }
  #onFocusPasswordFeild() {
    this.message = document.querySelector(".outValidation");
    this.message.classList.add("onValidation");
  }
  #onBlurPasswordFeild() {
    this.message.classList.remove("onValidation");
  }
  #onKeyUpPasswordFeild() {
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
  #onBlurConfirmPasswordFeild() {
    this.password = document.getElementById("signup-password");
    this.confirmPassword = document.getElementById("confirm-password");
    if (this.password.value != this.confirmPassword.value) {
      this.passwordFailure = document.querySelector(".confirm-failure");
      this.passwordFailure.classList.add("confirm-succ");
    } else {
      this.passwordFailure = document.querySelector(".confirm-failure");
      this.passwordFailure.classList.remove("confirm-succ");
    }
  }
}

class FormsHandler {
  constructor() {
    this.container = document.querySelector(".forms-container");
    this.register = document.querySelector(".register-link");
    this.login = document.querySelector(".login-link");
    this.register.addEventListener("click", this.switchToLogin);
    this.login.addEventListener("click", this.switchToRegister);
    this.addToLocalStorage();
  }
  switchToLogin = () => {
    this.container.classList.add("active");
  };
  switchToRegister = () => {
    this.container.classList.remove("active");
  };
  addToLocalStorage = () => {
    this.form = document.getElementById("register-form-id");
    this.email = document.getElementById("signup-email");
    this.username = document.getElementById("signup-name");
    this.password = document.getElementById("signup-password");
    this.confirmPassword = document.getElementById("confirm-password");
    this.country = document.getElementById("countries");
    this.gender = document.getElementById("gender-choices");
    this.user = {};
    this.form.addEventListener("submit", (e) => {
      this.isValid = document.querySelectorAll(".valid");
      e.preventDefault();
      if (this.isValid.length == 6) {
        this.user = {
          email: this.email.value,
          username: this.username.value,
          password: this.password.value,
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
  };
}

const userInterface = new UserInterface();
const loginForm = new LogInForm();
const registerForm = new RegisterForm();
const formsHandler = new FormsHandler();
