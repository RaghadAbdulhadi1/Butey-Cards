import Header from "./Header.js";

const passwordValidationTitle = new Header(
  "Password must contain the following:"
).header;

const userNameValidationTitle = new Header(
  "Username must contain the following:"
).header;

const emailValidationTitle = new Header(
    "Email must be in the correct format"
  ).header;

export {
    passwordValidationTitle,
    userNameValidationTitle,
    emailValidationTitle
}
