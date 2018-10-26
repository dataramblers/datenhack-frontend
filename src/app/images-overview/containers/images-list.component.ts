import { Component } from '@angular/core';
import * as fromModifyImage from '../../image-viewer/reducers/modify-image.reducer';
import * as fromModifyImageAction from '../../image-viewer/actions/modify-image.actions';
import * as fromRoot from '../../reducers';
import { select, Store } from '@ngrx/store';
import { IIIFImageFormat, IIIFImageQuality, Image } from '../../shared/models/image.model';
import { Observable } from 'rxjs/Observable';
import { IiifUrl } from '../../shared/utils/iiif-url';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styles: [ '.clickable {cursor: pointer;}' ]
})
export class ImagesListComponent {

  imageNames;

  constructor(
    private modifyImageStore: Store<fromModifyImage.State>,
    private rootStore: Store<fromRoot.AppState>
  ) {
    this.imageNames = this.rootStore.pipe(select(fromRoot.selectAllImages));
  }

  // noinspection JSMethodCanBeStatic
  loadThumbnail(path: string) {
    return new IiifUrl(path)
      .size('full')
      .region('125,')
      .rotation('0')
      .quality(IIIFImageQuality.DEFAULT)
      .format(IIIFImageFormat.JPG)
      .toString();
  }

  selectImage(image: Image) {
    this.modifyImageStore.dispatch(new fromModifyImageAction.LoadImage({image: image}));
  }
}
