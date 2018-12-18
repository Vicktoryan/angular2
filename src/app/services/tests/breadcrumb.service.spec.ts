import { TestBed } from '@angular/core/testing';

import { BreadcrumbService } from '../breadcrumb.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('BreadcrumbService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule
    ]
  }));

  it('should be created', () => {
    const service: BreadcrumbService = TestBed.get(BreadcrumbService);
    expect(service).toBeTruthy();
  });
});
