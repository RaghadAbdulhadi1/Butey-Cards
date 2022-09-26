import Paragraph from "./Paragraph.js";
import { VALIDATION_CONTENT } from './ParagraphStrings.js';
const loginValidationContentStrings = VALIDATION_CONTENT["LOGIN_FORM"];
const loginValidationContent = [
    new Paragraph(loginValidationContentStrings["LOGGED_IN_SUCCESS"], "", "success-failure")
        .paragraph,
    new Paragraph(loginValidationContentStrings["PASSWORD_CHECK"], "", "password-failure").paragraph,
    new Paragraph(loginValidationContentStrings["EMAIL_ADDRESS_CHECK"], "", "user-failure")
        .paragraph,
];
const registerValidationContentStrings = VALIDATION_CONTENT["REGISTER_FORM"];
const smallLetterPasswordValidationContent = new Paragraph(registerValidationContentStrings["PASSWORD_CHECK"]["SMALL_LETTER_CHECK"], "letter", "invalid").paragraph;
const capitalLetterPasswordValidationContent = new Paragraph(registerValidationContentStrings["PASSWORD_CHECK"]["CAPITAL_LETTER_CHECK"], "capital", "invalid").paragraph;
const numbersLetterPasswordValidationContent = new Paragraph(registerValidationContentStrings["PASSWORD_CHECK"]["NUMBERS_CHECK"], "number", "invalid").paragraph;
const charactersLetterPasswordValidationContent = new Paragraph(registerValidationContentStrings["PASSWORD_CHECK"]["CHARCHTERS_CHECK"], "characters", "invalid").paragraph;
const confirmPasswordValidationContent = new Paragraph("Passwords doesn't match", "", "confirm-failure").paragraph;
const userNameValidationContent = new Paragraph(registerValidationContentStrings["USER_NAME_CHECK"], "small-letters", "invalid").paragraph;
const emailValidationContent = new Paragraph(registerValidationContentStrings["EMAIL_ADDRESS_CHECK"], "email-val", "invalid").paragraph;
export { loginValidationContent, smallLetterPasswordValidationContent, capitalLetterPasswordValidationContent, numbersLetterPasswordValidationContent, charactersLetterPasswordValidationContent, confirmPasswordValidationContent, userNameValidationContent, emailValidationContent, };
