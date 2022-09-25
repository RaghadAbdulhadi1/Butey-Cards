import Header from "./Header.js";
import { APP_CONSTANTS } from '../../CONSTANT/apptext.js';
const passwordValidationTitle = new Header(APP_CONSTANTS["ATOMS"]["VALIDATION_TITLE"]["REGISTER_FORM"]["PASSWORD_CHECK"], "validationHeader").header;
const userNameValidationTitle = new Header(APP_CONSTANTS["ATOMS"]["VALIDATION_TITLE"]["REGISTER_FORM"]["USER_NAME_CHECK"], "validationHeader").header;
const emailValidationTitle = new Header(APP_CONSTANTS["ATOMS"]["VALIDATION_TITLE"]["REGISTER_FORM"]["EMAIL_ADDRESS_CHECK"], "validationHeader").header;
export { passwordValidationTitle, userNameValidationTitle, emailValidationTitle };
