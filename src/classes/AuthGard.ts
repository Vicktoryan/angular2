import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IUserInformation } from '../app/interfaces/IUserInformation';
import { CommonService } from '../app/services/common.service';
import { PageRouterService } from '../app/services/page-router.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private pageRouterService: PageRouterService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const userInfo: IUserInformation = CommonService.getUserInformation();
    console.log(userInfo);
    if (localStorage.getItem('currentUser')) {
      this.pageRouterService.anotherPage('');
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.pageRouterService.pageLogin();
    this.router.navigate(['/login']);
    return false;
  }
}
