import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { LogoComponent } from '../logo/logo.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderService } from '../../services/header.service';
import { of } from 'rxjs';
import { CommonService } from '../../services/common.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let headerService: HeaderService;
  let commonService: CommonService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule

      ],
      declarations: [ HeaderComponent, LogoComponent ],
      providers: [
        HeaderService,
        CommonService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    headerService = TestBed.get(HeaderService);
    commonService = TestBed.get(CommonService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create logo', () => {
    const fixture = TestBed.createComponent(LogoComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should check observe', () => {
    let response: boolean;
    spyOn(headerService, 'getHeaderObserve').and.returnValue(of(response));
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.isShowHeader).toEqual(response);
  });

  it('should click logout', () => {
    component.exit();
    fixture.detectChanges();
  });

  it('should click login', () => {
    component.login();
    fixture.detectChanges();
  });
});
