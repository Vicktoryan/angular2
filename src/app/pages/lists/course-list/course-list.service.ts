import { Injectable } from '@angular/core';
import { CourseItem } from '../../../interfaces/CourseItem';
import { HttpClient } from '@angular/common/http';
import { CommonEnums } from '../../../enums/CommonEnums';
import { Observable, Subject } from 'rxjs';
import { LoaderService } from '../../../services/loader.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers'
import * as actions from '../../../actions/course-list.actions'
import * as actionsDetail from '../../../actions/course.actions'

@Injectable({
  providedIn: 'root'
})
export class CourseListService {
  private items: CourseItem[] = [];
  private subject = new Subject<any>();

  constructor(
    private http: HttpClient,
    private loaderService: LoaderService,
    private store: Store<fromRoot.State>
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

      //this.store.dispatch(new actions.LoadCourseLists());

      items.forEach((item) => {
        item.duration = item.length;
        item.createDate = item.date;
      });
      if (isMore) {
        //this.items.push(...items);
        this.store.dispatch({ type: actions.CourseListActionTypes.AddCourseLists, itemList: items });
      } else {
        //this.items = items;
        this.store.dispatch({ type: actions.CourseListActionTypes.LoadCourseLists, itemList: items });
      }
      this.loaderService.endLoader();
      //this.subject.next(this.items);
    });
  }

  public getItem(id: string = null) {
    if (!id || id === 'new') {
      this.store.dispatch({ type: actionsDetail.CourseActionTypes.AddCourse });
    } else {
      this.http.get(`${CommonEnums.apiUrl}courses/${id}`)
      .subscribe((
        item: {
          date: Date,
          length: number,
          createDate: Date,
          duration: number
        }
      ) => {
        this.loaderService.endLoader();
        item.createDate = item.date;
        item.duration = item.length;
        this.store.dispatch({ type: actionsDetail.CourseActionTypes.LoadCourse, item });
      });
    }
  }

  public setItem(item: CourseItem): void {
    if (item.id && item.id !== 'new' && this.items.length > 0) {
      const itm: CourseItem = this.items.find((its: CourseItem) => +its.id === +item.id);
      Object.assign(itm, item);
    } else {
      console.log('!!!');
      item.id = (this.items.length + 1).toString();
      item.createDate = new Date();
      this.items.push(item);
    }
  }
}
