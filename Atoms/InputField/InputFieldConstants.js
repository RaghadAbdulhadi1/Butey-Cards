import InputFeild from "./InputField.js";

const loginInputFeilds = [
  new InputFeild(
    "email",
    "Enter your email",
    "login-email",
    "fa-regular fa-envelope"
  ).formInput,
  new InputFeild(
    "password",
    "Enter your password",
    "login-password",
    "fa-sharp fa-solid fa-shield-halved"
  ).formInput,
];

const registerInputFeilds = [
  new InputFeild(
    "email",
    "Enter your email",
    "signup-email",
    "fa-regular fa-envelope"
  ).formInput,
  new InputFeild("text", "Enter your name", "signup-name", "fa-solid fa-user")
    .formInput,
  new InputFeild(
    "password",
    "Create a password",
    "signup-password",
    "fa-sharp fa-solid fa-shield-halved"
  ).formInput,
  new InputFeild(
    "password",
    "Confirm your password",
    "confirm-password",
    "fa-sharp fa-solid fa-shield-halved"
  ).formInput,
];

export {
    loginInputFeilds,
    registerInputFeilds
}
