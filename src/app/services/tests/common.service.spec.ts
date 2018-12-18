import { TestBed } from '@angular/core/testing';

import { CommonService } from '../common.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('CommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule
    ]
  }));

  it('should be created', () => {
    const service: CommonService = TestBed.get(CommonService);
    expect(service).toBeTruthy();
  });
});
