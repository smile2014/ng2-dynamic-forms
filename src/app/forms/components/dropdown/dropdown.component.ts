import { Component, Input } from '@angular/core';
import { FormGroup, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { FormBase } from './../../shared/index';

@Component({
  moduleId: module.id,
  selector: 'app-dropdown',
  templateUrl: 'dropdown.component.html',
  styleUrls: ['dropdown.component.css']
})
export class DropdownComponent{
  @Input() base: FormBase<any>;
  @Input() form: FormGroup;

  get isValid(){
    return this.form.controls[this.base.key].valid;
  }

}
