import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  const router = inject(Router);
  const authService = inject(AuthService);
  const myToken = authService.getToken();

  if (myToken) {
    req.clone({
      setHeaders: {Authorization: `Bearer ${myToken}`}
    })
  }
  
  return next(req).pipe(
    catchError((err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          console.log("Your token has expired");
          router.navigate(['login']);
        }
      }
      return throwError(() => new Error("some other error occured"));
    })
  )
};
