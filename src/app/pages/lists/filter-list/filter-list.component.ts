import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CourseListService } from '../course-list/course-list.service';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss']
})
export class FilterListComponent implements OnInit {
  searchValue: string;
  constructor(
    private courseListService: CourseListService
  ) { }

  public ngOnInit() {
  }

  public onSearch(): void {
    this.courseListService.notifyGetItems(this.searchValue);
  }
}
