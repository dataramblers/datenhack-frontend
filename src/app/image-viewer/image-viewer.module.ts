import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OsdViewportDirective } from './osd-viewport.directive';
import { ImageViewerComponent } from './containers/image-viewer.component';
import { StoreModule } from '@ngrx/store';
import * as fromImage from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { ModifyImageEffects } from './effects/modify-image.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('image', fromImage.reducers),
    EffectsModule.forFeature([ModifyImageEffects]),
  ],
  declarations: [ OsdViewportDirective, ImageViewerComponent ],
  exports: [
    ImageViewerComponent
  ]
})
export class ImageViewerModule {
}
