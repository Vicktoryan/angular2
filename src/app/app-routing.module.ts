import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from '../classes/AuthGard';
import { CourseComponent } from './pages/details/course/course.component';
import { CourseListComponent } from './pages/lists/course-list/course-list.component';
import { EmptyComponent } from './pages/empty/empty.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'course-list', component: CourseListComponent, canActivate: [AuthGuard] },
  { path: 'course', component: CourseComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/course-list', pathMatch: 'full' },
  { path: '**', component: EmptyComponent },
  { path: '404', component: EmptyComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
