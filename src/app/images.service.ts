import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlHelper} from './shared/url-helper';
import {Image} from './shared/image';
import 'rxjs/add/operator/map';
import {ElasticSearchResponse} from './shared/elastic-search-response';
import {forEachComment} from 'tslint';

@Injectable()
export class ImagesService {

  constructor(private http: HttpClient) { }

    /**
     * Get all images from ES
     * todo: the query is just for debug
     * @returns {Observable<Image[]>}
     */
  getImages() {
    return this.http
        .get<ElasticSearchResponse>(UrlHelper.getEsUrl('_search', ['q=fa']))
        .map((response) => {
          return response.hits.hits;
        }).map((hits) => {
          const res = [];
          for ( let i = 0; i < hits.length; i++ ) {
              res.push(Image.imageFabric(hits[i]._source));
          }
          return res;
      });
  }
}
