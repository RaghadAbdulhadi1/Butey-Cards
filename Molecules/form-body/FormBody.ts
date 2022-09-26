interface IFormBody {
  addInputs(): void 
}
export default class FormBody implements IFormBody {
  constructor(private container: HTMLElement, private formContainer: HTMLElement, private formInputFeilds: HTMLElement[]) {
    this.addInputs();
  }
  
  public addInputs(): void {
    this.formInputFeilds.forEach((inputField) =>
      this.formContainer.appendChild(inputField)
    );
    this.container.appendChild(this.formContainer);
  }
}
