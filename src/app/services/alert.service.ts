import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";
import { Alert } from "../interfaces/Alert";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<any>();
  private alertList: Alert[] = [];

  constructor() {
  }

  public setAlert(alert: Alert, timeLife: number = null): void {
    if (!this.alertList.some((item: Alert) => item.message === alert.message)) {
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

  removeAlert(alert: Alert): void {
    this.alertList.splice(this.alertList.indexOf(alert), 1);
    this.subject.next(this.alertList);
  }
}
