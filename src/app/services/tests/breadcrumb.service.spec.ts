import { TestBed } from '@angular/core/testing';

import { BreadcrumbService } from '../breadcrumb.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('BreadcrumbService', () => {
  let service: BreadcrumbService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule
    ]
  }));

  it('should be created', () => {
    service = TestBed.get(BreadcrumbService);
    expect(service).toBeTruthy();
  });

  it('should be clear', () => {
    service.clear();
  });

  it('should be setItem', () => {
    service.setItem('test', 'test');
    expect(service.breadcrumbs).toEqual([{
      name: 'test',
      url: 'test'
    }]);
  });

  it('should be initBreadcrumbs', () => {
    service.breadcrumbs = [];
    service.initBreadcrumbs();
    expect(service.breadcrumbs).toEqual([{
      name: 'Courses',
      url: '/course-list'
    }]);

    service.initBreadcrumbs();
    expect(service.breadcrumbs).toEqual([{
      name: 'Courses',
      url: '/course-list'
    }]);

  });
});
