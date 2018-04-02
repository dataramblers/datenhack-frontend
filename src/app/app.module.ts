import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImageViewerModule } from './image-viewer/image-viewer.module';
import { ImageOverviewModule } from './image-overview/image-overview.module';

import { AppComponent } from './app.component';
import {ImagesService} from './images.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImageViewerModule,
    ImageOverviewModule,
      HttpClientModule
  ],
  providers: [ImagesService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
