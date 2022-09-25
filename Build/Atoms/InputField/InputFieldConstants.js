import InputFeild from "./InputField.js";
import { APP_CONSTANTS } from '../../STRINGS/apptext.js';
const loginInputFeilds = [
    new InputFeild("email", APP_CONSTANTS["ATOMS"]["INPUT_FEILD"]["LOGIN_INPUT_FEILDS"]["EMAIL"], "login-email", "fa-regular fa-envelope").formInput,
    new InputFeild("password", APP_CONSTANTS["ATOMS"]["INPUT_FEILD"]["LOGIN_INPUT_FEILDS"]["PASSWORD"], "login-password", "fa-sharp fa-solid fa-shield-halved").formInput
];
const registerInputFeilds = [
    new InputFeild("email", APP_CONSTANTS["ATOMS"]["INPUT_FEILD"]["REGISTER_INPUT_FEILDS"]["EMAIL"], "signup-email", "fa-regular fa-envelope").formInput,
    new InputFeild("text", APP_CONSTANTS["ATOMS"]["INPUT_FEILD"]["REGISTER_INPUT_FEILDS"]["USER_NAME"], "signup-name", "fa-solid fa-user")
        .formInput,
    new InputFeild("password", APP_CONSTANTS["ATOMS"]["INPUT_FEILD"]["REGISTER_INPUT_FEILDS"]["PASSWORD"], "signup-password", "fa-sharp fa-solid fa-shield-halved").formInput,
    new InputFeild("password", APP_CONSTANTS["ATOMS"]["INPUT_FEILD"]["REGISTER_INPUT_FEILDS"]["CONFIRM_PASSWORD"], "confirm-password", "fa-sharp fa-solid fa-shield-halved").formInput,
];
export { loginInputFeilds, registerInputFeilds };
