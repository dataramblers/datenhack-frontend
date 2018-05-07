import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { ImagesListComponent } from './containers/images-list.component';
import { ImagesService } from '../images.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImagesOverviewComponent } from './containers/images-overview.component';
import { ImageViewerModule } from '../image-viewer/image-viewer.module';
import { RouterModule } from '@angular/router';

const routes = [
  {path: 'overview', component: ImagesOverviewComponent}
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ImageViewerModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ],
  providers: [ ImagesService ],
  declarations: [ ImagesListComponent, ImagesOverviewComponent ],
  exports: [ ImagesOverviewComponent ]
})
export class ImagesOverviewModule {
}
