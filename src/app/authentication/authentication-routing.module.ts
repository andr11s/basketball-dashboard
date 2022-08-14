import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationLoginComponent } from './authentication-login/authentication-login.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
