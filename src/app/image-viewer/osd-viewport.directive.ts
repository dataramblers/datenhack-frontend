import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { OsdOptions } from './osd-options';

declare const OpenSeadragon: any;

@Directive({
  selector: '[appOsdViewport]'
})
export class OsdViewportDirective implements OnInit {

  @Input() appOsdViewport: string;
  @Input() osdOptions: OsdOptions;
  private viewer: any;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.osdOptions.element = this.el.nativeElement;
    this.viewer = OpenSeadragon(this.osdOptions);
    this.viewer.open(this.appOsdViewport);
  }

}
