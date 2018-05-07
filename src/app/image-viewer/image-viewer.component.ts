import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

declare const OpenSeadragon: any;

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: [ './image-viewer.component.css' ]
})
export class ImageViewerComponent implements OnInit, OnDestroy {

  private nameOfImage: string;

  /**
   * Set the new name and call the viewer
   * @param {string} name
   */
  @Input() set imageName(name: string) {
    if (typeof this.viewer !== 'undefined') {
      this.viewer.open(name);
    }
    this.nameOfImage = name;
  }

  @ViewChild('osdViewport') osdViewport;
  private viewer: any;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.loadOpenseadragon();
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
    this.viewer.open(this.nameOfImage);
    // viewContainerRef.createComponent(this.viewer);

  }

}
