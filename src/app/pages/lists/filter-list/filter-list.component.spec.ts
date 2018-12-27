import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterListComponent } from './filter-list.component';
import { FormsModule } from '@angular/forms';

describe('FilterListComponent', () => {
  let component: FilterListComponent;
  let fixture: ComponentFixture<FilterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ FilterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should onSearch', () => {
    component.onSearch();
    fixture.detectChanges();
  });
});
