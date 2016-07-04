import { Component, Input, OnInit } from '@angular/core';
import { NgSwitch } from '@angular/common';
import { FormGroup, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { FormBase } from './form-base';
import { TextboxComponent, DropdownComponent } from './components/index';
import { FormControlService } from './shared/index';

@Component({
  moduleId: module.id,
  selector: 'app-forms',
  templateUrl: 'forms.component.html',
  styleUrls: ['forms.component.css'],
  directives: [
    NgSwitch,
    TextboxComponent,
    DropdownComponent,
    REACTIVE_FORM_DIRECTIVES
  ],
  providers: [
    FormControlService
  ]
})
export class FormsComponent implements OnInit {
  @Input() questions: FormBase<any>[] = [];
  form: FormGroup;
  payLoad: string;
  tasks: any[] = [];
  
  constructor(private fcs: FormControlService) {}

  ngOnInit() {
    console.log('questions: ', this.questions);
    this.form = this.fcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    this.tasks.push(this.payLoad);
    console.log('Tasks: ', this.tasks);
  }
}
