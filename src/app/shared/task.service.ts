import { Injectable } from '@angular/core';

import { FormBase, FormTextbox, FormDropdown } from './../forms/shared/index';

@Injectable()
export class TaskService { 
  createForm() {
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
      })

    ];

    return questions.sort((a, b) => a.order - b.order);
  }
  
  getTasks() {
    let tasks: any = {};
    return tasks;
  }

  addTask(payLoad: string) {
    // this method sends the payload to the server7
  }
  
}
