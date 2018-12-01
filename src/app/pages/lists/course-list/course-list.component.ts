import { Component, OnInit } from '@angular/core';
import { CourseListService } from './course-list.service';
import { ICourseItem } from '../../../interfaces/ICourseItem';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: [ './course-list.component.scss' ]
})
export class CourseListComponent implements OnInit {
  public items: ICourseItem[] = [];

  constructor(
    private courseListService: CourseListService
  ) {
  }

  ngOnInit() {
    this.courseListService.getItems().then((items: ICourseItem[]) => {
      console.log(items);
      this.items = items;
    });
  }
}
