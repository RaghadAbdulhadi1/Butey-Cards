import { loginFormTitle } from "../../Atoms/Text/TextConstants";
import { loginLineBreak } from "../../Atoms/LineBreak/LineBreakConstants";
import { loginInputFeilds } from "../../Atoms/Div/DivConstants";
import { loginFormContainer } from "../../Atoms/Form/FormConstants";
import { loginSubmitButton } from "../../Atoms/Button/ButtonConstants";
import { switchToRegisterFormLink } from "../../Atoms/ParagraphLink/ParagraphLinkConstants";
import { loginValidationContent } from "../../Atoms/Paragraph/ParagraphsConstants";
import {
  logInContainer,
  loginClickables,
  loginLink,
  validationContainer,
} from "../../Atoms/Div/DivConstants";

const loginParameters: IFormParameters = {
  container: logInContainer,
  formTitle: loginFormTitle,
  formLineBreak: loginLineBreak,
  formInputFeilds: loginInputFeilds,
  formContainer: loginFormContainer,
  formClickables: loginClickables,
  formSubmitButton: loginSubmitButton,
  formLink: loginLink,
  switchLink: switchToRegisterFormLink,
};

export { loginParameters, validationContainer, loginValidationContent, switchToRegisterFormLink };
