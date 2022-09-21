import Header from "./Header.js";

const passwordValidationTitle: HTMLHeadElement = new Header(
  "Password must contain the following:"
).header;

const userNameValidationTitle: HTMLHeadElement = new Header(
  "Username must contain the following:"
).header;

const emailValidationTitle: HTMLHeadElement = new Header(
    "Email must be in the correct format"
  ).header;

export {
    passwordValidationTitle,
    userNameValidationTitle,
    emailValidationTitle
}
