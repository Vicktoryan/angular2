import { TestBed } from '@angular/core/testing';

import { CommonService } from '../common.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('CommonService', () => {
  let service: CommonService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule
    ]
  }));

  it('should be created', () => {
    service = TestBed.get(CommonService);
    expect(service).toBeTruthy();
  });

  it('should be setUserInformation', () => {
    service.setUserInformation();
    expect(service.userInformation).toEqual({
      userId: '1',
      firstName: 'Test',
      lastName: 'Name',
      userFullName: 'Test Name',
      rules: ['1', '2']
    });
  });

  it('should be login', () => {
    service.userInformation = null;
    service.login('1', '2');
    expect(service.userInformation).toBeNull();

    service.login('1', '1');
    expect(service.userInformation).toEqual({
      userId: '1',
      firstName: 'Test',
      lastName: 'Name',
      userFullName: 'Test Name',
      rules: ['1', '2']
    });
  });

});
