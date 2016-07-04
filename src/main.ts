import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

if (environment.production) {
  enableProdMode();
}

try{
  bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms()
  ]);
} catch (error) {
  console.error(`Error bootsrapping applications`, error);
}

