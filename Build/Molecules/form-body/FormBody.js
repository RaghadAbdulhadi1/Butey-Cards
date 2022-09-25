export default class FormBody {
    container;
    formContainer;
    formInputFeilds;
    constructor(container, formContainer, formInputFeilds) {
        this.container = container;
        this.formContainer = formContainer;
        this.formInputFeilds = formInputFeilds;
        this.addInputs();
    }
    addInputs() {
        this.formInputFeilds.forEach((inputField) => this.formContainer.appendChild(inputField));
        this.container.appendChild(this.formContainer);
    }
}
