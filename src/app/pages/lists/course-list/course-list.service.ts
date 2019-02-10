import { Injectable } from '@angular/core';
import { CourseItem } from '../../../interfaces/CourseItem';
import { HttpClient } from '@angular/common/http';
import { CommonEnums } from '../../../enums/CommonEnums';

@Injectable({
  providedIn: 'root'
})
export class CourseListService {
  private items: CourseItem[] = [];
  constructor(
    private http: HttpClient
  ) {
  }

  public getItems(search: string, isMore: boolean) {
    const promise = new Promise((resolve) => {
      let textFragment: string = '';
      if (search) {
        textFragment = `&textFragment=${search}`;
      }
      const start: number = isMore ? this.items.length : 0;
      this.http.get(`${CommonEnums.apiUrl}courses?start=${start}&count=5${textFragment}`).subscribe((items: any[]) => {
        items.forEach((item) => {
          item.duration = item.length;
          item.createDate = item.date;
        });
        console.log(items);
        if (isMore) {
          this.items.push(...items);
        } else {
          this.items = items;
        }
        resolve(this.items);
      });


    });
    return promise;
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
        this.http.get(`${CommonEnums.apiUrl}courses/${id}`)
        .subscribe((item: {
          date: Date,
          length: number,
          createDate: Date,
          duration: number
        }) => {
          item.createDate = item.date;
          item.duration = item.length;
          resolve(item);
        });
      }
    });
    return promise;
  }

  public setItem(item: CourseItem): void {
    console.log(item);
    if (item.id && item.id !== 'new') {
      const itm: CourseItem = this.items.find((item: CourseItem) => item.id === item.id);
      Object.assign(itm, item);
    } else {
      console.log('!!!');
      item.id = (this.items.length+1).toString();
      item.createDate = new Date();
      this.items.push(item);
    }
  }
}
