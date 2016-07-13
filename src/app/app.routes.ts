import { provideRouter, RouterConfig } from '@angular/router';

import { LoginComponent } from './login';
import { RegisterComponent } from './register';

export const routes: RouterConfig = [
  { 
    path:'login', 
    component: LoginComponent 
  },
  { 
    path:'register', 
    component: RegisterComponent
  },
  { 
    path:'**', 
    redirectTo: 'login'
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];