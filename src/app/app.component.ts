import { Component } from '@angular/core';
import { TasksComponent } from './tasks';
import { LoginComponent } from './login';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    TasksComponent,
    LoginComponent
  ]
})
export class AppComponent {
  title = 'angular2 form creator';
}
