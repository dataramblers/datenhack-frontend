import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Image} from '../shared/image';
import {environment} from '../../environments/environment';
import {selector} from 'rxjs/operator/publish';

@Component({
  selector: 'app-image-overview',
  templateUrl: './image-overview.component.html',
  styleUrls: ['./image-overview.component.scss']
})
export class ImageOverviewComponent implements OnInit {

  @Input() imageNames: Image[];
  @Input() columns: number;
  @Output() select =  new EventEmitter <string> ();

    constructor() { }

  ngOnInit() {
  }


  loadThumbnail(path: string) {
      return 'http://' + environment.iiif + '/' + path  + '.tif/full/125,/0/default.jpg';
  }

  selectImage(signature) {
    this.select.emit(signature);
  }
}
