"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerInputFeilds = exports.loginInputFeilds = void 0;
const InputField_1 = __importDefault(require("./InputField"));
const apptext_1 = require("../../STRINGS/apptext");
const loginInputFeilds = [
    new InputField_1.default("email", apptext_1.APP_CONSTANTS["ATOMS"]["INPUT_FEILD"]["LOGIN_INPUT_FEILDS"]["EMAIL"], "login-email", "fa-regular fa-envelope").formInput,
    new InputField_1.default("password", apptext_1.APP_CONSTANTS["ATOMS"]["INPUT_FEILD"]["LOGIN_INPUT_FEILDS"]["PASSWORD"], "login-password", "fa-sharp fa-solid fa-shield-halved").formInput
];
exports.loginInputFeilds = loginInputFeilds;
const registerInputFeilds = [
    new InputField_1.default("email", apptext_1.APP_CONSTANTS["ATOMS"]["INPUT_FEILD"]["REGISTER_INPUT_FEILDS"]["EMAIL"], "signup-email", "fa-regular fa-envelope").formInput,
    new InputField_1.default("text", apptext_1.APP_CONSTANTS["ATOMS"]["INPUT_FEILD"]["REGISTER_INPUT_FEILDS"]["USER_NAME"], "signup-name", "fa-solid fa-user")
        .formInput,
    new InputField_1.default("password", apptext_1.APP_CONSTANTS["ATOMS"]["INPUT_FEILD"]["REGISTER_INPUT_FEILDS"]["PASSWORD"], "signup-password", "fa-sharp fa-solid fa-shield-halved").formInput,
    new InputField_1.default("password", apptext_1.APP_CONSTANTS["ATOMS"]["INPUT_FEILD"]["REGISTER_INPUT_FEILDS"]["CONFIRM_PASSWORD"], "confirm-password", "fa-sharp fa-solid fa-shield-halved").formInput,
];
exports.registerInputFeilds = registerInputFeilds;
//# sourceMappingURL=InputFieldConstants.js.map