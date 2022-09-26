import Header from "./Header";
import { VALIDATION_TITLE_STRINGS } from './HeaderStrings'

const headerString = VALIDATION_TITLE_STRINGS["REGISTER_FORM"];

const passwordValidationTitle: HTMLElement = new Header(
  headerString["PASSWORD_CHECK"], "validationHeader"
).header;

const userNameValidationTitle: HTMLElement = new Header(
  headerString["USER_NAME_CHECK"], "validationHeader"
).header;

const emailValidationTitle: HTMLElement = new Header(
  headerString["EMAIL_ADDRESS_CHECK"], "validationHeader"
  ).header;

export {
    passwordValidationTitle,
    userNameValidationTitle,
    emailValidationTitle
}
