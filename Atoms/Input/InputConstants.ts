import InputFeild from "./Input";
import { INPUT_FEILD_STRINGS } from "./InputStrings";

const loginPlaceholderStrings = INPUT_FEILD_STRINGS["LOGIN_INPUT_FEILDS"];

const loginEmailFeild: HTMLInputElement = new InputFeild(
  "email",
  loginPlaceholderStrings["EMAIL"],
  "login-email"
).formInput;
const loginPasswordFeild: HTMLInputElement = new InputFeild(
  "password",
  loginPlaceholderStrings["PASSWORD"],
  "login-password"
).formInput;
const registerPlaceholderStrings = INPUT_FEILD_STRINGS["REGISTER_INPUT_FEILDS"];

const registerEmailFeild: HTMLInputElement = new InputFeild(
  "email",
  registerPlaceholderStrings["EMAIL"],
  "signup-email"
).formInput;
const registerUserNameFeild: HTMLInputElement = new InputFeild(
  "text",
  registerPlaceholderStrings["USER_NAME"],
  "signup-name"
).formInput;

const registerPasswordFeild: HTMLInputElement = new InputFeild(
  "password",
  registerPlaceholderStrings["PASSWORD"],
  "signup-password"
).formInput;

const registerConfirmPasswordFeild: HTMLInputElement = new InputFeild(
  "password",
  registerPlaceholderStrings["CONFIRM_PASSWORD"],
  "confirm-password"
).formInput;

export {
  loginEmailFeild,
  loginPasswordFeild,
  registerEmailFeild,
  registerUserNameFeild,
  registerPasswordFeild,
  registerConfirmPasswordFeild,
};
