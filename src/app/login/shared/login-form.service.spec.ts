/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { LoginFormService } from './login-form.service';

describe('LoginForm Service', () => {
  beforeEachProviders(() => [LoginFormService]);

  it('should ...',
      inject([LoginFormService], (service: LoginFormService) => {
    expect(service).toBeTruthy();
  }));
});
