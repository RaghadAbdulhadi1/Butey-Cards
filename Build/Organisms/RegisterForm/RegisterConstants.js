"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchToLoginFormLink = exports.registerFormContainer = exports.passwordValidationContainer = exports.userNameValidationContainer = exports.emailAlreadyExistsValidationContainer = exports.confirmPasswordValidationContainer = exports.emailValidationContainer = exports.charactersLetterPasswordRegex = exports.numbersLetterPasswordRegex = exports.capitalLetterPasswordRegex = exports.smallLetterPasswordRegex = exports.usernameRegex = exports.emailRegex = exports.registerCheckbox = exports.registerSelect = exports.registerSelectOptions = exports.termsAndConditions = exports.registerRadioFeild = exports.emailValidationParagraphs = exports.passwordValidationParagraphs = exports.userNameValidationTitle = exports.userNameValidationContent = exports.confirmPasswordValidationContent = exports.registerSelectFeild = exports.registerParameters = void 0;
const TextConstants_1 = require("../../Atoms/Text/TextConstants");
const LineBreakConstants_1 = require("../../Atoms/LineBreak/LineBreakConstants");
const InputFieldConstants_1 = require("../../Atoms/InputField/InputFieldConstants");
const ButtonConstants_1 = require("../../Atoms/Button/ButtonConstants");
const ParagraphLinkConstants_1 = require("../../Atoms/ParagraphLink/ParagraphLinkConstants");
Object.defineProperty(exports, "switchToLoginFormLink", { enumerable: true, get: function () { return ParagraphLinkConstants_1.switchToLoginFormLink; } });
const DivConstants_1 = require("../../Atoms/Div/DivConstants");
Object.defineProperty(exports, "registerSelect", { enumerable: true, get: function () { return DivConstants_1.registerSelect; } });
Object.defineProperty(exports, "registerCheckbox", { enumerable: true, get: function () { return DivConstants_1.registerCheckbox; } });
Object.defineProperty(exports, "emailValidationContainer", { enumerable: true, get: function () { return DivConstants_1.emailValidationContainer; } });
Object.defineProperty(exports, "confirmPasswordValidationContainer", { enumerable: true, get: function () { return DivConstants_1.confirmPasswordValidationContainer; } });
Object.defineProperty(exports, "emailAlreadyExistsValidationContainer", { enumerable: true, get: function () { return DivConstants_1.emailAlreadyExistsValidationContainer; } });
Object.defineProperty(exports, "userNameValidationContainer", { enumerable: true, get: function () { return DivConstants_1.userNameValidationContainer; } });
Object.defineProperty(exports, "passwordValidationContainer", { enumerable: true, get: function () { return DivConstants_1.passwordValidationContainer; } });
const ParagraphsConstants_1 = require("../../Atoms/Paragraph/ParagraphsConstants");
Object.defineProperty(exports, "confirmPasswordValidationContent", { enumerable: true, get: function () { return ParagraphsConstants_1.confirmPasswordValidationContent; } });
Object.defineProperty(exports, "userNameValidationContent", { enumerable: true, get: function () { return ParagraphsConstants_1.userNameValidationContent; } });
const HeaderConstants_1 = require("../../Atoms/Header/HeaderConstants");
Object.defineProperty(exports, "userNameValidationTitle", { enumerable: true, get: function () { return HeaderConstants_1.userNameValidationTitle; } });
const SelectConstants_1 = require("../../Atoms/Select/SelectConstants");
Object.defineProperty(exports, "registerSelectFeild", { enumerable: true, get: function () { return SelectConstants_1.registerSelectFeild; } });
const RadioFeildConstants_1 = require("../../Atoms/RadioField/RadioFeildConstants");
Object.defineProperty(exports, "registerRadioFeild", { enumerable: true, get: function () { return RadioFeildConstants_1.registerRadioFeild; } });
const SpanConstants_1 = require("../../Atoms/Span/SpanConstants");
Object.defineProperty(exports, "termsAndConditions", { enumerable: true, get: function () { return SpanConstants_1.termsAndConditions; } });
const OptionFeildConstants_1 = require("../../Atoms/OptionField/OptionFeildConstants");
Object.defineProperty(exports, "registerSelectOptions", { enumerable: true, get: function () { return OptionFeildConstants_1.registerSelectOptions; } });
const FormConstants_1 = require("../../Atoms/Form/FormConstants");
Object.defineProperty(exports, "registerFormContainer", { enumerable: true, get: function () { return FormConstants_1.registerFormContainer; } });
const passwordValidationParagraphs = [
    HeaderConstants_1.passwordValidationTitle,
    ParagraphsConstants_1.smallLetterPasswordValidationContent,
    ParagraphsConstants_1.capitalLetterPasswordValidationContent,
    ParagraphsConstants_1.numbersLetterPasswordValidationContent,
    ParagraphsConstants_1.charactersLetterPasswordValidationContent,
];
exports.passwordValidationParagraphs = passwordValidationParagraphs;
const emailValidationParagraphs = [
    HeaderConstants_1.emailValidationTitle,
    ParagraphsConstants_1.emailValidationContent,
];
exports.emailValidationParagraphs = emailValidationParagraphs;
const registerParameters = {
    container: DivConstants_1.registerContainer,
    formTitle: TextConstants_1.registerFormTitle,
    formLineBreak: LineBreakConstants_1.registerLineBreak,
    formInputFeilds: InputFieldConstants_1.registerInputFeilds,
    formContainer: FormConstants_1.registerFormContainer,
    formClickables: DivConstants_1.registerClickables,
    formSubmitButton: ButtonConstants_1.registerSubmitButton,
    formLink: DivConstants_1.registerLink,
    switchLink: ParagraphLinkConstants_1.switchToLoginFormLink,
};
exports.registerParameters = registerParameters;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
exports.emailRegex = emailRegex;
const usernameRegex = /^[a-z][a-z0-9_]+[a-z0-9]$/g;
exports.usernameRegex = usernameRegex;
const smallLetterPasswordRegex = /[a-z]/g;
exports.smallLetterPasswordRegex = smallLetterPasswordRegex;
const capitalLetterPasswordRegex = /[A-Z]/g;
exports.capitalLetterPasswordRegex = capitalLetterPasswordRegex;
const numbersLetterPasswordRegex = /[0-9]/g;
exports.numbersLetterPasswordRegex = numbersLetterPasswordRegex;
const charactersLetterPasswordRegex = /\W/g;
exports.charactersLetterPasswordRegex = charactersLetterPasswordRegex;
//# sourceMappingURL=RegisterConstants.js.map