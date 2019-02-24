import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private subject = new Subject<any>();

  constructor() {

  }

  public getLoader(): Observable<any> {
    return this.subject.asObservable();
  }

  public startLoader(): void {
    this.subject.next(true);
  }

  public endLoader(): void {
    this.subject.next(false);
  }
}
