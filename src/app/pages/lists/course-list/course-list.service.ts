import { Injectable } from '@angular/core';
import { CourseItem } from '../../../interfaces/CourseItem';

@Injectable({
  providedIn: 'root'
})
export class CourseListService {
  private items: CourseItem[] = [ {
    id: '1',
    name: '1',
    description: '1234',
    createDate: new Date(),
    duration: 10,
    startDate: null,
    topRate: false
  }, {
    id: '2',
    name: '2',
    description: '456567',
    createDate: new Date(),
    duration: 100,
    startDate: new Date('12/12/2018'),
    topRate: true
  }, {
    id: '3',
    name: '4562',
    description: '456567',
    createDate: new Date(),
    duration: 100,
    startDate: new Date(),
    topRate: true
  } ];

  constructor() {
  }

  public getItems(search: string) {
    const promise = new Promise((resolve) => {
      if (search) {
        this.items = this.items.filter((item: CourseItem) => item.name.toLowerCase().includes(search.toLowerCase()));
      }

      resolve(this.items);
    });
    return promise;
  }

  public getItem(id: string): CourseItem {
    const item: CourseItem = this.items.find((item: CourseItem) => item.id === id);
    if (item === undefined || id === 'new') return {
      id: '',
      name: '',
      description: '',
      createDate: new Date(),
      duration: 0,
      startDate: new Date(),
      topRate: false
    };

    return item;
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
