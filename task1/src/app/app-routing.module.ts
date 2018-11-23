import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {VideoListComponent} from "./pages/lists/video-list/video-list.component";
import {VideoComponent} from "./pages/details/video/video.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'video', component: VideoListComponent },
  { path: 'detail', component: VideoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
