import { loginFormTitle } from "../../Atoms/Text/TextConstants.js";
import { loginLineBreak } from "../../Atoms/LineBreak/LineBreakConstants.js";
import { loginInputFeilds } from "../../Atoms/InputField/InputFieldConstants.js";
import { loginFormContainer } from "../../Atoms/Form/FormConstants.js";
import { loginSubmitButton } from "../../Atoms/Button/ButtonConstants.js";
import { switchToRegisterFormLink } from "../../Atoms/ParagraphLink/ParagraphLinkConstants.js";
import { loginValidationContent } from "../../Atoms/Paragraph/ParagraphsConstants.js";
import {
  logInContainer,
  loginClickables,
  loginLink,
  validationContainer,
} from "../../Atoms/Div/DivConstants.js";
import IFormParameters  from "../../Organisms//Form/FormConstants.js";



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
