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
        key: 'task',
        label: 'Enter Task',
        required: true,
        type: 'text',
        order: 1
      }),
      new FormDropdown({
        key: 'priority',
        label: 'Priority',
        required: false,
        order: 2,
        options: [{
          key: 'high',
          value: 'High'
        },{
          key: 'medium',
          value: 'Medium'
        },{
          key: 'low',
          value: 'Low'
        }]
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
