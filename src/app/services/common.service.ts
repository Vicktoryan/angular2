import { Injectable } from '@angular/core';
import { IUserInformation } from "../interfaces/IUserInformation";
import { Router } from '@angular/router';
import { PageRouterService } from './page-router.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private userInformation: IUserInformation;

  constructor(
    private pageRouterService: PageRouterService,
    private router: Router
  ) {

  }

  static getUserInformation(): IUserInformation {
    const userInfo: string = localStorage.getItem('currentUser') || '{}';
    return JSON.parse(userInfo);
  }

  public login(login: string, password: string) {
    const promise = new Promise((resolve) => {
      if (login === '1' && password === '1') {
        this.setUserInformation();
        resolve(true);
      } else {
        resolve(false);
      }
    });
    return promise;
  }

  public logout(): void {
    localStorage.removeItem('currentUser');
    this.pageRouterService.pageLogin();
    this.router.navigate([ '/login' ]);
  }

  private setUserInformation(): void {
    this.userInformation = {
      userId: '1',
      userName: 'Test name'
    };

    localStorage.setItem('currentUser', JSON.stringify(this.userInformation));
  }
}
