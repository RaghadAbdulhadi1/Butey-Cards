import { registerFormTitle } from "../../Atoms/Text/TextConstants.js";
import { registerLineBreak } from "../../Atoms/LineBreak/LineBreakConstants.js";
import { registerInputFeilds } from "../../Atoms/InputField/InputFieldConstants.js";
import { registerSubmitButton } from "../../Atoms/Button/ButtonConstants.js";
import { switchToLoginFormLink } from "../../Atoms/ParagraphLink/ParagraphLinkConstants.js";
import {
  registerContainer,
  registerClickables,
  registerLink,
  registerSelect,
  registerCheckbox,
  emailValidationContainer,
  confirmPasswordValidationContainer,
  emailAlreadyExistsValidationContainer,
  userNameValidationContainer,
  passwordValidationContainer
} from "../../Atoms/Div/DivConstants.js";
import {
  smallLetterPasswordValidationContent,
  capitalLetterPasswordValidationContent,
  numbersLetterPasswordValidationContent,
  charactersLetterPasswordValidationContent,
  confirmPasswordValidationContent,
  userNameValidationContent,
  emailValidationContent,
} from "../../Atoms/Paragraph/ParagraphsConstants.js";
import {
  passwordValidationTitle,
  userNameValidationTitle,
  emailValidationTitle,
} from "../../Atoms/Header/HeaderConstants.js";
import { registerSelectFeild } from "../../Atoms/Select/SelectConstants.js";
import { registerRadioFeild } from "../../Atoms/RadioField/RadioFeildConstants.js";
import { termsAndConditions } from "../../Atoms/Span/SpanConstants.js";
import { registerSelectOptions } from "../../Atoms/OptionField/OptionFeildConstants.js";
import { registerFormContainer } from "../../Atoms/Form/FormConstants.js";
import IFormParameters  from "../../Organisms//Form/FormConstants.js"

const passwordValidationParagraphs: HTMLElement[] = [
  passwordValidationTitle,
  smallLetterPasswordValidationContent,
  capitalLetterPasswordValidationContent,
  numbersLetterPasswordValidationContent,
  charactersLetterPasswordValidationContent,
];

const emailValidationParagraphs: HTMLElement[] = [
  emailValidationTitle,
  emailValidationContent,
];

const registerParameters: IFormParameters = {
  container: registerContainer,
  formTitle: registerFormTitle,
  formLineBreak: registerLineBreak,
  formInputFeilds: registerInputFeilds,
  formContainer: registerFormContainer,
  formClickables: registerClickables,
  formSubmitButton: registerSubmitButton,
  formLink: registerLink,
  switchLink: switchToLoginFormLink,
};

// Regex
const emailRegex: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const usernameRegex: RegExp = /^[a-z][a-z0-9_]+[a-z0-9]$/g;
const smallLetterPasswordRegex: RegExp = /[a-z]/g;
const capitalLetterPasswordRegex: RegExp = /[A-Z]/g;
const numbersLetterPasswordRegex: RegExp = /[0-9]/g;
const charactersLetterPasswordRegex: RegExp = /\W/g;

export {
  registerParameters,
  registerSelectFeild,
  confirmPasswordValidationContent,
  userNameValidationContent,
  userNameValidationTitle,
  passwordValidationParagraphs,
  emailValidationParagraphs,
  registerRadioFeild,
  termsAndConditions,
  registerSelectOptions,
  registerSelect,
  registerCheckbox,
  emailRegex,
  usernameRegex,
  smallLetterPasswordRegex,
  capitalLetterPasswordRegex,
  numbersLetterPasswordRegex,
  charactersLetterPasswordRegex,
  emailValidationContainer,
  confirmPasswordValidationContainer,
  emailAlreadyExistsValidationContainer,
  userNameValidationContainer,
  passwordValidationContainer,
  registerFormContainer,
  switchToLoginFormLink
};
