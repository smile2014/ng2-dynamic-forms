export class FormBase<T>{
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  type: string;
  controlType: string;
  constructor(
    options: {
      value? : T,
      key?: string,
      label?: string,
      required?: boolean,
      order?: number,
      type?: string,
      controlType?: string
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.type = options.type || '';
    this.controlType =  options.controlType || '';
  }
}

export class FormTextbox extends FormBase<string> {
  controlType = 'textbox';
  type: string;
  value: string;

  constructor(options: {} = {}){
    super(options);
    this.type = options['type'] || 'text';
  }
}

export class FormDropdown extends FormBase<string> {
  controlType = 'dropdown';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [{key: 'dropdown', value: 'Dropdown'}];
  }
}

export class FormTextarea extends FormBase<string> {
  controlType = 'textarea';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || 'textarea';
  }
}

export class FormCheckbox extends FormBase<string> {
  controlType = 'checkbox';
  key: string;
  
  constructor(options: {} = {}) {
    super(options);
    this.key = options['key'] || 'checkbox';
  }
}

export class FormRadioButton extends FormBase<string> {
  controlType = 'radio';
  values: {key: string, value: string}[] = [];

  constructor(options: {} = {}){
    super(options);
    this.values = options['values'] || [{key: 'radio', value: 'Radio'}];
  }
}