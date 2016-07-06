/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { RadioComponent } from './radio.component';

describe('Component: Radio', () => {
  it('should create an instance', () => {
    let component = new RadioComponent();
    expect(component).toBeTruthy();
  });
});
