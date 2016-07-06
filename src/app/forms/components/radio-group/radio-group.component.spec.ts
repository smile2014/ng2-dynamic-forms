/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { RadioGroupComponent } from './radio-group.component';

describe('Component: RadioGroup', () => {
  it('should create an instance', () => {
    let component = new RadioGroupComponent();
    expect(component).toBeTruthy();
  });
});
