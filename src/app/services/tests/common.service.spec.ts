import { TestBed } from '@angular/core/testing';

import { CommonService } from '../common.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import { CommonEnums } from '../../enums/CommonEnums';
import { HttpHeaders } from '@angular/common/http';


describe('CommonService', () => {
  let service: CommonService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    service = TestBed.get(CommonService);
    expect(service).toBeTruthy();
  });

  describe('HttpClient testing', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ]
      });

      httpClient = TestBed.get(HttpClient);
      httpTestingController = TestBed.get(HttpTestingController);
    });

  });

  it('can test HttpClient login', () => {
    const testData = { token: '58ebfdf7f1f558c5c86e17f6'};
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);

    httpClient.post(`${CommonEnums.apiUrl}auth/login`, { login: 'Warner', 'password': 'ea'} )
    .subscribe(data =>
      expect(data).toEqual(testData)
    );

    const req = httpTestingController.expectOne(`${CommonEnums.apiUrl}auth/login`);
    expect(req.request.method).toEqual('POST');
    req.flush(testData);

    httpTestingController.verify();
  });

  it('can test HttpClient user info', () => {
    const testData = {
      fakeToken: "58ebfdf7f1f558c5c86e17f6",
      id: 6093,
      login: "Warner",
      name: {first: "Ines", last: "Lowe"},
      password: "ea"
    };
    const headers = new HttpHeaders().set('Authorization', '58ebfdf7f1f558c5c86e17f6');

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);

    httpClient.post(`${CommonEnums.apiUrl}auth/userinfo`, null,  headers)
    .subscribe(data =>
      expect(data).toEqual(testData)
    );

    const req = httpTestingController.expectOne(`${CommonEnums.apiUrl}auth/userinfo`);
    expect(req.request.method).toEqual('POST');
    req.flush(testData);

    httpTestingController.verify();
  });
});
