import Title from './Text.js';

const loginFormTitle: HTMLDivElement = new Title("title", "Login").text;
const registerFormTitle: HTMLDivElement = new Title("title", "Registeration").text;

export {
    loginFormTitle,
    registerFormTitle
}
