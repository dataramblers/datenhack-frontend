import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImageViewerModule } from './image-viewer/image-viewer.module';
import { ImageOverviewModule } from './image-overview/image-overview.module';

import { AppComponent } from './app.component';
import {ImagesService} from './images.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      ImageViewerModule,
      ImageOverviewModule,
      HttpClientModule,
      FlexLayoutModule
  ],
  providers: [ImagesService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
