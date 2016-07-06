import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { NgSwitch } from '@angular/common';
import { FormGroup, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { 
  TextboxComponent, 
  DropdownComponent,
  TextareaComponent 
} from './components/index';
import { FormBase, FormControlService } from './shared/index';

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
    // load questions into form
    this.form = this.fcs.toFormGroup(this.questions);
  }

  public resetPayload() {
    // reset payload
    this.payLoad = '';
    // reset form values
    Object.keys(this.form.value).map(value =>  this.form.value[value] = null );
    // send payload to parent
    this.sendPayload(this.payLoad);
  }

  public onSubmit() {
    // Removes undefined from form values and stringifies the JSON object
    this.payLoad = JSON.stringify(this.removeUndefined(this.form.value));
    // send payload to parent
    this.sendPayload(this.payLoad);
  }

/**
 * Private Functions
 */
  private sendPayload(payload: string){
    // trigger even listener function
    this.formButtonEvent.emit(payload); 
  }

  private removeUndefined (object: any = {}) {
    let returnObj: any = {};
    // Pft, who needs underscore?
    Object.keys(object).map(key => {
      if(object[key] !== null && object[key] !== '') returnObj[key] = object[key]
    });
    return returnObj;
  }
}
