"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchToRegisterFormLink = exports.loginValidationContent = exports.validationContainer = exports.loginParameters = void 0;
const TextConstants_1 = require("../../Atoms/Text/TextConstants");
const LineBreakConstants_1 = require("../../Atoms/LineBreak/LineBreakConstants");
const InputFieldConstants_1 = require("../../Atoms/InputField/InputFieldConstants");
const FormConstants_1 = require("../../Atoms/Form/FormConstants");
const ButtonConstants_1 = require("../../Atoms/Button/ButtonConstants");
const ParagraphLinkConstants_1 = require("../../Atoms/ParagraphLink/ParagraphLinkConstants");
Object.defineProperty(exports, "switchToRegisterFormLink", { enumerable: true, get: function () { return ParagraphLinkConstants_1.switchToRegisterFormLink; } });
const ParagraphsConstants_1 = require("../../Atoms/Paragraph/ParagraphsConstants");
Object.defineProperty(exports, "loginValidationContent", { enumerable: true, get: function () { return ParagraphsConstants_1.loginValidationContent; } });
const DivConstants_1 = require("../../Atoms/Div/DivConstants");
Object.defineProperty(exports, "validationContainer", { enumerable: true, get: function () { return DivConstants_1.validationContainer; } });
const loginParameters = {
    container: DivConstants_1.logInContainer,
    formTitle: TextConstants_1.loginFormTitle,
    formLineBreak: LineBreakConstants_1.loginLineBreak,
    formInputFeilds: InputFieldConstants_1.loginInputFeilds,
    formContainer: FormConstants_1.loginFormContainer,
    formClickables: DivConstants_1.loginClickables,
    formSubmitButton: ButtonConstants_1.loginSubmitButton,
    formLink: DivConstants_1.loginLink,
    switchLink: ParagraphLinkConstants_1.switchToRegisterFormLink,
};
exports.loginParameters = loginParameters;
//# sourceMappingURL=LoginConstants.js.map