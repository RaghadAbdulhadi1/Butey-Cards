"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSelectOptions = void 0;
const OptionField_1 = __importDefault(require("./OptionField"));
const apptext_1 = require("../../STRINGS/apptext");
const registerSelectOptions = [
    new OptionField_1.default(apptext_1.APP_CONSTANTS["ATOMS"]["COUNTRY_CHOICES"]["CHOICE_ONE"]).option,
    new OptionField_1.default(apptext_1.APP_CONSTANTS["ATOMS"]["COUNTRY_CHOICES"]["CHOICE_TWO"]).option,
    new OptionField_1.default(apptext_1.APP_CONSTANTS["ATOMS"]["COUNTRY_CHOICES"]["CHOICE_THREE"]).option,
    new OptionField_1.default(apptext_1.APP_CONSTANTS["ATOMS"]["COUNTRY_CHOICES"]["CHOICE_FOUR"]).option,
    new OptionField_1.default(apptext_1.APP_CONSTANTS["ATOMS"]["COUNTRY_CHOICES"]["CHOICE_FIVE"]).option,
    new OptionField_1.default(apptext_1.APP_CONSTANTS["ATOMS"]["COUNTRY_CHOICES"]["CHOICE_SIX"]).option,
];
exports.registerSelectOptions = registerSelectOptions;
//# sourceMappingURL=OptionFeildConstants.js.map