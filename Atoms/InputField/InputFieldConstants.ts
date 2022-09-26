import InputFeild from "./InputField";
import { INPUT_FEILD_STRINGS } from './InputFieldStrings'

const loginPlaceholderStrings = INPUT_FEILD_STRINGS["LOGIN_INPUT_FEILDS"];

const loginInputFeilds: HTMLElement[] = [
  new InputFeild(
    "email",
    loginPlaceholderStrings["EMAIL"],
    "login-email",
    "fa-regular fa-envelope"
  ).formInput,
  new InputFeild(
    "password",
    loginPlaceholderStrings["PASSWORD"],
    "login-password",
    "fa-sharp fa-solid fa-shield-halved"
  ).formInput
]

const registerPlaceholderStrings = INPUT_FEILD_STRINGS["REGISTER_INPUT_FEILDS"];

const registerInputFeilds: HTMLElement[] = [
  new InputFeild(
    "email",
    registerPlaceholderStrings["EMAIL"],
    "signup-email",
    "fa-regular fa-envelope"
  ).formInput,
  new InputFeild("text", registerPlaceholderStrings["USER_NAME"], "signup-name", "fa-solid fa-user")
    .formInput,
  new InputFeild(
    "password",
    registerPlaceholderStrings["PASSWORD"],
    "signup-password",
    "fa-sharp fa-solid fa-shield-halved"
  ).formInput,
  new InputFeild(
    "password",
    registerPlaceholderStrings["CONFIRM_PASSWORD"],
    "confirm-password",
    "fa-sharp fa-solid fa-shield-halved"
  ).formInput,
];

export {
    loginInputFeilds,
    registerInputFeilds
}
