import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";
import { IAlert } from "../interfaces/IAlert";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<any>();
  private alertList: IAlert[] = [];

  constructor() {
  }

  public setAlert(alert: IAlert, timeLife: number = null): void {
    if (!this.alertList.some((item: IAlert) => item.message === alert.message)) {
      this.alertList.push(alert);
      if (alert.type !== 'error' || timeLife) {
        setTimeout(() => {
          this.removeAlert(alert);
        }, timeLife || 5000);
      }
      this.subject.next(this.alertList);
    }
  }

  public clearAlert(): void {
    this.alertList = [];
    this.subject.next();
  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  removeAlert(alert: IAlert): void {
    this.alertList.splice(this.alertList.indexOf(alert), 1);
    this.subject.next(this.alertList);
  }
}
