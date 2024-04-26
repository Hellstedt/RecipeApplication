import { HttpErrorResponse, HttpInterceptor, HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  const router = inject(Router);
  const authService = inject(AuthService);
  const myToken = authService.getToken();
  
  
  const cloneRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${myToken}`
    }
  });
  
  return next(cloneRequest).pipe(
    catchError((error: any) => {
      if(error instanceof HttpErrorResponse){
        if(error.status === 401) {
          console.log("Token is expired, please login again");
          authService.logOut();
        }
      }
      return throwError(() => new Error("Some other error occured"));
    })
  )
};
