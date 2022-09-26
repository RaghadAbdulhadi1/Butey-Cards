import OptionField from './OptionField';
import { COUNTRY_CHOICES } from './OptionFeildStrings'

const registerSelectOptions: HTMLElement[] = [
    new OptionField(COUNTRY_CHOICES["CHOICE_ONE"]).option,
    new OptionField(COUNTRY_CHOICES["CHOICE_TWO"]).option,
    new OptionField(COUNTRY_CHOICES["CHOICE_THREE"]).option,
    new OptionField(COUNTRY_CHOICES["CHOICE_FOUR"]).option,
    new OptionField(COUNTRY_CHOICES["CHOICE_FIVE"]).option,
    new OptionField(COUNTRY_CHOICES["CHOICE_SIX"]).option,
  ];

export {
    registerSelectOptions
}
