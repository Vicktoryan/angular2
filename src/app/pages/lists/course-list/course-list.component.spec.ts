import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { FilterListComponent } from '../filter-list/filter-list.component';
import { ItemCourseListComponent } from './item-course-list/item-course-list.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CourseListComponent,
        FilterListComponent,
        ItemCourseListComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create filter component', () => {
    const fixture = TestBed.createComponent(FilterListComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should create item component', () => {
    const fixture = TestBed.createComponent(ItemCourseListComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should click onRemove', () => {
    component.onRemove();
    fixture.detectChanges();
  });

});
