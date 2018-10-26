import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { ImagesListComponent } from './containers/images-list.component';
import { MetadataRetrievalService } from '../shared/services/metadata-retrieval.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImagesOverviewComponent } from './containers/images-overview.component';
import { ImageViewerModule } from '../image-viewer/image-viewer.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import * as fromImagesOverview from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { LoadImagesEffects } from './effects/load-images.effects';

const routes = [
  {path: 'overview', component: ImagesOverviewComponent}
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ImageViewerModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('imagesOverview', fromImagesOverview.reducers),
    EffectsModule.forFeature([ LoadImagesEffects ])
  ],
  providers: [ MetadataRetrievalService ],
  declarations: [ ImagesListComponent, ImagesOverviewComponent ],
  exports: [ ImagesOverviewComponent ]
})
export class ImagesOverviewModule {
}
