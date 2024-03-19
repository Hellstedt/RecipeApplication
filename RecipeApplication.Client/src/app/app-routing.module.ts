import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './login/login.component';
import { StartingPageComponent } from './components/starting-page/starting-page.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '', 
    component: StartingPageComponent,
    title: 'Starting Page'
  },
  {
    path: 'home', 
    component: HomeComponent,
    title: 'Home Page',
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
