import Header from "./Header.js";
import { VALIDATION_TITLE_STRINGS } from './HeaderStrings.js';
const headerString = VALIDATION_TITLE_STRINGS["REGISTER_FORM"];
const passwordValidationTitle = new Header(headerString["PASSWORD_CHECK"], "validationHeader").header;
const userNameValidationTitle = new Header(headerString["USER_NAME_CHECK"], "validationHeader").header;
const emailValidationTitle = new Header(headerString["EMAIL_ADDRESS_CHECK"], "validationHeader").header;
export { passwordValidationTitle, userNameValidationTitle, emailValidationTitle };
