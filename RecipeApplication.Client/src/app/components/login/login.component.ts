import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit { 
  fb = inject(FormBuilder);

  loginForm = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  errorMessageUsername = '';
  errorMessagePassword = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    ) {}

    ngOnInit(): void {
      if (this.authService.isLoggedIn()) {
        this.router.navigate(['dashboard']);
      }
    }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.authService.logIn(this.loginForm.value).subscribe({
        next: (response) => {
          this.loginForm.reset();
          this.authService.storeToken(response.token);
          console.log('Login successful!');
          this.router.navigate(['dashboard']);
        },
        error: (err) => {
          alert(err?.error.message)
        }
      })
    }
  }
}