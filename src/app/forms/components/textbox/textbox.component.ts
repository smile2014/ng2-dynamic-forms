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
    switch(this.question.type){
      case 'checkbox':
        this.error('For checkboxes use FormCheckbox component');
        break;
      case 'radio':
        this.error('For radio buttons use FormRadio component')
        break;
    }
  } 
  
  get isValid() {
    return this.form.controls[this.question.key].valid;
  }

  private error(message: string){
    throw new Error(message);
  }

}
