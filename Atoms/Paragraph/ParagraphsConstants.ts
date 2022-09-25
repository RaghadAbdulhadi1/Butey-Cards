import Paragraph from "./Paragraph";
import { APP_CONSTANTS } from '../../CONSTANT/apptext'

const loginValidationContent: HTMLElement[] = [
  new Paragraph(APP_CONSTANTS["ATOMS"]["VALIDATION_CONTENT"]["LOGIN_FORM"]["LOGGED_IN_SUCCESS"], "", "success-failure")
    .paragraph,
  new Paragraph(APP_CONSTANTS["ATOMS"]["VALIDATION_CONTENT"]["LOGIN_FORM"]["PASSWORD_CHECK"], "", "password-failure").paragraph,
  new Paragraph(APP_CONSTANTS["ATOMS"]["VALIDATION_CONTENT"]["LOGIN_FORM"]["EMAIL_ADDRESS_CHECK"], "", "user-failure")
    .paragraph,
];

const smallLetterPasswordValidationContent: HTMLElement = new Paragraph(
  APP_CONSTANTS["ATOMS"]["VALIDATION_CONTENT"]["REGISTER_FORM"]["PASSWORD_CHECK"]["SMALL_LETTER_CHECK"],
  "letter",
  "invalid"
).paragraph;
const capitalLetterPasswordValidationContent: HTMLElement = new Paragraph(
  APP_CONSTANTS["ATOMS"]["VALIDATION_CONTENT"]["REGISTER_FORM"]["PASSWORD_CHECK"]["CAPITAL_LETTER_CHECK"],
  "capital",
  "invalid"
).paragraph;
const numbersLetterPasswordValidationContent: HTMLElement = new Paragraph(
  APP_CONSTANTS["ATOMS"]["VALIDATION_CONTENT"]["REGISTER_FORM"]["PASSWORD_CHECK"]["NUMBERS_CHECK"],
  "number",
  "invalid"
).paragraph;
const charactersLetterPasswordValidationContent: HTMLElement = new Paragraph(
  APP_CONSTANTS["ATOMS"]["VALIDATION_CONTENT"]["REGISTER_FORM"]["PASSWORD_CHECK"]["CHARCHTERS_CHECK"],
  "characters",
  "invalid"
).paragraph;

const confirmPasswordValidationContent : HTMLElement= new Paragraph(
  "Passwords doesn't match",
  "",
  "confirm-failure"
).paragraph;

const userNameValidationContent: HTMLElement = new Paragraph(
  APP_CONSTANTS["ATOMS"]["VALIDATION_CONTENT"]["REGISTER_FORM"]["USER_NAME_CHECK"],
  "small-letters",
  "invalid"
).paragraph;

const emailValidationContent: HTMLElement = new Paragraph(
  APP_CONSTANTS["ATOMS"]["VALIDATION_CONTENT"]["REGISTER_FORM"]["EMAIL_ADDRESS_CHECK"],
  "email-val",
  "invalid"
).paragraph;

export {
  loginValidationContent,
  smallLetterPasswordValidationContent,
  capitalLetterPasswordValidationContent,
  numbersLetterPasswordValidationContent,
  charactersLetterPasswordValidationContent,
  confirmPasswordValidationContent,
  userNameValidationContent,
  emailValidationContent,
};
