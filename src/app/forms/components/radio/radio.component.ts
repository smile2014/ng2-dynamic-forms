import { Component, Input } from '@angular/core';
import { FormGroup,  REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { FormBase } from './../../shared/index';

@Component({
  moduleId: module.id,
  selector: 'app-form-radio',
  templateUrl: 'radio.component.html',
  styleUrls: ['radio.component.css'],
  directives: [
    REACTIVE_FORM_DIRECTIVES
  ]
})
export class RadioComponent  {
  @Input() question: FormBase<any>;
  @Input() form: FormGroup;

  get isValid(){
    return this.form.contains[this.question.key].valid;
  }
  
}
