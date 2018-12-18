import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { LogoComponent } from '../../components/logo/logo.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonService } from '../../services/common.service';
import { AlertService } from '../../services/alert.service';

describe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let component: LoginComponent;
  let commonService: CommonService;
  let alertService: AlertService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ LoginComponent, LogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    commonService = TestBed.get(CommonService);
    alertService = TestBed.get(AlertService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create logo', () => {
    const fixture = TestBed.createComponent(LogoComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should click onInit', () => {
    component.ngOnInit();
  });

  it('should click singIn', () => {
    component.singIn();
    commonService.login('1', '1')
    .then((isLogin: boolean) => {
      expect(isLogin).toBeTruthy();
    });
  });
});
