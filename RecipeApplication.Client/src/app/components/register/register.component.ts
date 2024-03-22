import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(12)]],
  });

  errorMessageUsername = '';
  errorMessageEmail = '';
  errorMessagePassword = '';

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    ) {
 
    }

    updateErrorMessageUsername() {
      if (this.registerForm.controls.username.hasError('required')) {
        this.errorMessageUsername = 'Username required';
      } else {
        this.errorMessageUsername = '';
      }
    }

    updateErrorMessageEmail() {
      if (this.registerForm.controls.email.hasError('required')) {
        this.errorMessageEmail = 'Email required';
      } else if (this.registerForm.controls.email.hasError('email')) {
        this.errorMessageEmail = 'Not a valid email';
      } else {
        this.errorMessageEmail = '';
      }
    }

    updateErrorMessagePassword() {
      if (this.registerForm.controls.password.hasError('required')) {
        this.errorMessagePassword = 'Password required';
      } else if (this.registerForm.controls.password.hasError('minlength')) {
        this.errorMessagePassword = 'Password must be 12 characters or longer'
        } else {
        this.errorMessagePassword = '';
      }
    }

  onSubmit(): void {
    if(this.registerForm.valid) {
      this.authService.register(this.registerForm.value)
      .subscribe({
        next: (response => {
          this.registerForm.reset();
          this.authService.storeToken(response.token);
          console.log('Register successful!');
          this.router.navigate(['home']);
        }),
        error: (error) => {
          console.log(error);
          if(error.error.message === 'Email already exists!') {
            this.snackBar.open('Email already exists', '', {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
            });
          }
          else if(error.error.message === 'Username already exists!') {
            this.snackBar.open('User already exists', '', {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
            });
          }
        }
      })
    }
  }
}
