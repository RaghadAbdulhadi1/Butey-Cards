import InputFeild from "./InputField.js";

const loginInputFeilds: HTMLInputElement[] = [
  new InputFeild(
    "email",
    "Enter your email",
    "login-email",
    "fa-regular fa-envelope"
  ).formInput as HTMLInputElement,
  new InputFeild(
    "password",
    "Enter your password",
    "login-password",
    "fa-sharp fa-solid fa-shield-halved"
  ).formInput as HTMLInputElement,
];

const registerInputFeilds: HTMLInputElement[] = [
  new InputFeild(
    "email",
    "Enter your email",
    "signup-email",
    "fa-regular fa-envelope"
  ).formInput as HTMLInputElement,
  new InputFeild("text", "Enter your name", "signup-name", "fa-solid fa-user")
    .formInput as HTMLInputElement,
  new InputFeild(
    "password",
    "Create a password",
    "signup-password",
    "fa-sharp fa-solid fa-shield-halved"
  ).formInput as HTMLInputElement,
  new InputFeild(
    "password",
    "Confirm your password",
    "confirm-password",
    "fa-sharp fa-solid fa-shield-halved"
  ).formInput as HTMLInputElement,
];

export {
    loginInputFeilds,
    registerInputFeilds
}
