import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseListService } from '../../lists/course-list/course-list.service';
import { CourseItem } from '../../../interfaces/CourseItem';
import { DatePipe } from '@angular/common';
import { BreadcrumbService } from '../../../services/breadcrumb.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: [ './course.component.scss' ],
  providers: [ DatePipe ]
})
export class CourseComponent implements OnInit {
  private id: string;
  private sub: any;
  private registerForm: FormGroup;
  private submitted = false;
  public authors: {}[] = []
  constructor(
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private courseListService: CourseListService,
    private breadcrumbService: BreadcrumbService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      title: [ '' ],
      date: [ '' ],
      duration: [ '' ],
      description: [ '' ]
    });

    this.sub = this.route.params.subscribe(params => {
      this.id = params[ 'id' ]; // (+) converts string 'id' to a number
      if (this.id) {
        const item: CourseItem = this.courseListService.getItem(this.id).then((item: CourseItem) => {
          this.registerForm = new FormGroup({
            title: new FormControl(item.name, Validators.required),
            date: new FormControl(this.datePipe.transform(new Date(item.createDate), 'MM.dd.yyyy'), Validators.required),
            duration: new FormControl(item.duration, Validators.required),
            description: new FormControl(item.description, Validators.required)
          });
          this.authors = item.authors;
        });
      }
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public onCancel(): void {
    this.breadcrumbService.goBack();
  }

  public onSave(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm);
    return;
    const value = this.registerForm.value;
    this.courseListService.setItem({
      id: <string>this.id,
      name: <string>value.title,
      description: <string>value.description,
      createDate: <Date>new Date(),
      startDate: <Date>new Date(value.date),
      duration: <number>value.duration,
      isTopRated: false
    });
    this.breadcrumbService.goBack();
  }
}
