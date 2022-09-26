import Button from './Button.js';
import { BUTTONS_STRINGS } from './ButtonStrings.js';
const loginSubmitButton = new Button(BUTTONS_STRINGS["LOGIN_BUTTON"]).button;
const registerSubmitButton = new Button(BUTTONS_STRINGS["REGISTER_BUTTON"]).button;
export { loginSubmitButton, registerSubmitButton };
