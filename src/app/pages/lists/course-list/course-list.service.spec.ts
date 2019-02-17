import { TestBed } from '@angular/core/testing';

import { CourseListService } from './course-list.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('CourseListService', () => {
  let service: CourseListService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    service = TestBed.get(CourseListService);
    expect(service).toBeTruthy();
  });

  it('should getItems', () => {

  });

  it('should getItems', () => {

  });
});
