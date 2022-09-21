export default class FormFooter {
    container;
    formClickables;
    formSubmitButton;
    formLink;
    switchLink;
    constructor(container, formClickables, formSubmitButton, formLink, switchLink) {
        this.container = container;
        this.formClickables = formClickables;
        this.formSubmitButton = formSubmitButton;
        this.formLink = formLink;
        this.switchLink = switchLink;
    }
}
