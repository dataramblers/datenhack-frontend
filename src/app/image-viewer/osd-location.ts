export class OsdLocation {
}

export interface OsdPoint extends OsdLocation {
  x?: number;
  y?: number;
}

export interface OsdRect extends OsdLocation {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  degrees?: number;
}
