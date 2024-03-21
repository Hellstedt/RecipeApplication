import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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
    private router: Router
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
        this.errorMessagePassword = 'Password to short'
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
        error: (err) => {
          alert(err?.error.message);
        }
      })
    }
  }
}
