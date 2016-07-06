import { Injectable } from '@angular/core';

import { 
  FormBase, 
  FormTextbox, 
  FormCheckbox 
} from './../../forms/shared/index';

@Injectable()
export class LoginFormService {

  formInit() {
    let questions: FormBase<any>[] = [
      new FormTextbox({
        key: 'email',
        label: 'Email',
        required: true,
        type: 'text',
        order: 1
      }),
      new FormTextbox({
        key: 'password',
        label: 'Password',
        required: true,
        type: 'password',
        order: 2
      }),
      new FormCheckbox({
        key: 'remember_me',
        label: 'Remember Me',
        required: false,
        order: 3
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }

}
