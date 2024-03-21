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

  signUpForm = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
    ) {}

  onSubmit(): void {
    if(this.signUpForm.valid) {
      this.authService.register(this.signUpForm.value)
      .subscribe({
        next: (response => {
          this.signUpForm.reset();
          this.authService.storeToken(response.token);
          console.log('Register successful!');
          this.router.navigate(['home']);
        }),
        error: (err) => {
          alert(err?.error.message);
        }
      })
    }
  }
}
