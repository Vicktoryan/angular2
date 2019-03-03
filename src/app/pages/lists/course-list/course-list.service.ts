import { Injectable } from '@angular/core';
import { CourseItem } from '../../../interfaces/CourseItem';
import { HttpClient } from '@angular/common/http';
import { CommonEnums } from '../../../enums/CommonEnums';
import { Observable, Subject } from 'rxjs';
import { LoaderService } from '../../../services/loader.service';

@Injectable({
  providedIn: 'root'
})
export class CourseListService {
  private items: CourseItem[] = [];
  private subject = new Subject<any>();

  constructor(
    private http: HttpClient,
    private loaderService: LoaderService
  ) {
  }

  public getItemsObserve(): Observable<any> {
    return this.subject.asObservable();
  }

  public notifyGetItems(search: string = '', isMore: boolean = false): void {
      let textFragment: string = '';
      if (search) {
        textFragment = `&textFragment=${search}`;
      }
      this.loaderService.startLoader();
      const start: number = isMore ? this.items.length : 0;
      this.http.get(`${CommonEnums.apiUrl}courses?start=${start}&count=5${textFragment}`).subscribe((items: any[]) => {
        items.forEach((item) => {
          item.duration = item.length;
          item.createDate = item.date;
        });
        if (isMore) {
          this.items.push(...items);
        } else {
          this.items = items;
        }
        this.loaderService.endLoader();
        this.subject.next(this.items);
      });
  }

  public getItem(id: string = null) {
    const promise = new Promise((resolve) => {
      if (!id || id === 'new') {
        resolve({
          id: '',
          name: '',
          description: '',
          createDate: new Date(),
          duration: 0,
          startDate: new Date(),
          isTopRated: false
        });
      } else {
        this.loaderService.startLoader();
        this.http.get(`${CommonEnums.apiUrl}courses/${id}`)
        .subscribe((item: {
          date: Date,
          length: number,
          createDate: Date,
          duration: number
        }) => {
          this.loaderService.endLoader();
          item.createDate = item.date;
          item.duration = item.length;
          resolve(item);
        });
      }
    });
    return promise;
  }

  public setItem(item: CourseItem): void {
    if (item.id && item.id !== 'new' && this.items.length > 0) {
      const itm: CourseItem = this.items.find((its: CourseItem) => +its.id === +item.id);
      Object.assign(itm, item);
    } else {
      console.log('!!!');
      item.id = (this.items.length+1).toString();
      item.createDate = new Date();
      this.items.push(item);
    }
  }
}
