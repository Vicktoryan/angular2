import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageRouterService {
  private subject = new Subject<any>();
  constructor() { }

  public anotherPage(page: string): void {
    this.subject.next(page);
  }

  public getRouterObserve(): Observable<any> {
    return this.subject.asObservable();
  }

  public pageLogin(): void {
    this.subject.next('login');
  }


}
