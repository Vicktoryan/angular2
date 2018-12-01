import { Injectable } from '@angular/core';
import { IUserInformation } from "../interfaces/IUserInformation";
import { Router } from '@angular/router';
import { HeaderService } from './header.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private userInformation: IUserInformation;

  constructor(
    private headerService: HeaderService,
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
    this.clearUserInfo();
    this.router.navigate([ '' ]);
  }

  public clearUserInfo(): void {
    localStorage.removeItem('currentUser');
    //this.headerService.notifyHeader(true);
  }

  private setUserInformation(): void {
    this.userInformation = {
      userId: '1',
      firstName: 'Test',
      lastName: 'Name',
      userFullName: 'Test Name',
      rules: ['1', '2']
    };

    localStorage.setItem('currentUser', JSON.stringify(this.userInformation));
  }
}
