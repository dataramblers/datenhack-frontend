import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { OsdOptions } from './image-viewer/osd-options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
}
