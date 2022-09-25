"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSubmitButton = exports.loginSubmitButton = void 0;
const Button_1 = __importDefault(require("./Button"));
const apptext_1 = require("../../STRINGS/apptext");
const loginSubmitButton = new Button_1.default(apptext_1.APP_CONSTANTS["ATOMS"]["BUTTON"]["LOGIN_BUTTON"]).button;
exports.loginSubmitButton = loginSubmitButton;
const registerSubmitButton = new Button_1.default(apptext_1.APP_CONSTANTS["ATOMS"]["BUTTON"]["REGISTER_BUTTON"]).button;
exports.registerSubmitButton = registerSubmitButton;
//# sourceMappingURL=ButtonConstants.js.map