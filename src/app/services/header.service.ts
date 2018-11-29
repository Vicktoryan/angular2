import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private subject = new Subject<any>();
  constructor() { }

  public getHeaderObserve(): Observable<any> {
    return this.subject.asObservable();
  }

  public notifyHeader(isShow: boolean = false): void {
    this.subject.next(isShow);
  }
}
