import ParagraphLink from "./ParagraphLink.js";

const switchToRegisterFormLink = new ParagraphLink(
  "Not a member? ",
  "Register",
  "register-link"
).paragraphLink;

const switchToLoginFormLink = new ParagraphLink(
  "Already registered? ",
  "Login",
  "login-link"
).paragraphLink;

export {
    switchToRegisterFormLink,
    switchToLoginFormLink
}
