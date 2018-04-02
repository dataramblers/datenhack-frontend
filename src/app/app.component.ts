import {Component, OnInit} from '@angular/core';
import { environment } from '../environments/environment';
import {ImagesService} from './images.service';
import {Image} from './shared/image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  imageName = '//' + environment.iiif + '/Sozarch_F_5025-Fa-013.tif';
  imageNames: Image[];

  constructor(private imagesService: ImagesService){  }

    /**
     * Init
     */
  ngOnInit() {
    this.imagesService.getImages().subscribe((images) => {
      this.imageNames = images;
    });
  }

  setImage($event) {
    this.imageName = '//' + environment.iiif + '/' + $event + '.tif';
  }
}
