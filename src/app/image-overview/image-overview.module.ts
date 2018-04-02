import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { ImageOverviewComponent } from './image-overview.component';
import {ImagesService} from '../images.service';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
      FlexLayoutModule
  ],
    providers: [ImagesService],
  declarations: [ ImageOverviewComponent ],
  exports: [ ImageOverviewComponent ]
})
export class ImageOverviewModule {
}
