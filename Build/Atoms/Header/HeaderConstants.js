"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailValidationTitle = exports.userNameValidationTitle = exports.passwordValidationTitle = void 0;
const Header_1 = __importDefault(require("./Header"));
const apptext_1 = require("../../STRINGS/apptext");
const passwordValidationTitle = new Header_1.default(apptext_1.APP_CONSTANTS["ATOMS"]["VALIDATION_TITLE"]["REGISTER_FORM"]["PASSWORD_CHECK"], "validationHeader").header;
exports.passwordValidationTitle = passwordValidationTitle;
const userNameValidationTitle = new Header_1.default(apptext_1.APP_CONSTANTS["ATOMS"]["VALIDATION_TITLE"]["REGISTER_FORM"]["USER_NAME_CHECK"], "validationHeader").header;
exports.userNameValidationTitle = userNameValidationTitle;
const emailValidationTitle = new Header_1.default(apptext_1.APP_CONSTANTS["ATOMS"]["VALIDATION_TITLE"]["REGISTER_FORM"]["EMAIL_ADDRESS_CHECK"], "validationHeader").header;
exports.emailValidationTitle = emailValidationTitle;
//# sourceMappingURL=HeaderConstants.js.map