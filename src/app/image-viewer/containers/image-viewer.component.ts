import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromImage from '../reducers';
import { environment } from '../../../environments/environment';
import { Image } from '../../shared/models/image.model';

declare const OpenSeadragon: any;

@Component({
  selector: 'app-image-viewer',
  template: `
    <div style="height:500px; width:500px; border:1px solid black;" #osdViewport>
    </div>
  `
})
export class ImageViewerComponent implements OnInit, OnDestroy {

  @ViewChild('osdViewport') osdViewport;
  private viewer: any;


  constructor(private imageStore: Store<fromImage.State>) {
  }

  ngOnInit() {
    this.loadOpenseadragon();
    this.imageStore
      .pipe(select(fromImage.getLoadedImage))
      .subscribe((image: Image) => image ? this.loadImage(image.signatur) : console.log('No image loaded yet!'));
  }

  ngOnDestroy() {
    this.viewer.destroy();
  }

  private loadOpenseadragon() {
    const osdOptions = {
      element: this.osdViewport.nativeElement,
      prefixUrl: '//openseadragon.github.io/openseadragon/images/',
      sequenceMode: false,
      showNavigator: false,
      defaultZoomLevel: 1,
      minZoomImageRatio: 1,
      showRotationControl: true,
      crossOriginPolicy: false
    };
    this.viewer = OpenSeadragon(osdOptions);
  }

  private loadImage(signature: string) {
    this.viewer.open(`//${environment.iiif}/${signature}.tif`);
    // viewContainerRef.createComponent(this.viewer);
  }

}
