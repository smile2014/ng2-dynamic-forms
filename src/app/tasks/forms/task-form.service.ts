import { Injectable } from '@angular/core';

import { 
  FormBase, 
  FormTextbox, 
  FormDropdown,
  FormTextarea,
  FormCheckbox,
  FormRadioButton
} from './../../forms/shared/index';

@Injectable()
export class TaskFormService {
  addTaskForm() {
    let questions: FormBase<any>[] = [

      new FormTextbox({
        key: 'textbox',
        label: 'Text Box',
        required: false,
        type: 'text',
        order: 1
      }),
      new FormDropdown({
        key: 'dropdown',
        label: 'Drop Down',
        required: false,
        order: 2,
        options: [ {
          key: 'foo',
          value: 'Foo'
        },{
          key: 'bar',
          value: 'Bar'
        }]
      }),
      new FormTextarea({
        key: 'textarea',
        label: 'Text Area',
        required: false,
        order:3,
        type: 'comment'
      }),
      new FormCheckbox({
        key: 'checkbox',
        label: 'Check Box',
        order: 4
      }),
      new FormRadioButton({
        key: 'radio-button',
        label: 'Radio Button',
        order: 5
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
