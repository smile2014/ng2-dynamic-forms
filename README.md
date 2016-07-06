# Dynamicforms
## If you going to read anything, read this.

This is a study-case repository that will be updated as new things emerge. 
The purpose of this repository is to learn how to create dynamic, reusable components such as `forms`, `tables`, `lists`.

### Usage:

Example of how to use the `forms` components can be found in [src/app/tasks](https://github.com/baruchvlz/ng2-dynamic-forms/tree/master/src/app/tasks).

### Todo List:
- Form Components:
  - [ ] Allow to select type of form from predetermined list `Example: default, submit (login, register, etc..) , collection (multiple entries of the same form)` Each with have specific functionality.
  - [x] Textbox 
  - [x] Dropdown
    - [ ] Allow for dropdowns to be routes ( maybe? )
  - [x] Textarea
    - [ ] Allow max characters
    - [ ] Allow for not resize
  - [x] Checkbox
  - [ ] Checkbox Group ( multiple checkbox components )
  - [x] Radio
  - [ ] Radio Group ( multiple radio components )
  - [ ] Labels ( To be called within each components )
  - [ ] File ( Upload functionality, maybe? )
  - [ ] Buttons
  - [ ] Error Messages
    - Error messages are only working for textbox component

( If missing any please let me know )

## Known issues: 
  - Reset button is doing some weird interaction with the form where it will cache the value and re-apply it on save
  - Dropdown will not default to first value until after it has been clicked on
  - Submitting a form doesn't validate required fields

# Angular CLI README:
This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.8.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/route/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
