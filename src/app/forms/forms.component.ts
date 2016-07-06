import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { NgSwitch } from '@angular/common';
import { FormGroup, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { 
  TextboxComponent, 
  DropdownComponent,
  TextareaComponent,
  CheckboxComponent,
  RadioComponent
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
    CheckboxComponent,
    RadioComponent,
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
  // Accept an array of questions validated through FormBase
  @Input() questions: FormBase<any>[] = [];
  // Error message to be sent down stream
  @Input() error_message: string;
  // Sets EventEmitter to output payLoad
  @Output() formAction = new EventEmitter<string>();
  // Set payLoad string
  payLoad: string;
  // Link form to current FormGroup
  form: FormGroup;
  // Disable Submit
  submit_disabled: boolean;
  // Set private service variable
  constructor(
    private fcs: FormControlService
  ) {

  }

  public ngOnInit() {
    // load questions into form
    this.form = this.fcs.toFormGroup(this.questions);
  }

  public resetPayload() {
    /**
     * NOTE: 
     *  Inputs are caching the previously added value
     */
    // reset payload
    this.payLoad = '';
    // reset form values
    console.log('Form Values (reset) : ', this.form.value);
    Object.keys(this.form.value).map(value =>  delete this.form.value[value] );
    // send payload to parent
    this.sendPayload(this.payLoad);
  }

  public validateForm(controls: any = {}) {
    let requisites: any[] = [];
    Object.keys(controls).forEach((value, index, array) => {
      requisites.push(controls[value].valid);
    })
    // Disable Submit if required fields are not added
    this.submit_disabled = requisites.indexOf(false) > -1 ? true : false;    
  }

  public submitPayload() {
    console.log('Form Values (submit) : ', this.form.value);
    // Removes undefined from form values and stringifies the JSON object
    this.payLoad = JSON.stringify(this.removeUndefined(this.form.value));
    // send payload to parent
    this.sendPayload(this.payLoad);
  }

/**
 * Private Functions
 */

  private sendPayload(payLoad: string){
    // trigger even listener function
    this.formAction.emit(payLoad); 
  }

  private removeUndefined (object: any = {}) {
    let returnObj: any = {};
    // Pft, who needs underscore?
    Object.keys(object).map(key => {
      if(object[key] !== null && object[key] !== '') returnObj[key] = object[key];
    });
    return returnObj;
  }
}
