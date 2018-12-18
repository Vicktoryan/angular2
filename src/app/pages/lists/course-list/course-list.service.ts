import { Injectable } from '@angular/core';
import { CourseItem } from '../../../interfaces/CourseItem';

@Injectable({
  providedIn: 'root'
})
export class CourseListService {

  constructor() {
  }

  public getItems() {
    const promise = new Promise((resolve) => {
      const items: CourseItem[] = [{
        id: '1',
        name: '1',
        description: '1234',
        createDate: new Date(),
        duration: 10,
        startDate: null
      }, {
        id: '2',
        name: '2',
        description: '456567',
        createDate: new Date(),
        duration: 100,
        startDate: new Date('12/12/2018')
      }];
      resolve(items);
    });
    return promise;
  }
}
