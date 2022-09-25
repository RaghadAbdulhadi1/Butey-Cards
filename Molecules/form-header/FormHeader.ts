interface IFormHeader{
  addTitle(): void;
  addLineBreak(): void;
  addHeaderComponents(): void;
}

export default class FormHeader implements IFormHeader{

  constructor(private container: HTMLElement, private formTitle: HTMLElement, private formLineBreak: HTMLElement) {
  this.addHeaderComponents();
  }

  public addTitle(): void {
    this.container.appendChild(this.formTitle);
  }

  public addLineBreak(): void {
    this.container.appendChild(this.formLineBreak);
  }
  
  public addHeaderComponents(): void {
    this.addTitle();
    this.addLineBreak();
  }
}
