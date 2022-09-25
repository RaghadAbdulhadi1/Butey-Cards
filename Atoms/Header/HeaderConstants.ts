import Header from "./Header";
import { APP_CONSTANTS } from '../../CONSTANT/apptext'

const passwordValidationTitle: HTMLElement = new Header(
  APP_CONSTANTS["ATOMS"]["VALIDATION_TITLE"]["REGISTER_FORM"]["PASSWORD_CHECK"], "validationHeader"
).header;

const userNameValidationTitle: HTMLElement = new Header(
  APP_CONSTANTS["ATOMS"]["VALIDATION_TITLE"]["REGISTER_FORM"]["USER_NAME_CHECK"], "validationHeader"
).header;

const emailValidationTitle: HTMLElement = new Header(
  APP_CONSTANTS["ATOMS"]["VALIDATION_TITLE"]["REGISTER_FORM"]["EMAIL_ADDRESS_CHECK"], "validationHeader"
  ).header;

export {
    passwordValidationTitle,
    userNameValidationTitle,
    emailValidationTitle
}
