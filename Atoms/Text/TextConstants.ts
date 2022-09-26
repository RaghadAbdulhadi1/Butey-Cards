import Title from './Text';
import { TITLE_STRINGS } from './TextStrings'

const loginFormTitle: HTMLElement = new Title("title", TITLE_STRINGS["LOGIN"]).text;
const registerFormTitle: HTMLElement = new Title("title", TITLE_STRINGS["REGISTER"]).text;

export {
    loginFormTitle,
    registerFormTitle
}
