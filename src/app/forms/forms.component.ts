import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { NgSwitch } from '@angular/common';
import { FormGroup, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { TextboxComponent, DropdownComponent } from './components/index';
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
    REACTIVE_FORM_DIRECTIVES
  ],
  providers: [
    FormControlService
  ]
})
export class FormsComponent implements OnInit {
  @Input() questions: FormBase<any>[] = [];
  @Output() onFormSubmit = new EventEmitter<string>();
  payLoad: string;
  form: FormGroup;
  tasks: any[] = [];
  
  constructor(private fcs: FormControlService) {}

  ngOnInit() {
    this.form = this.fcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    this.tasks.push(this.payLoad);
    this.onFormSubmit.emit(this.payLoad);
    console.log('Tasks: ', this.tasks.map(x => JSON.parse(x)));
  }
}
