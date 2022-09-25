"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailValidationContent = exports.userNameValidationContent = exports.confirmPasswordValidationContent = exports.charactersLetterPasswordValidationContent = exports.numbersLetterPasswordValidationContent = exports.capitalLetterPasswordValidationContent = exports.smallLetterPasswordValidationContent = exports.loginValidationContent = void 0;
const Paragraph_1 = __importDefault(require("./Paragraph"));
const apptext_1 = require("../../STRINGS/apptext");
const loginValidationContent = [
    new Paragraph_1.default(apptext_1.APP_CONSTANTS["ATOMS"]["VALIDATION_CONTENT"]["LOGIN_FORM"]["LOGGED_IN_SUCCESS"], "", "success-failure")
        .paragraph,
    new Paragraph_1.default(apptext_1.APP_CONSTANTS["ATOMS"]["VALIDATION_CONTENT"]["LOGIN_FORM"]["PASSWORD_CHECK"], "", "password-failure").paragraph,
    new Paragraph_1.default(apptext_1.APP_CONSTANTS["ATOMS"]["VALIDATION_CONTENT"]["LOGIN_FORM"]["EMAIL_ADDRESS_CHECK"], "", "user-failure")
        .paragraph,
];
exports.loginValidationContent = loginValidationContent;
const smallLetterPasswordValidationContent = new Paragraph_1.default(apptext_1.APP_CONSTANTS["ATOMS"]["VALIDATION_CONTENT"]["REGISTER_FORM"]["PASSWORD_CHECK"]["SMALL_LETTER_CHECK"], "letter", "invalid").paragraph;
exports.smallLetterPasswordValidationContent = smallLetterPasswordValidationContent;
const capitalLetterPasswordValidationContent = new Paragraph_1.default(apptext_1.APP_CONSTANTS["ATOMS"]["VALIDATION_CONTENT"]["REGISTER_FORM"]["PASSWORD_CHECK"]["CAPITAL_LETTER_CHECK"], "capital", "invalid").paragraph;
exports.capitalLetterPasswordValidationContent = capitalLetterPasswordValidationContent;
const numbersLetterPasswordValidationContent = new Paragraph_1.default(apptext_1.APP_CONSTANTS["ATOMS"]["VALIDATION_CONTENT"]["REGISTER_FORM"]["PASSWORD_CHECK"]["NUMBERS_CHECK"], "number", "invalid").paragraph;
exports.numbersLetterPasswordValidationContent = numbersLetterPasswordValidationContent;
const charactersLetterPasswordValidationContent = new Paragraph_1.default(apptext_1.APP_CONSTANTS["ATOMS"]["VALIDATION_CONTENT"]["REGISTER_FORM"]["PASSWORD_CHECK"]["CHARCHTERS_CHECK"], "characters", "invalid").paragraph;
exports.charactersLetterPasswordValidationContent = charactersLetterPasswordValidationContent;
const confirmPasswordValidationContent = new Paragraph_1.default("Passwords doesn't match", "", "confirm-failure").paragraph;
exports.confirmPasswordValidationContent = confirmPasswordValidationContent;
const userNameValidationContent = new Paragraph_1.default(apptext_1.APP_CONSTANTS["ATOMS"]["VALIDATION_CONTENT"]["REGISTER_FORM"]["USER_NAME_CHECK"], "small-letters", "invalid").paragraph;
exports.userNameValidationContent = userNameValidationContent;
const emailValidationContent = new Paragraph_1.default(apptext_1.APP_CONSTANTS["ATOMS"]["VALIDATION_CONTENT"]["REGISTER_FORM"]["EMAIL_ADDRESS_CHECK"], "email-val", "invalid").paragraph;
exports.emailValidationContent = emailValidationContent;
//# sourceMappingURL=ParagraphsConstants.js.map