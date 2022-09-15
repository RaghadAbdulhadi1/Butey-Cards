import Title from '../Atoms/Text/Text.js';
import Form from '../Atoms/Form/Form.js';
import LineBreak from '../Atoms/LineBreak/LineBreak.js';
import Button from '../Atoms/Button/Button.js';
import InputFeild from '../Atoms/InputField/InputField.js';
import Paragraph from '../Atoms/Paragraph/Paragraph.js';
import Container from '../Atoms/Div/Div.js';
import ParagraphLink from '../Atoms/ParagraphLink/ParagraphLink.js';
import Header from '../Atoms/Header/Header.js';
import Span from '../Atoms/Span/Span.js';
import OptionField from '../Atoms/OptionField/OptionField.js';
import RadioField from '../Atoms/RadioField/RadioField.js';
import SelectFeild from '../Atoms/Select/Select.js';
import * as utils from "../../Utilities/utilities.js";

const container = utils.getElementById("container");
const formsContainer = new Container("forms-container").container;
const forms = new Container("forms").container;

// Login Constants
const loginFormContainer = new Form("login-form-id").form;
const loginFormTitle = new Title("title", "Login").text;
const loginLineBreak = new LineBreak().lineBreak;
const loginClickables = new Container("login-button").container;
const loginLink = new Container("register").container;
const logInContainer = new Container("login-form").container;
const validationContainer = new Container("loginValidation").container;
const loginInputFeilds = [
  new InputFeild(
    "email",
    "Enter your email",
    "login-email",
    "fa-regular fa-envelope"
  ).formInput,
  new InputFeild(
    "password",
    "Enter your password",
    "login-password",
    "fa-sharp fa-solid fa-shield-halved"
  ).formInput,
];

const loginSubmitButton = new Button("login", "login-button").button;

const switchToRegisterFormLink = new ParagraphLink(
  "Not a member? ",
  "Register",
  "register-link"
).paragraphLink;

const loginValidationContent = [
  new Paragraph("You have been logged in successfully", "", "success-failure").paragraph,
  new Paragraph("Check your password", "", "password-failure").paragraph,
  new Paragraph("User with this email doesn't exist", "", "user-failure").paragraph,
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
const registerFormContainer = new Form("register-form-id").form;
const registerFormTitle = new Title("title", "Registeration").text;
const registerLineBreak = new LineBreak().lineBreak;
const registerClickables = new Container("register-button").container;
const registerLink = new Container("register").container;
const registerContainer = new Container("register-form").container;
const emailValidationContainer = new Container("email-validation").container;
const confirmPasswordValidationContainer = new Container(
  "confirm-password-validation"
).container;
const emailAlreadyExistsValidationContainer = new Container(
  "email-already-exits-validation"
).container;
const userNameValidationContainer = new Container("username-validation").container;
const passwordValidationContainer = new Container("outValidation").container;

const registerInputFeilds = [
  new InputFeild(
    "email",
    "Enter your email",
    "signup-email",
    "fa-regular fa-envelope"
  ).formInput,
  new InputFeild("text", "Enter your name", "signup-name", "fa-solid fa-user").formInput,
  new InputFeild(
    "password",
    "Create a password",
    "signup-password",
    "fa-sharp fa-solid fa-shield-halved"
  ).formInput,
  new InputFeild(
    "password",
    "Confirm your password",
    "confirm-password",
    "fa-sharp fa-solid fa-shield-halved"
  ).formInput,
];

const registerSelectOptions = [
  new OptionField("Country").option,
  new OptionField("Jordan").option,
  new OptionField("Lebanon").option,
  new OptionField("Syria").option,
  new OptionField("Palestine").option,
  new OptionField("Iraq").option,
];

const registerSelect = new Container("country-choices", "", "countries").container;
const registerSelectFeild = new SelectFeild().select;

const registerRadioFeild = [
  new RadioField("Male", "radio-choice-1").radioFeild,
  new RadioField("Female", "radio-choice-2").radioFeild,
];

const registerCheckbox = new Container("gender-choices").container;

const registerSubmitButton = new Button("register", "register-button").button;

const switchToLoginFormLink = new ParagraphLink(
  "Already registered? ",
  "Login",
  "login-link"
).paragraphLink;

const termsAndConditions = new Span(
  "By Clicking on register, you agree on ",
  "terms and conditions."
).span;

const confirmPasswordValidationContent = new Paragraph(
  "Passwords doesn't match",
  "",
  "confirm-failure"
).paragraph;

const passwordValidationTitle = new Header(
  "Password must contain the following:"
).header;
const smallLetterPasswordValidationContent = new Paragraph(
  "A small (loswercase) letter",
  "letter",
  "invalid"
).paragraph;
const capitalLetterPasswordValidationContent = new Paragraph(
  "A capital (uppercase) letter",
  "capital",
  "invalid"
).paragraph;
const numbersLetterPasswordValidationContent = new Paragraph(
  "A number",
  "number",
  "invalid"
).paragraph;
const charactersLetterPasswordValidationContent = new Paragraph(
  "A symbol",
  "characters",
  "invalid"
).paragraph;

const passwordValidationParagraphs = [
  passwordValidationTitle,
  smallLetterPasswordValidationContent,
  capitalLetterPasswordValidationContent,
  numbersLetterPasswordValidationContent,
  charactersLetterPasswordValidationContent,
];

const userNameValidationTitle = new Header(
  "Username must contain the following:"
).header;
const userNameValidationContent = new Paragraph(
  "All small (lowercase) letters and starts with a character",
  "small-letters",
  "invalid"
).paragraph;

const emailValidationTitle = new Header(
  "Email must be in the correct format"
).header;
const emailValidationContent = new Paragraph(
  "Valid email",
  "email-val",
  "invalid"
).paragraph;

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

// Regex
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const usernameRegex = /^[a-z][a-z0-9_]+[a-z0-9]$/g;
const smallLetterPasswordRegex = /[a-z]/g;
const capitalLetterPasswordRegex = /[A-Z]/g;
const numbersLetterPasswordRegex = /[0-9]/g;
const charactersLetterPasswordRegex = /\W/g;

export {
  emailRegex,
  usernameRegex,
  smallLetterPasswordRegex,
  capitalLetterPasswordRegex,
  numbersLetterPasswordRegex,
  charactersLetterPasswordRegex,
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
  registerFormContainer,
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
  switchToLoginFormLink,
};
