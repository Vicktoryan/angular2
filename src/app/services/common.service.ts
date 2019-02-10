import { Injectable } from '@angular/core';
import { UserInformation } from "../interfaces/UserInformation";
import { Router } from '@angular/router';
import { HeaderService } from './header.service';
import { HttpClient } from '@angular/common/http';
import { CommonEnums } from '../enums/CommonEnums';
import { HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public userInformation: UserInformation;

  constructor(
    private headerService: HeaderService,
    private http: HttpClient,
    private router: Router
  ) {

  }

  static getUserInformation(): UserInformation {
    const userInfo: string = localStorage.getItem('currentUser') || '{}';
    return JSON.parse(userInfo);
  }

  public login(login: string, password: string) {
    const promise = new Promise((resolve) => {

      this.http.post(`${CommonEnums.apiUrl}auth/login`, { login, password }).subscribe((token) => {

        if (token) {
          const headers = new HttpHeaders().set('Authorization', token.token);

          this.http.post(`${CommonEnums.apiUrl}auth/userinfo`, null, { headers })
          .subscribe((user : {
            id: string,
            name: {
              first: string,
              last: string
            }
          }) => {
            this.userInformation = {
              userId: user.id,
              firstName: user.name.first,
              lastName: user.name.last,
              userFullName: `${user.name.first} ${user.name.last}`,
              rules: [ '1', '2' ]
            };

            localStorage.setItem('currentUser', JSON.stringify(this.userInformation));
            resolve(true);
          });

        } else {
          resolve(false);
        }
      });
    });
    return promise;
  }

  public logout(): void {
    this.clearUserInfo();
    this.router.navigate([ '' ]);
  }

  public clearUserInfo(): void {
    localStorage.removeItem('currentUser');
  }
}
