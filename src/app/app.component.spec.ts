import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { HeaderService } from './services/header.service';
import { AppModule } from './app.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { AlertComponent } from './components/alert/alert.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoComponent } from './components/logo/logo.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoaderComponent } from './loader/loader.component';

describe('AppComponent', () => {
  //
  // beforeEach(
  //   async(() => {
  //     TestBed.configureTestingModule({
  //       imports: [
  //         RouterTestingModule,
  //         HeaderComponent,
  //         HeaderService
  //       ],
  //       declarations: [AppComponent],
  //       schemas: [NO_ERRORS_SCHEMA]
  //     }).compileComponents();
  //   })
  // );

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        BreadcrumbComponent,
        AlertComponent,
        LogoComponent,
        LoaderComponent
      ],
      schemas: [ ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create the Header', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create the Breadcrumb', () => {
    const fixture = TestBed.createComponent(BreadcrumbComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create the Alert', () => {
    const fixture = TestBed.createComponent(AlertComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Project');
  });

  it('should render footer', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.footer span').textContent).toContain('Copyright 2018');
  });
});
