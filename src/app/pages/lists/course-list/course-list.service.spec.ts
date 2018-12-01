import { TestBed } from '@angular/core/testing';

import { CourseListService } from './course-list.service';

describe('CourseListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseListService = TestBed.get(CourseListService);
    expect(service).toBeTruthy();
  });
});
