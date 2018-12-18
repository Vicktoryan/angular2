import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCourseListComponent } from './item-course-list.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ItemCourseListComponent', () => {
  let component: ItemCourseListComponent;
  let fixture: ComponentFixture<ItemCourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ ItemCourseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCourseListComponent);
    component = fixture.componentInstance;
    Object.assign(component, { item: {} });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
