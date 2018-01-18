import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AlbumServiceService } from './shared/services/album-service.service';
import { PostServiceService } from './shared/services/post-service.service';
import { UserServiceService } from './shared/services/user-service.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AlbumServiceService, PostServiceService ,UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
