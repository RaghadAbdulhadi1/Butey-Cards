import { registerFormTitle } from "../../Atoms/Text/TextConstants";
import { registerLineBreak } from "../../Atoms/LineBreak/LineBreakConstants";
import { registerInputFeilds } from "../../Atoms/Div/DivConstants";
import { registerSubmitButton } from "../../Atoms/Button/ButtonConstants";
import { switchToLoginFormLink } from "../../Atoms/ParagraphLink/ParagraphLinkConstants";
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
} from "../../Atoms/Div/DivConstants";
import {
  smallLetterPasswordValidationContent,
  capitalLetterPasswordValidationContent,
  numbersLetterPasswordValidationContent,
  charactersLetterPasswordValidationContent,
  confirmPasswordValidationContent,
  userNameValidationContent,
  emailValidationContent,
} from "../../Atoms/Paragraph/ParagraphsConstants";
import {
  passwordValidationTitle,
  userNameValidationTitle,
  emailValidationTitle,
} from "../../Atoms/Header/HeaderConstants";
import { registerSelectFeild } from "../../Atoms/Select/SelectConstants";
import { registerRadioFeild } from "../../Atoms/RadioField/RadioFeildConstants";
import { termsAndConditions } from "../../Atoms/Span/SpanConstants";
import { registerSelectOptions } from "../../Atoms/OptionField/OptionFeildConstants";
import { registerFormContainer } from "../../Atoms/Form/FormConstants";

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
