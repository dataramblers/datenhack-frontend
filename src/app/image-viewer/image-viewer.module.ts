import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OsdViewportDirective } from './osd-viewport.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ OsdViewportDirective ],
  exports: [ OsdViewportDirective ]
})
export class ImageViewerModule {
}
