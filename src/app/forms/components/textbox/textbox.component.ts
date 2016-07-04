import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { FormBase } from './../../form-base';

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

  ngOnInit() {
    console.log('Init Textbox', this.question, this.form)
  }
  get isValid() {
    return this.form.controls[this.question.key].valid;
  }

}
