import Button from './Button';
import { BUTTONS_STRINGS } from './ButtonStrings'

const loginSubmitButton:HTMLElement = new Button(BUTTONS_STRINGS["LOGIN_BUTTON"]).button;
const registerSubmitButton: HTMLElement = new Button(BUTTONS_STRINGS["REGISTER_BUTTON"]).button;

export {
    loginSubmitButton,
    registerSubmitButton
}
