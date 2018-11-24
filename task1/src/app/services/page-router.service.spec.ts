import { TestBed } from '@angular/core/testing';

import { PageRouterService } from './page-router.service';

describe('PageRouterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageRouterService = TestBed.get(PageRouterService);
    expect(service).toBeTruthy();
  });
});
