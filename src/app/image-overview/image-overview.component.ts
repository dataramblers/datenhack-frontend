import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-overview',
  templateUrl: './image-overview.component.html',
  styleUrls: ['./image-overview.component.css']
})
export class ImageOverviewComponent implements OnInit {

  @Input() imageNames: string[];
  @Input() columns: number;

  constructor() { }

  ngOnInit() {
  }


  loadThumbnail(url: string) {
    return url + '/full/125,/0/default.jpg';
  }

}
