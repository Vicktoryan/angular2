import { Injectable } from '@angular/core';
import { ICourseItem } from '../../../interfaces/ICourseItem';

@Injectable({
  providedIn: 'root'
})
export class CourseListService {

  constructor() {
  }

  public getItems() {
    const promise = new Promise((resolve) => {
      const items: ICourseItem[] = [{
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
        startDate: null
      }];
      resolve(items);
    });
    return promise;
  }
}
