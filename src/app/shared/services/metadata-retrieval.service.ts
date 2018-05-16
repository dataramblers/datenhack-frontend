import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlHelper } from '../url-helper';
import { Image } from '../image';
import 'rxjs/add/operator/map';
import { ElasticSearchResponse } from '../elastic-search-response';

@Injectable()
export class MetadataRetrievalService {

  constructor(private http: HttpClient) {
  }

  /**
   * Get all images from ES
   * todo: the query is just for debug
   * @returns {Observable<Image[]>}
   */
  getImagesBySearchTerm(searchTerm?: string = '*:*', offset?: number, limit?: number = 10) {
    return this.http
      .get<ElasticSearchResponse>(UrlHelper.getEsUrl('_search', [ `q=${searchTerm}`, `from=${offset}`, `size=${limit}` ]))
      .map((response) => response.hits.hits)
      .map((hits) => hits.map(x => Image.imageFabric(x._source)));
  }

}