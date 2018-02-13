import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OsdViewportDirective } from './osd-viewport.directive';
import { ImageViewerComponent } from './image-viewer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OsdViewportDirective, ImageViewerComponent],
  exports: [
    ImageViewerComponent
  ]
})
export class ImageViewerModule { }
