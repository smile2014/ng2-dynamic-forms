/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ErrorMessageComponent } from './error-message.component';

describe('Component: ErrorMessage', () => {
  it('should create an instance', () => {
    let component = new ErrorMessageComponent();
    expect(component).toBeTruthy();
  });
});
