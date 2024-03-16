import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IUser } from '../interfaces/Iuser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  fb = inject(FormBuilder);
  http = inject(HttpClient);

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    this.http.post<{user: IUser}>('https://localhost:7238/api/account/register', 
    {
      user: this.form.getRawValue(),
    }).subscribe((response) => {
      console.log('response', response);
    });
  }
}
