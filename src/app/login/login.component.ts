import { Component, OnInit } from '@angular/core';
import { FormsComponent } from './../forms';
import { LoginFormService } from './shared/index';
@Component({
  moduleId: module.id,
  selector: 'login-form',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [
    FormsComponent
  ],
  providers: [
    LoginFormService
  ]
})
export class LoginComponent implements OnInit {
  title = 'Login Form';
  questions: any[];
  service: any;
  credentials: any = {};
  error: string;
  
  constructor(private loginSvc: LoginFormService) {
    this.questions = loginSvc.formInit();
  }

  public ngOnInit() {
    console.log('Login Component Init');
  }

  public formAction (payLoad: string) {
    this.credentials = JSON.parse(payLoad);
    this.validatePayload(this.credentials);
  }
  
  private runAuth (email: string, password: string) {

  }

  private validatePayload (payLoad: string | any) {
    if(payLoad === '') return this.error = 'Something went wrong';
    // this.runAuth('email', 'password');
  }
}
