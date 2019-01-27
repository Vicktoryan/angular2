import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseListService } from '../../lists/course-list/course-list.service';
import { CourseItem } from '../../../interfaces/CourseItem';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: [ './course.component.scss' ],
  providers: [DatePipe]
})
export class CourseComponent implements OnInit {
  @Output() title = new EventEmitter();
  @Output() description = new EventEmitter();
  @Output() date = new EventEmitter();
  @Output() duration = new EventEmitter();

  id: string;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private courseListService: CourseListService
  ) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params[ 'id' ]; // (+) converts string 'id' to a number
      if (this.id) {
        const item: CourseItem = this.courseListService.getItem(this.id);
        this.title = item.name;
        this.description = item.description;
        this.date = this.datePipe.transform(new Date(item.startDate), 'MM.dd.yyyy');
        this.duration = item.duration;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
