import ParagraphLink from "./ParagraphLink";
import { LINKS_STRINGS } from "./ParagraphLinkStrings";

const switchToRegisterFormLink: HTMLElement = new ParagraphLink(
  "Not a member? ",
  LINKS_STRINGS["REGISTER_FORM_LINK"],
  "register-link"
).paragraphLink;

const switchToLoginFormLink: HTMLElement = new ParagraphLink(
  "Already registered? ",
  LINKS_STRINGS["LOGIN_FORM_LINK"],
  "login-link"
).paragraphLink;

export {
    switchToRegisterFormLink,
    switchToLoginFormLink
}
