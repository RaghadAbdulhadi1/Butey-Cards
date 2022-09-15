import Title from '../atoms/text/text.js';
import Form from '../atoms/form/form.js';
import LineBreak from '../atoms/line-break/lineBreak.js';
import Button from '../atoms/button/button.js';
import InputFeild from '../atoms/input-field/inputField.js';
import Paragraph from '../atoms/paragraph/paragraph.js';
import Container from '../atoms/div/div.js';
import ParagraphLink from '../atoms/paragraph-link/paragraphLink.js';
import HeaderThree from '../atoms/header-three/headerThree.js';
import Span from '../atoms/span/span.js';
import OptionField from '../atoms/option-field/optionField.js';
import RadioField from '../atoms/radio-field/radioField.js';
import SelectFeild from '../atoms/select/select.js';
import * as utils from "../../utilities/utilities.js";

const container = utils.getElementById("container");
const formsContainer = new Container("forms-container");
const forms = new Container("forms");

// Login Constants
const loginFormContainer = new Form("login-form-id");
const loginFormTitle = new Title("title", "Login");
const loginLineBreak = new LineBreak();
const loginClickables = new Container("login-button");
const loginLink = new Container("register");
const logInContainer = new Container("login-form");
const validationContainer = new Container("loginValidation");
const loginInputFeilds = [
  new InputFeild(
    "email",
    "Enter your email",
    "login-email",
    "fa-regular fa-envelope"
  ),
  new InputFeild(
    "password",
    "Enter your password",
    "login-password",
    "fa-sharp fa-solid fa-shield-halved"
  ),
];

const loginSubmitButton = new Button("login", "login-button");

const switchToRegisterFormLink = new ParagraphLink(
  "Not a member? ",
  "Register",
  "register-link"
);

const loginValidationContent = [
  new Paragraph("You have been logged in successfully", "", "success-failure"),
  new Paragraph("Check your password", "", "password-failure"),
  new Paragraph("User with this email doesn't exist", "", "user-failure"),
];

const loginParameters = {
  container: logInContainer,
  formTitle: loginFormTitle,
  formLineBreak: loginLineBreak,
  formInputFeilds: loginInputFeilds,
  formContainer: loginFormContainer,
  formClickables: loginClickables,
  formSubmitButton: loginSubmitButton,
  formLink: loginLink,
  switchLink: switchToRegisterFormLink,
};

// Register Constants
const registerFormContainer = new Form("register-form-id");
const registerFormTitle = new Container("title", "Registeration");
const registerLineBreak = new LineBreak();
const registerClickables = new Container("register-button");
const registerLink = new Container("register");
const registerContainer = new Container("register-form");
const emailValidationContainer = new Container("email-validation");
const confirmPasswordValidationContainer = new Container(
  "confirm-password-validation"
);
const emailAlreadyExistsValidationContainer = new Container(
  "email-already-exits-validation"
);
const userNameValidationContainer = new Container("username-validation");
const passwordValidationContainer = new Container("outValidation");

const registerInputFeilds = [
  new InputFeild(
    "email",
    "Enter your email",
    "signup-email",
    "fa-regular fa-envelope"
  ),
  new InputFeild("text", "Enter your name", "signup-name", "fa-solid fa-user"),
  new InputFeild(
    "password",
    "Create a password",
    "signup-password",
    "fa-sharp fa-solid fa-shield-halved"
  ),
  new InputFeild(
    "password",
    "Confirm your password",
    "confirm-password",
    "fa-sharp fa-solid fa-shield-halved"
  ),
];

const registerSelectOptions = [
  new OptionField("Country"),
  new OptionField("Jordan"),
  new OptionField("Lebanon"),
  new OptionField("Syria"),
  new OptionField("Palestine"),
  new OptionField("Iraq"),
];

const registerSelect = new Container("country-choices", "", "countries");
const registerSelectFeild = new SelectFeild();

const registerRadioFeild = [
  new RadioField("Male", "radio-choice-1"),
  new RadioField("Female", "radio-choice-2"),
];

const registerCheckbox = new Container("gender-choices");

const registerSubmitButton = new Button("register", "register-button");

const switchToLoginFormLink = new ParagraphLink(
  "Already registered? ",
  "Login",
  "login-link"
);

const termsAndConditions = new Span(
  "By Clicking on register, you agree on ",
  "terms and conditions."
);

const confirmPasswordValidationContent = new Paragraph(
  "Passwords doesn't match",
  "",
  "confirm-failure"
);

const passwordValidationTitle = new HeaderThree(
  "Password must contain the following:"
);
const smallLetterPasswordValidationContent = new Paragraph(
  "A small (loswercase) letter",
  "letter",
  "invalid"
);
const capitalLetterPasswordValidationContent = new Paragraph(
  "A capital (uppercase) letter",
  "capital",
  "invalid"
);
const numbersLetterPasswordValidationContent = new Paragraph(
  "A number",
  "number",
  "invalid"
);
const charactersLetterPasswordValidationContent = new Paragraph(
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

const userNameValidationTitle = new HeaderThree(
  "Username must contain the following:"
);
const userNameValidationContent = new Paragraph(
  "All small (lowercase) letters and starts with a character",
  "small-letters",
  "invalid"
);

const emailValidationTitle = new HeaderThree(
  "Email must be in the correct format"
);
const emailValidationContent = new Paragraph(
  "Valid email",
  "email-val",
  "invalid"
);

const emailValidationParagraphs = [
  emailValidationTitle,
  emailValidationContent,
];


const registerParameters = {
  container: registerContainer,
  formTitle: registerFormTitle,
  formLineBreak: registerLineBreak,
  formInputFeilds: registerInputFeilds,
  formContainer: registerFormContainer,
  formClickables: registerClickables,
  formSubmitButton: registerSubmitButton,
  formLink: registerLink,
  switchLink: switchToLoginFormLink,
}

export {
  container,
  formsContainer,
  forms,
  // login Constants
  loginInputFeilds,
  switchToRegisterFormLink,
  loginValidationContent,
  validationContainer,
  logInContainer,
  loginParameters,
  // Register Constants
  registerContainer,
  emailValidationContainer,
  confirmPasswordValidationContainer,
  emailAlreadyExistsValidationContainer,
  userNameValidationContainer,
  passwordValidationContainer,
  registerInputFeilds,
  registerSelectOptions,
  registerSelect,
  registerSelectFeild,
  registerRadioFeild,
  registerCheckbox,
  termsAndConditions,
  confirmPasswordValidationContent,
  passwordValidationParagraphs,
  userNameValidationTitle,
  userNameValidationContent,
  emailValidationParagraphs,
  registerParameters,
  switchToLoginFormLink
};
