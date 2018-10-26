import { ImageResult } from '../models/elastic-search-response';
import { DescriptiveImageMetadata } from '../models/image.model';

export class EsImageMapper {
  /**
   * Parse a result from a Elastic search result
   * @param {string} esResult
   */
  static parseEsResult(esResult: ImageResult): DescriptiveImageMetadata {
    return {
      id: esResult.Signatur, // TODO: Replace signature with something more meaningful
      titel: esResult.Titel || '',
      ort: esResult.Ort || '',
      signatur: esResult.Signatur || '',
      schlagwoerter: esResult.Schlagwoerter || []
    };
  }
}
