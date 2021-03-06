import { Component, OnInit } from '@angular/core';
import { CourseListService } from './course-list.service';
import { CourseItem } from '../../../interfaces/CourseItem';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: [ './course-list.component.scss' ]
})
export class CourseListComponent implements OnInit {
  public items: CourseItem[] = [];

  constructor(
    private courseListService: CourseListService
  ) {
  }

  public ngOnInit() {
    this.courseListService.getItems().then((items: CourseItem[]) => {
      this.items = items;
    });
  }
}
