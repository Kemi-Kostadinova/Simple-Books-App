import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserActivate } from '../guards/user.activate';

const routes: Routes = [{path: "login", component: LoginComponent},
{path: "register", component: RegisterComponent},
{path: "profile", component: ProfileComponent, canActivate: [UserActivate]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }