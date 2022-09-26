import Title from './Text.js';
import { TITLE_STRINGS } from './TextStrings.js';
const loginFormTitle = new Title("title", TITLE_STRINGS["LOGIN"]).text;
const registerFormTitle = new Title("title", TITLE_STRINGS["REGISTER"]).text;
export { loginFormTitle, registerFormTitle };
