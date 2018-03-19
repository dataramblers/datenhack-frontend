import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { OsdOptions } from './image-viewer/osd-options';
import { Annotation, PointAnnotation, RectAnnotation } from './image-viewer/annotation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title = 'app';
  imageName = environment.api + '01/02/0001.jp2';
  imageNames = Array(10).fill(this.imageName);
  osdOptions: OsdOptions = {
    prefixUrl: '//openseadragon.github.io/openseadragon/images/',
    sequenceMode: false,
    showNavigator: false,
    defaultZoomLevel: 1,
    minZoomImageRatio: 1,
    showRotationControl: true
  };
  annotations: Annotation[];
  annotationText = 'Select annotationText';

  constructor() {
    this.annotations = this.addAnnos();
  }

  addAnnos(): Annotation[] {
    const aRectAnno = new RectAnnotation('rect');
    aRectAnno.location = {x: 0.1, y: 0.1, width: 0.2, height: 0.2};
    aRectAnno.text = 'awfwefaw awef awfe awef';
    const aPointAnno = new PointAnnotation('point');
    aPointAnno.location = {x: 0.6, y: 0.6};
    return [ aRectAnno, aPointAnno ];
  }

  addOtherAnnos() {
    const aRectAnno = new RectAnnotation('rect');
    aRectAnno.location = {x: 0.7, y: 0.7, width: 0.2, height: 0.2};
    this.annotations = this.annotations.concat(aRectAnno);
  }

  showAnnotationText(id: string) {
    this.annotationText = id ? this.annotations.find(x => x.id === id).getText() : 'Select annotationText';
  }
}
