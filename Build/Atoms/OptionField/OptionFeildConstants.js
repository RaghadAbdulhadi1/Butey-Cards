import OptionField from './OptionField.js';
import { APP_CONSTANTS } from '../../STRINGS/apptext.js';
const registerSelectOptions = [
    new OptionField(APP_CONSTANTS["ATOMS"]["COUNTRY_CHOICES"]["CHOICE_ONE"]).option,
    new OptionField(APP_CONSTANTS["ATOMS"]["COUNTRY_CHOICES"]["CHOICE_TWO"]).option,
    new OptionField(APP_CONSTANTS["ATOMS"]["COUNTRY_CHOICES"]["CHOICE_THREE"]).option,
    new OptionField(APP_CONSTANTS["ATOMS"]["COUNTRY_CHOICES"]["CHOICE_FOUR"]).option,
    new OptionField(APP_CONSTANTS["ATOMS"]["COUNTRY_CHOICES"]["CHOICE_FIVE"]).option,
    new OptionField(APP_CONSTANTS["ATOMS"]["COUNTRY_CHOICES"]["CHOICE_SIX"]).option,
];
export { registerSelectOptions };
