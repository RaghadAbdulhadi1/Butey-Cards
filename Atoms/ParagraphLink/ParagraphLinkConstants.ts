import ParagraphLink from "./ParagraphLink";

const switchToRegisterFormLink: HTMLElement = new ParagraphLink(
  "Not a member? ",
  "Register",
  "register-link"
).paragraphLink;

const switchToLoginFormLink: HTMLElement = new ParagraphLink(
  "Already registered? ",
  "Login",
  "login-link"
).paragraphLink;

export {
    switchToRegisterFormLink,
    switchToLoginFormLink
}
