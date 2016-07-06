import { Component, Input } from '@angular/core';
import { FormGroup,  REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { FormBase } from './../../shared/index';

@Component({
  moduleId: module.id,
  selector: 'app-form-checkbox',
  templateUrl: 'checkbox.component.html',
  styleUrls: ['checkbox.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class CheckboxComponent {
  @Input() question: FormBase<any>;
  @Input() form: FormGroup;
}
