import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CommonService } from '../app/services/common.service';
import { HeaderService } from '../app/services/header.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private headerService: HeaderService,
    private commonService: CommonService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.headerService.notifyHeader(true);
    return true;

    if (localStorage.getItem('currentUser')) {
      this.headerService.notifyHeader(true);
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.commonService.logout();
    return false;
  }
}
