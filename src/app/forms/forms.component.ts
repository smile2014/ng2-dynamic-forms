import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { NgSwitch } from '@angular/common';
import { FormGroup, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { 
  TextboxComponent, 
  DropdownComponent,
  TextareaComponent 
} from './components/index';
import { FormBase, FormControlService } from './shared/index';

function removeUndefined (object: any = {}){
  let returnObj: any = {};
  console.log('Removing Undefined', object);
  for(let key in object){
    if(object[key] !== null) {
      returnObj[key] = object[key];  
    }
  }
  return returnObj;
}

@Component({
  moduleId: module.id,
  selector: 'app-forms',
  templateUrl: 'forms.component.html',
  styleUrls: ['forms.component.css'],
  directives: [
    NgSwitch,
    TextboxComponent,
    DropdownComponent,
    TextareaComponent,
    REACTIVE_FORM_DIRECTIVES
  ],
  providers: [
    FormControlService
  ]
})
/**
 * Inputs a list of questions
 * Outputs payLoad string
 */
export class FormsComponent implements OnInit {
  @Input() questions: FormBase<any>[] = [];
  @Output() formButtonEvent = new EventEmitter<string>();
  payLoad: string;
  form: FormGroup;
  tasks: any[] = [];

  constructor(private fcs: FormControlService) {}

  public ngOnInit() {
    this.form = this.fcs.toFormGroup(this.questions);
  }

  public resetPayload() {
    console.log('resetting payload');
    this.payLoad = 'reset'; 
    this.sendPayload(this.payLoad);
  }

  public onSubmit() {
    let value: any = {};    
    value = removeUndefined(this.form.value);
    console.log('Removed undefined?', value);
    this.payLoad = JSON.stringify(value);
    this.sendPayload(JSON.stringify(value));
  }

/**
 * Private Functions
 */

  private sendPayload(payload: string){
   this.formButtonEvent.emit(payload); 
  }
}
