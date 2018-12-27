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
    ItemStateDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    OrderModule,
    FormsModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
