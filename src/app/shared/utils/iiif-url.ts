import { AdministrativeImageMetadata, IIIFImageFormat, IIIFImageQuality } from '../models/image.model';
import { environment } from '../../../environments/environment';

/**
 * Provides methods for creating a valid IIIF image request URL. I.e. according to the scheme
 * {scheme}://{server}{/prefix}/{identifier}/{region}/{size}/{rotation}/{quality}.{format}
 */
export class IiifUrl {

  private metadata: AdministrativeImageMetadata;
  private readonly identifier: string;

  // FIXME: No params in constructor
  constructor(id: string) {
    this.identifier = id;
    this.metadata = {
      region: 'full',
      size: 'max',
      rotation: '0',
      quality: IIIFImageQuality.DEFAULT,
      format: IIIFImageFormat.TIF
    };
  }

  region(region: string) {
    this.metadata.region = region;
    return this;
  }

  size(size: string) {
    this.metadata.size = size;
    return this;
  }

  rotation(rotation: string) {
    this.metadata.rotation = rotation;
    return this;
  }

  quality(quality: IIIFImageQuality) {
    this.metadata.quality = quality;
    return this;
  }

  format(format: IIIFImageFormat) {
    this.metadata.format = format;
    return this;
  }

  toString() {
    return environment.protocol
      + '://' + environment.iiif
      + '/' + this.identifier
      + '/' + this.metadata.region
      + '/' + this.metadata.size
      + '/' + this.metadata.rotation
      + '/' + this.metadata.quality
      + '.' + this.metadata.format;
  }

  // TODO: Provide OSD ImageTile object creator (s. https://openseadragon.github.io/docs/OpenSeadragon.Viewer.html#addTiledImage)
  // toOSDImageTileObject() {
  //  return '//' + environment.iiif + '/' + this.identifier + '.' + this.metadata.format;
  // }
}
