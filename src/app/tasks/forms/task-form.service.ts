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
      new FormTextbox({
        key: 'bug-title',
        label: 'Bug Title',
        required: false,
        type: 'text',
        order: 2
      }),
      new FormTextbox({
        key: 'customer',
        label: 'Customer',
        required: false,
        type: 'text',
        order: 3
      }),
      new FormTextbox({
        key: 'workflow',
        label: 'Workflow Step',
        required: false,
        type: 'text',
        order: 4
      }),
      new FormTextbox({
        key: 'description',
        label: 'Description',
        required: false,
        type: 'text',
        order: 5
      }),
      new FormTextbox({
        key: 'comment-text',
        label: 'Last Comment',
        required: false,
        type: 'text',
        order: 6
      }),
      new FormTextbox({
        key: 'comment-author',
        label: 'Last Comment Author',
        required: false,
        type: 'text',
        order: 7
      }),
      new FormTextbox({
        key: 'comment-date',
        label: 'Last Comment Date',
        required: false,
        type: 'text',
        order: 8
      }),
      new FormTextbox({
        key: 'extra-text',
        label: 'Extra Information',
        required: false,
        type: 'text',
        order: 9
      }),
      new FormTextbox({
        key: 'extra-author',
        label: 'Extra Information Author',
        required: false,
        type: 'text',
        order: 10
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
