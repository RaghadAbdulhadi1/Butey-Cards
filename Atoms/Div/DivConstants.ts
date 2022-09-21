import Container from "./Div.js";
import * as utils from "../../Utilities/utilities.js";

type ElementContainer = HTMLDivElement;

const container = utils.getElementById("container") as HTMLDivElement;
const formsContainer: ElementContainer = new Container("forms-container").container;
const forms:ElementContainer = new Container("forms").container;

const loginClickables: ElementContainer = new Container("login-button").container;
const loginLink: ElementContainer = new Container("register").container;
const logInContainer: ElementContainer = new Container("login-form").container;
const validationContainer: ElementContainer = new Container("loginValidation").container;

const registerClickables: ElementContainer = new Container("register-button").container;
const registerLink: ElementContainer = new Container("register").container;
const registerContainer: ElementContainer = new Container("register-form").container;
const emailValidationContainer: ElementContainer = new Container("email-validation").container;
const confirmPasswordValidationContainer: ElementContainer = new Container(
  "confirm-password-validation"
).container;
const emailAlreadyExistsValidationContainer: ElementContainer = new Container(
  "email-already-exits-validation"
).container;
const userNameValidationContainer: ElementContainer = new Container("username-validation")
  .container;
const passwordValidationContainer:ElementContainer = new Container("outValidation").container;

const registerSelect: ElementContainer = new Container("country-choices", "", "countries")
  .container;
const registerCheckbox: ElementContainer = new Container("gender-choices").container;

export {
  container,
  formsContainer,
  forms,
  loginClickables,
  loginLink,
  logInContainer,
  validationContainer,
  registerClickables,
  registerLink,
  registerContainer,
  emailValidationContainer,
  confirmPasswordValidationContainer,
  emailAlreadyExistsValidationContainer,
  userNameValidationContainer,
  passwordValidationContainer,
  registerSelect,
  registerCheckbox,
};
