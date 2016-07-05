/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { TaskFormService } from './task-form.service';

describe('TaskForm Service', () => {
  beforeEachProviders(() => [TaskFormService]);

  it('should ...',
      inject([TaskFormService], (service: TaskFormService) => {
    expect(service).toBeTruthy();
  }));
});
