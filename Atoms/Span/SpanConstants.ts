import Span from './Span';
import { SPAN_STRINGS } from './SpanStrings';

const termsAndConditions: HTMLElement = new Span(
  SPAN_STRINGS["REGISTER_CONFIRM_LINK"],
  SPAN_STRINGS["TERMS_AND_CONDITIONS"]
  ).span;

export {
    termsAndConditions
}
