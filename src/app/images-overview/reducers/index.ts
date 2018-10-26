import * as fromLoadImages from './load-images.reducer';
import * as fromRoot from '../../reducers';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface ImagesOverviewState {
  loadImages: fromLoadImages.State;
}

export interface State extends fromRoot.AppState {
  imagesOverview: ImagesOverviewState;
}

export const reducers: ActionReducerMap<ImagesOverviewState> = {
  loadImages: fromLoadImages.reducer
};

export const getImageListState = createFeatureSelector<ImagesOverviewState>('imageList');

export const getLoadImagesState = createSelector(
  getImageListState,
  (state) => state.loadImages
);

export const getLoadErrorState = createSelector(
  getLoadImagesState,
  fromLoadImages.getLoadError
);
