import { Component } from '@angular/core';
import { TasksComponent } from './tasks';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    TasksComponent
  ]
})
export class AppComponent {
  title = 'angular2 task list';
}
