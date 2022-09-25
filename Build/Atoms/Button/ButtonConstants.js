import Button from './Button.js';
import { APP_CONSTANTS } from '../../STRINGS/apptext.js';
const loginSubmitButton = new Button(APP_CONSTANTS["ATOMS"]["BUTTON"]["LOGIN_BUTTON"]).button;
const registerSubmitButton = new Button(APP_CONSTANTS["ATOMS"]["BUTTON"]["REGISTER_BUTTON"]).button;
export { loginSubmitButton, registerSubmitButton };
