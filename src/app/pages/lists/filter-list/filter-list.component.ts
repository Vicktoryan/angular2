import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CourseListService } from '../course-list/course-list.service';
import { map, debounceTime } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: [ './filter-list.component.scss' ]
})
export class FilterListComponent implements OnInit {
  constructor(
    private courseListService: CourseListService
  ) {
  }

  public ngOnInit() {
    const input = document.getElementById('textInput');

    const typeahead = fromEvent(input, 'keyup').pipe(
      map((e: KeyboardEvent) => e.target.value),
      debounceTime(500)
    );

    typeahead.subscribe(data => {
      console.log(data);
      if (data.length > 3) {
        this.courseListService.notifyGetItems(data);
      }
    });
  }
}
