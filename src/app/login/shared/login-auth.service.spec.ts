/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { LoginAuthService } from './login-auth.service';

describe('LoginAuth Service', () => {
  beforeEachProviders(() => [LoginAuthService]);

  it('should ...',
      inject([LoginAuthService], (service: LoginAuthService) => {
    expect(service).toBeTruthy();
  }));
});
