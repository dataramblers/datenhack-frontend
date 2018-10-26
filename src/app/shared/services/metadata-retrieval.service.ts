import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EsUrl } from '../utils/es-url';
import { EsImageMapper } from '../utils/es-image-mapper';
import 'rxjs/add/operator/map';
import { ElasticSearchResponse } from '../models/elastic-search-response';

@Injectable()
export class MetadataRetrievalService {

  constructor(private http: HttpClient) {
  }

  /**
   * Get all images from ES
   * todo: the query is just for debug
   * @returns {Observable<EsImageMapper[]>}
   */
  getImagesBySearchTerm(searchTerm: string = '*:*', offset: number = 0, limit: number = 10) {
    return this.http
      .get<ElasticSearchResponse>(EsUrl.getEsUrl('_search', [ `q=${searchTerm}`, `from=${offset}`, `size=${limit}` ]))
      .map((response) => response.hits.hits)
      .map((hits) => hits.map(x => EsImageMapper.parseEsResult(x._source)));
  }

}
