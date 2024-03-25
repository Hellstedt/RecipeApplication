import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const authService = inject(AuthService);

  const localData = authService.getToken();

  if(localData != null) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};