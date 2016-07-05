import { Injectable } from '@angular/core';

import { FormBase, FormTextbox, FormDropdown } from './../../forms/shared/index';

@Injectable()
export class TaskFormService {
  addTaskForm() {
    let questions: FormBase<any>[] = [
      
      new FormTextbox({
        key: 'info',
        label: 'Add Task',
        required: true,
        type: 'text',
        order: 2
      }),

      new FormTextbox({
        key: 'name',
        label: 'Enter Name',
        required: true,
        type: 'text',
        order: 1
      }),

      new FormDropdown({
        key: 'priority',
        label: 'Priority',
        required: true,
        order: 0,
        options: [
          {key: 'high', value: 'High'},
          {key: 'medium', value: 'Medium'},
          {key: 'low', value: 'Low'}
        ]
      })

    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
