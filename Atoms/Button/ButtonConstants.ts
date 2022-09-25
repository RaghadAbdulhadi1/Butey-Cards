import Button from './Button';
import { APP_CONSTANTS } from '../../CONSTANT/apptext'

const loginSubmitButton:HTMLElement = new Button(APP_CONSTANTS["ATOMS"]["BUTTON"]["LOGIN_BUTTON"]).button;
const registerSubmitButton: HTMLElement = new Button(APP_CONSTANTS["ATOMS"]["BUTTON"]["REGISTER_BUTTON"]).button;

export {
    loginSubmitButton,
    registerSubmitButton
}
