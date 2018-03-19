import { OsdPoint, OsdRect } from './osd-location';
import { OsdPlacement } from './osd-placement.enum';

declare const OpenSeadragon: any;

export abstract class Annotation {
  readonly id: string;
  protected _location: any;
  protected _placement = OsdPlacement.TOP_LEFT;
  protected _text: string;

  constructor(id: string) {
    this.id = id;
  }

  getPlacement(): OsdPlacement {
    return this._placement;
  }

  set placement(value: OsdPlacement) {
    this._placement = value;
  }

  getText(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  abstract getLocation(): any;
}

export class PointAnnotation extends Annotation {
  protected _location: any;

  getLocation(): any {
    return this._location;
  }

  set location(value: OsdPoint) {
    this._location = new OpenSeadragon.Point(value.x, value.y);
  }

}

export class RectAnnotation extends Annotation {
  protected _location: any;

  getLocation(): any {
    return this._location;
  }

  set location(value: OsdRect) {
    this._location = new OpenSeadragon.Rect(value.x, value.y, value.width, value.height, value.degrees);
  }

}
