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
  title = 'Task Form';
  questions: any[];
  error_message: string;
  tasks: any[] = [];
  constructor(taskSvc: TaskFormService) {
    this.questions = taskSvc.addTaskForm();
  }

  public ngOnInit() {
    console.log('Tasks Component Init');
  }

  public formAction(payLoad: string) {
    let payLoadParsed: any = JSON.parse(payLoad);
    this.validatePayLoad(payLoadParsed);
  }

  private updatePayload(payLoad: any = {}){
    this.tasks.push(payLoad);
  }

  private validatePayLoad(payLoad: any = {}) {
    switch(payLoad){
      // Create logic to either Update or Reset payload
    }
  }
  
  private handleError (message: string){
    this.error_message = message;
  }

  private resetPayload() {
    console.log('reset data');
    if(this.error_message.length > 0 ) this.error_message = '';
    return this.tasks = [];
  }
}