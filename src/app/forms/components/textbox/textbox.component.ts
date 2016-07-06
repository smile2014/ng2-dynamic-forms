import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { FormBase } from './../../shared/index';

@Component({
  moduleId: module.id,
  selector: 'app-form-textbox',
  templateUrl: 'textbox.component.html',
  styleUrls: ['textbox.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class TextboxComponent implements OnInit{
  @Input() question: FormBase<any>;
  @Input() form: FormGroup;
  constructor() {}
  
  ngOnInit(){
    if(this.question.type === 'checkbox'){
      throw new Error('Please use FormCheckbox component for checklists');
    }
  } 
  
  get isValid() {
    return this.form.controls[this.question.key].valid;
  }

}
