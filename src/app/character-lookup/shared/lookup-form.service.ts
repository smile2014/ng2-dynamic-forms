import { Injectable } from '@angular/core';

import { 
  FormBase, 
  FormTextbox
} from './../../forms/shared/index';

@Injectable()
export class LookupFormService {

  formInit() {
    let questions: FormBase<any>[] = [
      new FormTextbox({
        key: 'name',
        label: 'Character Name',
        required: true,
        type: 'text',
        order: 1
      })
    ];
    return questions.sort((a, b) => a.order - b.order);  
  }
}
