import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCourseListComponent } from './item-course-list.component';

describe('ItemCourseListComponent', () => {
  let component: ItemCourseListComponent;
  let fixture: ComponentFixture<ItemCourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCourseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
