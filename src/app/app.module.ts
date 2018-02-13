import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImageViewerModule } from './image-viewer/image-viewer.module';
import { ImageOverviewModule } from './image-overview/image-overview.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImageViewerModule,
    ImageOverviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
