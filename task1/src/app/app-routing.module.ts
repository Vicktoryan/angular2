import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { VideoListComponent } from './pages/lists/video-list/video-list.component';
import { VideoComponent } from './pages/details/video/video.component';
import { AuthGuard } from '../classes/AuthGard';
//, canActivate: [AuthGuard]
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'video', component: VideoListComponent, canActivate: [AuthGuard] },
  { path: 'detail', component: VideoComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
