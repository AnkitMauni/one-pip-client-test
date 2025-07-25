import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  let router= inject(Router)

  const isLoggedIn = !!localStorage.getItem('loginId');
    
  if (!isLoggedIn) {
    router.navigateByUrl('login')
  }

  return isLoggedIn;
};
