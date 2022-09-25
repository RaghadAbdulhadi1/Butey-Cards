"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchToLoginFormLink = exports.switchToRegisterFormLink = void 0;
const ParagraphLink_1 = __importDefault(require("./ParagraphLink"));
const switchToRegisterFormLink = new ParagraphLink_1.default("Not a member? ", "Register", "register-link").paragraphLink;
exports.switchToRegisterFormLink = switchToRegisterFormLink;
const switchToLoginFormLink = new ParagraphLink_1.default("Already registered? ", "Login", "login-link").paragraphLink;
exports.switchToLoginFormLink = switchToLoginFormLink;
//# sourceMappingURL=ParagraphLinkConstants.js.map