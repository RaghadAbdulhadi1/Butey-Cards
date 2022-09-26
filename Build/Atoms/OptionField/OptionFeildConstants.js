import OptionField from './OptionField.js';
import { COUNTRY_CHOICES } from './OptionFeildStrings.js';
const registerSelectOptions = [
    new OptionField(COUNTRY_CHOICES["CHOICE_ONE"]).option,
    new OptionField(COUNTRY_CHOICES["CHOICE_TWO"]).option,
    new OptionField(COUNTRY_CHOICES["CHOICE_THREE"]).option,
    new OptionField(COUNTRY_CHOICES["CHOICE_FOUR"]).option,
    new OptionField(COUNTRY_CHOICES["CHOICE_FIVE"]).option,
    new OptionField(COUNTRY_CHOICES["CHOICE_SIX"]).option,
];
export { registerSelectOptions };
