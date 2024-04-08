import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { StartingPageComponent } from './components/starting-page/starting-page.component';
import { authGuard } from './guards/auth.guard';
import { CookbookComponent } from './components/cookbook/cookbook.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/login',
    pathMatch:'full'
  },
  {
    path: 'start', 
    component: StartingPageComponent,
    title: 'Starting Page'
  },
  {
    path: 'dashboard', 
    component: DashboardComponent,
    title: 'Dashboard',
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
        title: 'home',
      },
      {
        path: 'cookbook',
        component: CookbookComponent,
        title: 'cookbook',
      },
      {
        path: '', 
        redirectTo: '/dashboard/home',
        pathMatch:'full'
      },
    ],
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
