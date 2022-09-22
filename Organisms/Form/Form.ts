import FormHeader from "../../Molecules/form-header/FormHeader.js";
import FormBody from "../../Molecules/form-body/FormBody.js";
import FormFooter from "../../Molecules/form-footer/FormFooter.js";

interface FormParameters  {
  container: HTMLElement,
  formTitle: HTMLElement,
  formLineBreak: HTMLElement,
  formInputFeilds: HTMLElement[],
  formContainer: HTMLElement,
  formClickables: HTMLElement,
  formSubmitButton: HTMLElement,
  formLink: HTMLElement,
  switchLink: HTMLElement,
}

export default class Form {
  static header: FormHeader 
  static body: FormBody
  static footer: FormFooter
  formInputFeilds!: HTMLElement[];
  container!: HTMLElement;
  formTitle!: HTMLElement;
  formLineBreak!: HTMLElement;
  formContainer!: HTMLElement;
  formClickables!: HTMLElement;
  formSubmitButton!: HTMLElement;
  formLink!: HTMLElement;
  switchLink!: HTMLElement;
  
  constructor(form: FormParameters) {
    this.addFormParameters(form);
    this.renderForm();
  }
  private addFormParameters(form: FormParameters) {
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
  private renderForm(): void {
    Form.header = new FormHeader(
      this.container,
      this.formTitle,
      this.formLineBreak
    ) as FormHeader;
    Form.body = new FormBody(
      this.container,
      this.formContainer,
      this.formInputFeilds
    ) as FormBody;
    Form.footer = new FormFooter(
      this.container,
      this.formClickables,
      this.formSubmitButton,
      this.formLink,
      this.switchLink
    ) as FormFooter;
  }
}
