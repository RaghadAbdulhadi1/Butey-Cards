const container = document.getElementById("container");
const formsContainer = addContainer("forms-container");
const forms = addContainer("forms");

// Login Constants
const loginFormContainer = addForm("login-form-id");
const loginFormTitle = addContainer("title", "Login");
const loginLineBreak = addLineBreak();
const loginClickables = addContainer("login-button");
const loginLink = addContainer("register");
const logInContainer = addContainer("login-form");
const validationContainer = addContainer("loginValidation");
const loginInputFeilds = [
  addFormInput(
    "email",
    "Enter your email",
    "login-email",
    "fa-regular fa-envelope"
  ),
  addFormInput(
    "password",
    "Enter your password",
    "login-password",
    "fa-sharp fa-solid fa-shield-halved"
  ),
];

const loginSubmitButton = addButton("login", "login-button");

const switchToRegisterFormLink = addParagraphLink(
  "Not a member? ",
  "Register",
  "register-link"
);

const loginValidationContent = [
  addParagraph("You have been logged in successfully", "", "success-failure"),
  addParagraph("Check your password", "", "password-failure"),
  addParagraph("User with this email doesn't exist", "", "user-failure"),
];

// Register Constants
const registerFormContainer = addForm("register-form-id");
const registerFormTitle = addContainer("title", "Registeration");
const registerLineBreak = addLineBreak();
const registerClickables = addContainer("register-button");
const registerLink = addContainer("register");
const registerContainer = addContainer("register-form");
const emailValidationContainer = addContainer("email-validation");
const confirmPasswordValidationContainer = addContainer(
  "confirm-password-validation"
);
const emailAlreadyExistsValidationContainer = addContainer(
  "email-already-exits-validation"
);
const userNameValidationContainer = addContainer("username-validation");
const passwordValidationContainer = addContainer("outValidation");

const registerInputFeilds = [
  addFormInput(
    "email",
    "Enter your email",
    "signup-email",
    "fa-regular fa-envelope"
  ),
  addFormInput("text", "Enter your name", "signup-name", "fa-solid fa-user"),
  addFormInput(
    "password",
    "Create a password",
    "signup-password",
    "fa-sharp fa-solid fa-shield-halved"
  ),
  addFormInput(
    "password",
    "Confirm your password",
    "confirm-password",
    "fa-sharp fa-solid fa-shield-halved"
  ),
];

const registerSelectOptions = [
  addOptions("Country"),
  addOptions("Jordan"),
  addOptions("Lebanon"),
  addOptions("Syria"),
  addOptions("Palestine"),
  addOptions("Iraq"),
];

const registerSelect = addContainer("country-choices", "", "countries");
const registerSelectFeild = addSelectField();

const registerRadioFeild = [
  addRadioChoice("Male", "radio-choice-1"),
  addRadioChoice("Female", "radio-choice-2"),
];

const registerCheckbox = addContainer("gender-choices");

const registerSubmitButton = addButton("register", "register-button");

const switchToLoginFormLink = addParagraphLink(
  "Already registered? ",
  "Login",
  "login-link"
);

const termsAndConditions = addSpanLink(
  "By Clicking on register, you agree on ",
  "terms and conditions."
);

const confirmPasswordValidationContent = addParagraph(
  "Passwords doesn't match",
  "",
  "confirm-failure"
);

const passwordValidationTitle = addHeaderThree(
  "Password must contain the following:"
);
const smallLetterPasswordValidationContent = addParagraph(
  "A small (loswercase) letter",
  "letter",
  "invalid"
);
const capitalLetterPasswordValidationContent = addParagraph(
  "A capital (uppercase) letter",
  "capital",
  "invalid"
);
const numbersLetterPasswordValidationContent = addParagraph(
  "A number",
  "number",
  "invalid"
);
const charactersLetterPasswordValidationContent = addParagraph(
  "A symbol",
  "characters",
  "invalid"
);

const passwordValidationParagraphs = [
  passwordValidationTitle,
  smallLetterPasswordValidationContent,
  capitalLetterPasswordValidationContent,
  numbersLetterPasswordValidationContent,
  charactersLetterPasswordValidationContent,
];

const userNameValidationTitle = addHeaderThree(
  "Username must contain the following:"
);
const userNameValidationContent = addParagraph(
  "All small (lowercase) letters and starts with a character",
  "small-letters",
  "invalid"
);

const emailValidationTitle = addHeaderThree(
  "Email must be in the correct format"
);
const emailValidationContent = addParagraph(
  "Valid email",
  "email-val",
  "invalid"
);

const emailValidationParagraphs = [
  emailValidationTitle,
  emailValidationContent,
];
