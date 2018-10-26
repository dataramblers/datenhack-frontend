export interface DescriptiveImageMetadata {
  id: string;
  titel: string;
  ort: string;
  signatur: string;
  schlagwoerter?: string[];
}

export interface AdministrativeImageMetadata {
  region: string;     // Allowed values: http://iiif.io/api/image/2.1/#region
  size: string;       // Allowed values: http://iiif.io/api/image/2.1/#size
  rotation: string;   // Allowed values: http://iiif.io/api/image/2.1/#rotation
  quality: IIIFImageQuality;
  format: IIIFImageFormat;
}

export interface Image extends DescriptiveImageMetadata, AdministrativeImageMetadata {
}

export enum IIIFImageQuality {
  COLOR = 'color',
  GRAY = 'gray',
  BITONAL = 'bitonal',
  DEFAULT = 'default'
}

export enum IIIFImageFormat {
  JPG = 'jpg',
  TIF = 'tif',
  PNG = 'png',
  GIF = 'gif',
  JP2 = 'jp2',
  PDF = 'pdf',
  WEBP = 'webp'
}
