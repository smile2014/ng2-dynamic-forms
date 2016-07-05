import { Component, OnInit } from '@angular/core';
import { FormsComponent } from './../forms';
import { TaskFormService } from './forms/index';

@Component({
  moduleId: module.id,
  selector: 'task-form',
  templateUrl: 'tasks.component.html',
  styleUrls: ['tasks.component.css'],
  directives: [
    FormsComponent
  ],
  providers: [
    TaskFormService
  ]
})
export class TasksComponent implements OnInit {
  questions: any[];
  tasks: any[] = [];
  constructor(taskSvc: TaskFormService) {
    this.questions = taskSvc.addTaskForm();
  }

  ngOnInit() {
    console.log('Task Form Init')
  }

  onFormSubmit(data: string) {
    this.tasks.push(JSON.parse(data));
    console.log('Data', JSON.parse(data));
  }

}