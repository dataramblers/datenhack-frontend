import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImageViewerModule } from './image-viewer/image-viewer.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImageViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
