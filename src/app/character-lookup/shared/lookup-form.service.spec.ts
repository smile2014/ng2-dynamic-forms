/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { LookupFormService } from './lookup-form.service';

describe('LookupForm Service', () => {
  beforeEachProviders(() => [LookupFormService]);

  it('should ...',
      inject([LookupFormService], (service: LookupFormService) => {
    expect(service).toBeTruthy();
  }));
});
