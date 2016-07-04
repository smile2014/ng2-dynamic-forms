/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { FormControlService } from './form-contol.service';

describe('FormControl Service', () => {
  beforeEachProviders(() => [FormControlService]);

  it('should ...',
      inject([FormControlService], (service: FormControlService) => {
    expect(service).toBeTruthy();
  }));
});
