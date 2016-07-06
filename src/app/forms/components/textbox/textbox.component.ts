import { Component, Input } from '@angular/core';
import { FormGroup, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { FormBase } from './../../shared/index';

@Component({
  moduleId: module.id,
  selector: 'app-form-textbox',
  templateUrl: 'textbox.component.html',
  styleUrls: ['textbox.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class TextboxComponent{
  @Input() question: FormBase<any>;
  @Input() form: FormGroup;
  constructor() {}
  
  get isValid() {
    return this.form.controls[this.question.key].valid;
  }

}
