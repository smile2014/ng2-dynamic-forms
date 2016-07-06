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
  title = 'Ominto Bug Report';
  questions: any[];
  tasks: any[] = [];
  constructor(taskSvc: TaskFormService) {
    this.questions = taskSvc.addTaskForm();
  }

  public ngOnInit() {
    console.log('Tasks Component Init');
  }

  public formButtonEvent(data: string) {
    let dataJSON = JSON.parse(data);
    this.addData(dataJSON);
  }

  private addData(data: any = {}){
    console.log('Data: ', data);
    console.log('Current Tasks: ', this.tasks);
    this.tasks.push(data);
    console.log('Updated Tasks: ', this.tasks);
  }
}