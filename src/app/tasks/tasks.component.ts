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
  title = 'Form Component Display';
  questions: any[];
  tasks: any[] = [];
  constructor(taskSvc: TaskFormService) {
    this.questions = taskSvc.addTaskForm();
  }

  public ngOnInit() {
    console.log('Tasks Component Init');
  }

  public formButtonEvent(data: string) {
    if(data === 'reset') return this.resetData();
    this.updateData(data);
  }

  private updateData(data: any = {}){
    this.tasks.push(data);
  }

  private resetData() {
    return this.tasks = [];
  }
}