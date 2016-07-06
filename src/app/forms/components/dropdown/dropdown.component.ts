import { Component, Input } from '@angular/core';
import { FormGroup, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { FormBase } from './../../shared/index';

@Component({
  moduleId: module.id,
  selector: 'app-form-dropdown',
  templateUrl: 'dropdown.component.html',
  styleUrls: ['dropdown.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class DropdownComponent{
  @Input() question: FormBase<any>;
  @Input() form: FormGroup;

  get isValid(){
    return this.form.controls[this.question.key].valid;
  }

}
