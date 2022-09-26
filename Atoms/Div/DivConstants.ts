import Container from "./Div";
import { getElementById } from "../../Utilities/utilities";
import {
  loginEmailFeild,
  loginPasswordFeild,
} from "../../Atoms/Input/InputConstants";
import {
  registerEmailFeild,
  registerPasswordFeild,
  registerConfirmPasswordFeild,
  registerUserNameFeild,
} from "../../Atoms/Input/InputConstants";
import {
  registerUserNameIcon,
  registerPasswordIcon,
  registerEmailIcon,
  registerConfirmPasswordIcon,
  loginPasswordIcon,
  loginEmailIcon,
} from "../../Atoms/Icon/IconConstants";

type ElementContainer = HTMLDivElement;

const container = getElementById("container") as HTMLElement;
const formsContainer: ElementContainer = new Container("forms-container")
  .container;
const forms: ElementContainer = new Container("forms").container;

const loginClickables: ElementContainer = new Container("login-button")
  .container;
const loginLink: ElementContainer = new Container("register").container;
const logInContainer: ElementContainer = new Container("login-form").container;
const validationContainer: ElementContainer = new Container("loginValidation")
  .container;

const registerClickables: ElementContainer = new Container("register-button")
  .container;
const registerLink: ElementContainer = new Container("register").container;
const registerContainer: ElementContainer = new Container("register-form")
  .container;
const emailValidationContainer: ElementContainer = new Container(
  "email-validation"
).container;
const confirmPasswordValidationContainer: ElementContainer = new Container(
  "confirm-password-validation"
).container;
const emailAlreadyExistsValidationContainer: ElementContainer = new Container(
  "email-already-exits-validation"
).container;
const userNameValidationContainer: ElementContainer = new Container(
  "username-validation"
).container;
const passwordValidationContainer: ElementContainer = new Container(
  "outValidation"
).container;

const registerSelect: ElementContainer = new Container(
  "country-choices",
  "",
  "countries"
).container;
const registerCheckbox: ElementContainer = new Container("gender-choices")
  .container;

const loginEmailFeildCont: ElementContainer = new Container("input-feild")
  .container;

loginEmailFeildCont.append(loginEmailFeild, loginEmailIcon);

const loginPassswordFeildCont: ElementContainer = new Container("input-feild")
  .container;

loginPassswordFeildCont.append(loginPasswordFeild, loginPasswordIcon);

const loginInputFeilds: HTMLElement[] = [
  loginEmailFeildCont,
  loginPassswordFeildCont
]

const registerPassswordFeildCont: ElementContainer = new Container(
  "input-feild"
).container;

registerPassswordFeildCont.append(registerPasswordFeild, registerPasswordIcon);

const registerConfirmPassswordFeildCont: ElementContainer = new Container(
  "input-feild"
).container;

registerConfirmPassswordFeildCont.append(
  registerConfirmPasswordFeild,
  registerConfirmPasswordIcon
);

const registerEmailFeildCont: ElementContainer = new Container(
  "input-feild"
).container;

registerEmailFeildCont.append(registerEmailFeild, registerEmailIcon);

const registerUserNameFeildCont: ElementContainer = new Container(
  "input-feild"
).container;

registerUserNameFeildCont.append(registerUserNameFeild, registerUserNameIcon);

const registerInputFeilds: HTMLElement[] = [
  registerEmailFeildCont,
  registerUserNameFeildCont,
  registerPassswordFeildCont,
  registerConfirmPassswordFeildCont
]

export {
  registerInputFeilds,
  loginInputFeilds,
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
