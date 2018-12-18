import { TestBed } from '@angular/core/testing';

import { HeaderService } from '../header.service';

describe('HeaderService', () => {
  let service: HeaderService;
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    service = TestBed.get(HeaderService);
    expect(service).toBeTruthy();
  });

  it('should be notifyHeader true', () => {
    service.notifyHeader(true);
  });

  it('should be notifyHeader empty', () => {
    service.notifyHeader();
  });

});
