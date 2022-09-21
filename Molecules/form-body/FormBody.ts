export default class FormBody {
  constructor(private container: HTMLElement, private formContainer: HTMLElement, private formInputFeilds: HTMLElement[]) {
    this.addInputs();
  }
  addInputs() {
    this.formInputFeilds.forEach((inputField) =>
      this.formContainer.appendChild(inputField)
    );
    this.container.appendChild(this.formContainer);
  }
}
