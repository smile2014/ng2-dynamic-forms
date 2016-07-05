import { Component, OnInit } from '@angular/core';
import { FormsComponent } from './../forms';
import { TaskService } from './../shared/index'

@Component({
  moduleId: module.id,
  selector: 'task-form',
  templateUrl: 'tasks.component.html',
  styleUrls: ['tasks.component.css'],
  directives: [
    FormsComponent
  ],
  providers: [
    TaskService
  ]
})
export class TasksComponent implements OnInit {
  questions: any[];
  tasks: any[];
  constructor(taskSvc: TaskService) {
    this.questions = taskSvc.createForm();
    this.tasks = taskSvc.getTasks();
  }

  ngOnInit() {
    console.log('Task Form Init')
  }

  onTaskSubmit(data: string) {
    console.log('Data', data);
  }

}