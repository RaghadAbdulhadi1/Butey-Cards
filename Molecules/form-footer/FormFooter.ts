interface IFormFooter {
  container: HTMLElement;
  formClickables: HTMLElement;
  formSubmitButton: HTMLElement;
  formLink: HTMLElement;
  switchLink: HTMLElement;
}

export default class FormFooter implements IFormFooter {
  constructor(public container: HTMLElement, public formClickables: HTMLElement, public formSubmitButton: HTMLElement, public formLink: HTMLElement, public switchLink: HTMLElement) {
    this.container = container;
    this.formClickables = formClickables;
    this.formSubmitButton = formSubmitButton;
    this.formLink = formLink;
    this.switchLink = switchLink;
  }
}
