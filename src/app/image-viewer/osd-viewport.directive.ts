import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { OsdOptions } from './osd-options';
import { Annotation } from './annotation';

declare const OpenSeadragon: any;

@Directive({
  selector: '[appOsdViewport]'
})
export class OsdViewportDirective implements OnInit {

  @Input() appOsdViewport: string;
  @Input() osdOptions: OsdOptions;
  @Input() overlayColor = '#dddddd';
  @Input() overlayBorderColor = 'lightblue';

  @Input() set annotations(values: Annotation[]) {
    if (this.viewer) {
      this.createOverlays(values);
    }
    this._annotations = values;
  }

  @Output() annotation = new EventEmitter<string>();

  private viewer: any;
  private _annotations: Annotation[];

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.initializeOsdViewer();
    this.createOverlays(this._annotations);
    this.addCanvasClickHandler();
    this.addCanvasNonprimaryPressHandler();
  }

  @HostListener('contextmenu', [ '$event' ])
  onCanvasClick(event) {
    event.preventDefault();
  }

  private createOverlays(annotations: Annotation[]) {
    this.viewer.clearOverlays();
    this._annotations.forEach(a => this.createOverlay(a));
  }

  // TODO: Move overlay creation to dedicated service
  private createOverlay(annotation: Annotation) {
    const location: any = annotation.getLocation();
    const placement = annotation.getPlacement();
    const overlay = (location instanceof OpenSeadragon.Point) ? this.drawPointOverlay() : this.drawRectOverlay();
    this.renderer.listen(overlay, 'mouseenter', () => {
      this.renderer.removeStyle(overlay, 'background-color');
      this.annotation.emit(annotation.id);
    });
    this.renderer.listen(overlay, 'mouseleave', () => {
      this.renderer.setStyle(overlay, 'background-color', this.overlayColor);
      this.annotation.emit(null);
    });
    this.viewer.addOverlay(overlay, location, placement);
  }

  private drawPointOverlay() {
    const overlay = this.renderer.createElement('div');
    // TODO: Write more
    return overlay;
  }

  private drawRectOverlay(): any {
    const overlay = this.renderer.createElement('div');
    this.renderer.setStyle(overlay, 'background-color', this.overlayColor);
    this.renderer.setStyle(overlay, 'opacity', 0.5);
    this.renderer.setStyle(overlay, 'border', '8px solid ' + this.overlayBorderColor);
    return overlay;
  }

  private initializeOsdViewer() {
    this.osdOptions.element = this.el.nativeElement;
    this.viewer = OpenSeadragon(this.osdOptions);
    this.viewer.open(this.appOsdViewport);
  }

  // TODO: Do something useful
  private addCanvasClickHandler() {
    this.viewer.addHandler('canvas-click', (event) => {
      const webPoint = event.position;
      const viewportPoint = this.viewer.viewport.pointFromPixel(webPoint);
      const imagePoint = this.viewer.viewport.viewportToImageCoordinates(viewportPoint);
      console.log(webPoint.toString(), viewportPoint.toString(), imagePoint.toString());
    });
  }

  // TODO: Do something useful
  private addCanvasNonprimaryPressHandler() {
    this.viewer.addHandler('canvas-nonprimary-press', (event) => {
      // console.log(event);
    });
  }

}
