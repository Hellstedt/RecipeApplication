import { Injectable, signal } from '@angular/core';
import { IUser } from '../interfaces/Iuser';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = 'https://localhost:7238/api/account/'

  constructor(
    private http: HttpClient,
    private router: Router,
    ) { }

  register(registerDto: any) {
    return this.http.post<any>(`${this.baseUrl}register`, registerDto)
  }

  logIn(loginDto: any) {
    return this.http.post<any>(`${this.baseUrl}login`, loginDto)
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  storeToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue)
  }

  getToken() {
    return localStorage.getItem('token')
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token')
  }

}
