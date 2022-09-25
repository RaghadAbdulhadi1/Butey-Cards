"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCheckbox = exports.registerSelect = exports.passwordValidationContainer = exports.userNameValidationContainer = exports.emailAlreadyExistsValidationContainer = exports.confirmPasswordValidationContainer = exports.emailValidationContainer = exports.registerContainer = exports.registerLink = exports.registerClickables = exports.validationContainer = exports.logInContainer = exports.loginLink = exports.loginClickables = exports.forms = exports.formsContainer = exports.container = void 0;
const Div_1 = __importDefault(require("./Div"));
const utilities_1 = require("../../Utilities/utilities");
const container = (0, utilities_1.getElementById)("container");
exports.container = container;
const formsContainer = new Div_1.default("forms-container").container;
exports.formsContainer = formsContainer;
const forms = new Div_1.default("forms").container;
exports.forms = forms;
const loginClickables = new Div_1.default("login-button").container;
exports.loginClickables = loginClickables;
const loginLink = new Div_1.default("register").container;
exports.loginLink = loginLink;
const logInContainer = new Div_1.default("login-form").container;
exports.logInContainer = logInContainer;
const validationContainer = new Div_1.default("loginValidation").container;
exports.validationContainer = validationContainer;
const registerClickables = new Div_1.default("register-button").container;
exports.registerClickables = registerClickables;
const registerLink = new Div_1.default("register").container;
exports.registerLink = registerLink;
const registerContainer = new Div_1.default("register-form").container;
exports.registerContainer = registerContainer;
const emailValidationContainer = new Div_1.default("email-validation").container;
exports.emailValidationContainer = emailValidationContainer;
const confirmPasswordValidationContainer = new Div_1.default("confirm-password-validation").container;
exports.confirmPasswordValidationContainer = confirmPasswordValidationContainer;
const emailAlreadyExistsValidationContainer = new Div_1.default("email-already-exits-validation").container;
exports.emailAlreadyExistsValidationContainer = emailAlreadyExistsValidationContainer;
const userNameValidationContainer = new Div_1.default("username-validation")
    .container;
exports.userNameValidationContainer = userNameValidationContainer;
const passwordValidationContainer = new Div_1.default("outValidation").container;
exports.passwordValidationContainer = passwordValidationContainer;
const registerSelect = new Div_1.default("country-choices", "", "countries")
    .container;
exports.registerSelect = registerSelect;
const registerCheckbox = new Div_1.default("gender-choices").container;
exports.registerCheckbox = registerCheckbox;
//# sourceMappingURL=DivConstants.js.map