import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/home/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { StartingPageComponent } from './components/starting-page/starting-page.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '', 
    component: StartingPageComponent,
    title: 'Starting Page'
  },
  {
    path: 'dashboard', 
    component: DashboardComponent,
    title: 'Dashboard',
    canActivate: [authGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register Page',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login Page',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
