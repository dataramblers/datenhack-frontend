import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appOsdViewport]'
})
export class OsdViewportDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
  }

}
