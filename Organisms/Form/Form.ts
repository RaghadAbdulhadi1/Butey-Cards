import FormHeader from "../../Molecules/form-header/FormHeader";
import FormBody from "../../Molecules/form-body/FormBody";
import FormFooter from "../../Molecules/form-footer/FormFooter";

interface IForm {
  readonly header: FormHeader 
  readonly body: FormBody
  readonly footer: FormFooter
  addFormParameters(form: IFormParameters): void;
  renderForm(): void
}

export default class Form implements IForm {
  header!: FormHeader 
  
  body!: FormBody
  
  footer!: FormFooter

  formInputFeilds!: HTMLElement[];

  container!: HTMLElement;

  formTitle!: HTMLElement;

  formLineBreak!: HTMLElement;

  formContainer!: HTMLElement;

  formClickables!: HTMLElement;

  formSubmitButton!: HTMLElement;

  formLink!: HTMLElement;

  switchLink!: HTMLElement;
  
  constructor(form: IFormParameters) {
    this.addFormParameters(form);
    this.renderForm();
  }

  public addFormParameters(form: IFormParameters): void {
    this.container = form.container;
    this.formTitle = form.formTitle;
    this.formLineBreak = form.formLineBreak;
    this.formInputFeilds = form.formInputFeilds;
    this.formContainer = form.formContainer;
    this.formClickables = form.formClickables;
    this.formSubmitButton = form.formSubmitButton;
    this.formLink = form.formLink;
    this.switchLink = form.switchLink;
  }
  
  public renderForm(): void {
    this.header = new FormHeader(
      this.container,
      this.formTitle,
      this.formLineBreak
    ) as FormHeader;
    this.body = new FormBody(
      this.container,
      this.formContainer,
      this.formInputFeilds
    ) as FormBody;
    this.footer = new FormFooter(
      this.container,
      this.formClickables,
      this.formSubmitButton,
      this.formLink,
      this.switchLink
    ) as FormFooter;
  }
}
