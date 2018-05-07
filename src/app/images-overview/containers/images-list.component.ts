import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Image } from '../../shared/image';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styles: [ '.clickable {cursor: pointer;}' ]
})
export class ImagesListComponent {

  @Input() imageNames: Image[];
  @Input() columns: number;
  @Output() select = new EventEmitter<string>();

  loadThumbnail(path: string) {
    return 'http://' + environment.iiif + '/' + path + '.tif/full/125,/0/default.jpg';
  }

  selectImage(signature) {
    this.select.emit(signature);
  }
}
