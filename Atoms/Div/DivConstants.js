import Container from "./Div.js";
import * as utils from "../../Utilities/utilities.js";

const container = utils.getElementById("container");
const formsContainer = new Container("forms-container").container;
const forms = new Container("forms").container;

const loginClickables = new Container("login-button").container;
const loginLink = new Container("register").container;
const logInContainer = new Container("login-form").container;
const validationContainer = new Container("loginValidation").container;

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
const userNameValidationContainer = new Container("username-validation")
  .container;
const passwordValidationContainer = new Container("outValidation").container;

const registerSelect = new Container("country-choices", "", "countries")
  .container;
const registerCheckbox = new Container("gender-choices").container;

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
