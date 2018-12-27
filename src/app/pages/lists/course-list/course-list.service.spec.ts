import { TestBed } from '@angular/core/testing';

import { CourseListService } from './course-list.service';

describe('CourseListService', () => {
  let service: CourseListService;
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    service = TestBed.get(CourseListService);
    expect(service).toBeTruthy();
  });

  it('should getItems', () => {
    service.getItems(null);
  });

  it('should getItems', () => {
    service.getItems('2');
  });
});
