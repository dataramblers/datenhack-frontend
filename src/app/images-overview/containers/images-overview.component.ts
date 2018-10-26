import { Component, OnInit } from '@angular/core';
import * as fromLoadImagesActions from '../actions/load-images.actions';
import * as fromLoadImagesReducer from '../reducers/load-images.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-images-overview',
  template: `
    <div fxLayout="row">
      <div fxFlex="60">
        <app-image-viewer></app-image-viewer>
      </div>
      <div fxFlex="40">
        <app-images-list></app-images-list>
      </div>
    </div>
  `,
  styles: [],
  // FIXME: Check why OnPush strategy does not work with app-images-list
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImagesOverviewComponent implements OnInit {
  // imageName = '//' + environment.iiif + '/Sozarch_F_5025-Fa-013.tif';

  constructor(private loadImagesStore: Store<fromLoadImagesReducer.State>) {
  }

  ngOnInit() {
    this.loadImagesStore.dispatch(new fromLoadImagesActions.Load({offset: 0}));
  }
}
