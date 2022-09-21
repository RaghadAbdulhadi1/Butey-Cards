import ParagraphLink from "./ParagraphLink.js";

const switchToRegisterFormLink: HTMLDivElement = new ParagraphLink(
  "Not a member? ",
  "Register",
  "register-link"
).paragraphLink;

const switchToLoginFormLink: HTMLDivElement = new ParagraphLink(
  "Already registered? ",
  "Login",
  "login-link"
).paragraphLink;

export {
    switchToRegisterFormLink,
    switchToLoginFormLink
}
