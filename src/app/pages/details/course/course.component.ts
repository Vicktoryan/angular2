import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseListService } from '../../lists/course-list/course-list.service';
import { CourseItem } from '../../../interfaces/CourseItem';
import { DatePipe } from '@angular/common';
import { BreadcrumbService } from '../../../services/breadcrumb.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: [ './course.component.scss' ],
  providers: [ DatePipe ]
})
export class CourseComponent implements OnInit {
  @Output() title: EventEmitter<string> = new EventEmitter<string>();
  @Output() description: EventEmitter<string> = new EventEmitter<string>();
  @Output() date: EventEmitter<string> = new EventEmitter<string>();
  @Output() duration: EventEmitter<string> = new EventEmitter<string>();

  id: string;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private courseListService: CourseListService,
    private breadcrumbService: BreadcrumbService
  ) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params[ 'id' ]; // (+) converts string 'id' to a number
      if (this.id) {
        const item: CourseItem = this.courseListService.getItem(this.id).then((item: CourseItem) => {
          console.log(item);
          this.title = item.name;
          this.description = item.description;
          this.date = this.datePipe.transform(new Date(item.createDate), 'MM.dd.yyyy');
          this.duration = item.duration;
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public onCancel(): void {
    this.breadcrumbService.goBack();
  }

  public onSave(): void {
    this.courseListService.setItem({
      id: <string>this.id,
      name: <string>this.title,
      description: <string>this.description,
      createDate: <Date>new Date(),
      startDate: <Date>new Date(this.date),
      duration: <number>this.duration,
      isTopRated: false
    });
    this.breadcrumbService.goBack();
  }
}
