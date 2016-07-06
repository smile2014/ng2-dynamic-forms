import { Injectable } from '@angular/core';

import { FormBase, FormTextbox, FormDropdown } from './../../forms/shared/index';

@Injectable()
export class TaskFormService {
  addTaskForm() {
    let questions: FormBase<any>[] = [

      new FormTextbox({
        key: 'bug-number',
        label: 'Bug Number',
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
,      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
