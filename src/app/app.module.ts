import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './view/main/main.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {GoogleInterceptor} from './interceptor/googleInterceptor';
import {GoogleDriveComponent} from './view/google-drive/google-drive.component';
import {GoogleDriveService} from './service/google-drive.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GoogleDriveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    GoogleDriveService,
    {provide: HTTP_INTERCEPTORS, useClass: GoogleInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
