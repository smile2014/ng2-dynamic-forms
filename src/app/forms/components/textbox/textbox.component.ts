import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { FormBase } from './../../shared/index';
import { ErrorMessageComponent } from './../error-message/error-message.component';

@Component({
  moduleId: module.id,
  selector: 'app-form-textbox',
  templateUrl: 'textbox.component.html',
  styleUrls: ['textbox.component.css'],
  directives: [
    ErrorMessageComponent,
    REACTIVE_FORM_DIRECTIVES
  ]
})
export class TextboxComponent implements OnInit{
  @Input() question: FormBase<any>;
  @Input() error_message: string;
  @Input() form: FormGroup;
  @Output() validateForm = new EventEmitter();
  constructor() {}
  
  ngOnInit(){
    switch(this.question.type){
      case 'checkbox':
        this.error('For checkboxes use FormCheckbox component');
        break;
      case 'radio':
        this.error('For radio buttons use FormRadio component');
        break;
    }
    this.validateInputs();
  } 

  validateInputs() {
    let controls: any = this.form.controls;
    this.error_message = !controls[this.question.key].valid ? `${this.question.label} is required` : ``;
    this.validateForm.emit(controls);
  }

  private error(message: string){
    throw new Error(message);
  }

}
