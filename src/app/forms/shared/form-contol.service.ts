import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormBase } from './../form-base';

@Injectable()
export class FormControlService {

  constructor() {}

  toFormGroup(questions: FormBase<any>[]){
    let group: any = {};
    questions.forEach(question => {
      group[question.key] = question.required ? 
        new FormControl(question.value || '', Validators.required) : 
        new FormControl(question.value);
    })
    console.log('FormGroup >>>>', group);
    return new FormGroup(group);
  }

}
