import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Breadcrumb } from '../interfaces/Breadcrumb';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private breadcrumbs: Breadcrumb[] = [];
  private subject = new Subject<any>();

  constructor(
    private router: Router
  ) {
    this.initBreadcrumbs();
  }

  public getBreadcrumbObserve(): Observable<any> {
    return this.subject.asObservable();
  }

  public getItems(): void {
    this.subject.next(this.breadcrumbs);
  }

  public clear(): void {
    this.breadcrumbs = [];
    this.getItems();
  }

  public setItem(name: string, url: string): void {
    this.breadcrumbs.push({
      name,
      url
    });
  }

  public initBreadcrumbs(): void {
    if (this.breadcrumbs.length === 0) {
      this.breadcrumbs.push({
        name: 'Courses',
        url: '/course-list'
      });
    }
    this.getItems();
  }
}
