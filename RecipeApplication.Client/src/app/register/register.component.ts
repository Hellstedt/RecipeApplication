import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IUser } from '../interfaces/Iuser';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService = inject(AuthService);
  router = inject(Router);

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    this.http.post<any>('https://localhost:7238/api/account/register', 
      this.form.getRawValue()
    ).subscribe((response) => {
      console.log('response', response);
      localStorage.setItem('token', response.token);
      this.authService.currentUseSignal.set(response.user);
      this.router.navigateByUrl('');
    });
  }
}
