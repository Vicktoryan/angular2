import {
  Component, OnInit, EventEmitter, Output, ChangeDetectionStrategy, ChangeDetectorRef,
  Input, forwardRef
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseListService } from '../../lists/course-list/course-list.service';
import { CourseItem } from '../../../interfaces/CourseItem';
import { DatePipe } from '@angular/common';
import { BreadcrumbService } from '../../../services/breadcrumb.service';
import {
  FormGroup, Validators, FormBuilder, FormControl, NG_VALUE_ACCESSOR,
  ControlValueAccessor, ValidatorFn, ValidationErrors
} from '@angular/forms';
import { noop } from 'rxjs';
import * as fromRoot from '../../../reducers'
import { Store, select } from '@ngrx/store';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CourseComponent),
  multi: true
};

export const identityRevealedValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  return control.get('authors').value.length > 0 ? null : { errors: 'Required' };
};

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: [ './course.component.scss' ],
  providers: [ DatePipe ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit, ControlValueAccessor {
  @Input() registerForm: FormGroup;

  private id: string;
  private sub: any;
  private submitted = false;

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  public authorsList: {}[] = [];

  constructor(
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private courseListService: CourseListService,
    private breadcrumbService: BreadcrumbService,
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef,
    private store: Store<fromRoot.State>
  ) {

  }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      title: [ '' ],
      date: [ '' ],
      duration: [ '' ],
      description: [ '' ],
      authors: [ '' ]
    });
    this.courseListService.getItem();
    this.store.pipe(select((state: any) => state.course.item)).subscribe((item: CourseItem) => {
      this.registerForm = new FormGroup({
        title: new FormControl(item.name, Validators.required),
        date: new FormControl(this.datePipe.transform(new Date(item.createDate), 'MM.dd.yyyy'), Validators.required),
        duration: new FormControl(item.duration, Validators.required),
        description: new FormControl(item.description, Validators.required),
        authors: new FormControl(item.authors, Validators.required)
      }, { validators: identityRevealedValidator });
      this.authors = item.authors;
      console.log(this.registerForm);
      setTimeout(() => {
        this.cdr.detectChanges();
      }, 100);
    });

    this.sub = this.route.params.subscribe(params => {
      this.id = params[ 'id' ]; // (+) converts string 'id' to a number
      this.courseListService.getItem(this.id);
    });
    //   if (this.id) {
    //     setTimeout(() => {
    //       this.cdr.detectChanges();
    //     }, 100);
    //     this.courseListService.getItem(this.id).then((item: CourseItem) => {
    //       this.registerForm = new FormGroup({
    //         title: new FormControl(item.name, Validators.required),
    //         date: new FormControl(this.datePipe.transform(new Date(item.createDate), 'MM.dd.yyyy'), Validators.required),
    //         duration: new FormControl(item.duration, Validators.required),
    //         description: new FormControl(item.description, Validators.required),
    //         authors: new FormControl(item.authors, Validators.required)
    //       }, { validators: identityRevealedValidator });
    //       this.authors = item.authors;
    //     });
    //   }
    // });
  }

  get validationForm() {
    return this.registerForm.valid;
  }

  get f() {
    return this.registerForm.controls;
  }

  get authors(): any {
    return this.authorsList;
  };

  set authors(v: any) {
    if (v !== this.authorsList) {
      this.authorsList = v;
      this.onChangeCallback(v);
    }
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

  public writeValue(value: any) {
    if (value !== this.authorsList) {
      this.authorsList = value;
    }
  }

  public registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  public setAuthors($event: any = []): void {
    this.authorsList = [];
    $event.forEach(itm => {
      this.authors.push({
        id: itm.id,
        lastName: itm.name
      });
    });
    this.registerForm.controls[ 'authors' ].setValue(this.authorsList);
  }
}
