import Form from './Form.js';

const loginFormContainer: HTMLFormElement = new Form("login-form-id").form;
const registerFormContainer: HTMLFormElement = new Form("register-form-id").form;

export {
    loginFormContainer,
    registerFormContainer
}
