import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AlertComponent } from './alert.component';
import { AlertService } from '../../services/alert.service';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;
  let alertService: AlertService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertComponent ],
      providers: [
        AlertService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.alerts = [];
    alertService = TestBed.get(AlertService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check observe', () => {
    let response: [] = [];
    spyOn(alertService, 'getAlert').and.returnValue(of(response));
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.alerts).toEqual(response);
  });

  it('should click close', () => {
    component.close({
      message: '',
      type: ''
    });
    fixture.detectChanges();
  });
});
