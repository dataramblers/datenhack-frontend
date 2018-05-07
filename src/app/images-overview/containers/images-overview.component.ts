import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ImagesService } from '../../images.service';
import { Image } from '../../shared/image';

@Component({
  selector: 'app-images-overview',
  template: `
    <div fxLayout="row">
      <div fxFlex="60">
        <app-image-viewer [imageName]="imageName"></app-image-viewer>
      </div>
      <div fxFlex="40">
        <app-images-list [imageNames]="imageNames" [columns]="2" (select)="setImage($event)"></app-images-list>
      </div>
    </div>
  `,
  styles: [],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImagesOverviewComponent implements OnInit {
  imageName = '//' + environment.iiif + '/Sozarch_F_5025-Fa-013.tif';
  imageNames: Image[];

  constructor(private imagesService: ImagesService) {
  }

  ngOnInit() {
    this.imagesService.getImages().subscribe((images) => {
      this.imageNames = images;
    });
  }

  setImage($event) {
    this.imageName = '//' + environment.iiif + '/' + $event + '.tif';
  }
}
