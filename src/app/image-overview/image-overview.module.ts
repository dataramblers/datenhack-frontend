import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { ImageOverviewComponent } from './image-overview.component';
import {ImagesService} from '../images.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
    providers: [ImagesService],
  declarations: [ ImageOverviewComponent ],
  exports: [ ImageOverviewComponent ]
})
export class ImageOverviewModule {
}
