import Container from "./Div.js";
import { getElementById } from "../../Utilities/utilities.js";
import { loginEmailFeild, loginPasswordFeild, } from "../Input/InputConstants.js";
import { registerEmailFeild, registerPasswordFeild, registerConfirmPasswordFeild, registerUserNameFeild, } from "../Input/InputConstants.js";
import { registerUserNameIcon, registerPasswordIcon, registerEmailIcon, registerConfirmPasswordIcon, loginPasswordIcon, loginEmailIcon, } from "../Icon/IconConstants.js";
const container = getElementById("container");
const formsContainer = new Container("forms-container")
    .container;
const forms = new Container("forms").container;
const loginClickables = new Container("login-button")
    .container;
const loginLink = new Container("register").container;
const logInContainer = new Container("login-form").container;
const validationContainer = new Container("loginValidation")
    .container;
const registerClickables = new Container("register-button")
    .container;
const registerLink = new Container("register").container;
const registerContainer = new Container("register-form")
    .container;
const emailValidationContainer = new Container("email-validation").container;
const confirmPasswordValidationContainer = new Container("confirm-password-validation").container;
const emailAlreadyExistsValidationContainer = new Container("email-already-exits-validation").container;
const userNameValidationContainer = new Container("username-validation").container;
const passwordValidationContainer = new Container("outValidation").container;
const registerSelect = new Container("country-choices", "", "countries").container;
const registerCheckbox = new Container("gender-choices")
    .container;
const loginEmailFeildCont = new Container("input-feild")
    .container;
loginEmailFeildCont.append(loginEmailFeild, loginEmailIcon);
const loginPassswordFeildCont = new Container("input-feild")
    .container;
loginPassswordFeildCont.append(loginPasswordFeild, loginPasswordIcon);
const loginInputFeilds = [
    loginEmailFeildCont,
    loginPassswordFeildCont
];
const registerPassswordFeildCont = new Container("input-feild").container;
registerPassswordFeildCont.append(registerPasswordFeild, registerPasswordIcon);
const registerConfirmPassswordFeildCont = new Container("input-feild").container;
registerConfirmPassswordFeildCont.append(registerConfirmPasswordFeild, registerConfirmPasswordIcon);
const registerEmailFeildCont = new Container("input-feild").container;
registerEmailFeildCont.append(registerEmailFeild, registerEmailIcon);
const registerUserNameFeildCont = new Container("input-feild").container;
registerUserNameFeildCont.append(registerUserNameFeild, registerUserNameIcon);
const registerInputFeilds = [
    registerEmailFeildCont,
    registerUserNameFeildCont,
    registerPassswordFeildCont,
    registerConfirmPassswordFeildCont
];
export { registerInputFeilds, loginInputFeilds, container, formsContainer, forms, loginClickables, loginLink, logInContainer, validationContainer, registerClickables, registerLink, registerContainer, emailValidationContainer, confirmPasswordValidationContainer, emailAlreadyExistsValidationContainer, userNameValidationContainer, passwordValidationContainer, registerSelect, registerCheckbox, };
