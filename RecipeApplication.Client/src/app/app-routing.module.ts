import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    title: 'Home Page'
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
