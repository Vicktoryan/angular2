import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AlertComponent } from './components/alert/alert.component';
import { AuthGuard } from '../classes/AuthGard';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { CourseComponent } from './pages/details/course/course.component';
import { CourseListComponent } from './pages/lists/course-list/course-list.component';
import { EmptyComponent } from './pages/empty/empty.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ItemCourseListComponent } from './pages/lists/course-list/item-course-list/item-course-list.component';
import { FilterListComponent } from './pages/lists/filter-list/filter-list.component';
import { DurationPipe } from './pipes/duration.pipe';
import { ItemStateDirective } from './directives/item-state.directive';
import { OrderModule } from 'ngx-order-pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    HeaderComponent,
    LogoComponent,
    CourseComponent,
    CourseListComponent,
    EmptyComponent,
    BreadcrumbComponent,
    ItemCourseListComponent,
    FilterListComponent,
    DurationPipe,
    ItemStateDirective,
    LoaderComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    OrderModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
