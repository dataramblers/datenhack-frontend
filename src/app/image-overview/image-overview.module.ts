import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { ImageOverviewComponent } from './image-overview.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [ ImageOverviewComponent ],
  exports: [ ImageOverviewComponent ]
})
export class ImageOverviewModule {
}
