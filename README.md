# Dynamicforms

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.8.

## If you going to read anything, read this.

The MVP (Minimum Viable Product) for this repository is a simple form builder that will build `textbox` forms and render the data. 
Will be working on adding more form elements like `textarea, dropdown, checkboxes, etc`. 

### How to add more textbox elements

To add textbox elements you can havigated to `src/app/shared/task.service.ts`, you can copy and paste this code: 
```javascript
      new FormTextbox({
        key: '{{EDIT THIS}}',
        label: '{{EDIT THIS}}',
        required: {{EDIT THIS}},
        type: '{{EDIT THIS}}',
        order: {{EDIT THIS}}
      })
```

To know the expected data types for each entry, navigate to `src/app/forms/form-base.ts`

*NOTE*: This way to add `textbox` elements will be the same to add other elements, what will changed is the declaration
Example:

```javacript
  new FormDropbox({...});
  new FormCheckboxGroup({...});
```

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
