import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromLoadImagesActions from '../actions/load-images.actions';
import * as fromImageActions from '../../actions/images.actions';
import { MetadataRetrievalService } from '../../shared/services/metadata-retrieval.service';
import { catchError, map, skip, switchMap, takeUntil } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Image } from '../../shared/models/image.model';

@Injectable()
export class LoadImagesEffects {

  @Effect()
  effect$ = this.actions$.pipe(
    ofType<fromLoadImagesActions.Load>(fromLoadImagesActions.LoadImagesActionTypes.LoadAction),
    map(action => action.payload),
    switchMap(query => {

      const nextSearch$ = this.actions$.pipe(
        ofType(fromLoadImagesActions.LoadImagesActionTypes.LoadAction),
        skip(1)
      );

      return this.imagesService.getImagesBySearchTerm('*:*', query.offset).pipe(
        takeUntil(nextSearch$),
        map((images: Image[]) => new fromImageActions.AddImages({images: images})),
        catchError(err => of(new fromLoadImagesActions.LoadError({error: err})))
      );
    })
  );

  constructor(private actions$: Actions, private imagesService: MetadataRetrievalService) {
  }
}
