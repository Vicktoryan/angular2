import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AlertComponent } from './components/alert/alert.component';
import { VideoListComponent } from './pages/lists/video-list/video-list.component';
import { VideoComponent } from "./pages/details/video/video.component";
import { AuthGuard } from '../classes/AuthGard';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VideoComponent,
    AlertComponent,
    VideoComponent,
    VideoListComponent,
    HeaderComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
