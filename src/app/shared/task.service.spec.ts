/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { TaskService } from './task.service';

describe('Task Service', () => {
  beforeEachProviders(() => [TaskService]);

  it('should ...',
      inject([TaskService], (service: TaskService) => {
    expect(service).toBeTruthy();
  }));
});
