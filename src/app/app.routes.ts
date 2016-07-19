import { provideRouter, RouterConfig } from '@angular/router'

import { LoginComponent } from './login'
import { RegisterComponent } from './register'
import { CharacterLookupComponent } from './character-lookup'

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
    path: 'look-up',
    component: CharacterLookupComponent
  },
  { 
    path:'**', 
    redirectTo: 'login'
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];