import { Injectable } from '@angular/core';
import { IUserInformation } from "../interfaces/IUserInformation";

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private userInformation: IUserInformation;

  constructor() {

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

  public getUserInformation(): IUserInformation {
    return this.userInformation;
  }

  private setUserInformation(): void {
    this.userInformation = {
      sessionId: '1',
      userName: 'Test name'
    };
  }
}
