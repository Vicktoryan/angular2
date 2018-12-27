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
    this.loadData();
  }

  public onRemove(): void {
    console.log('Test');
  }

  public onSearch(search: string): void {
    this.loadData(search);
  }

  private loadData(search: string = null): void {
    this.courseListService.getItems(search).then((items: CourseItem[]) => {
      this.items = items;
    });
  }
}
