import * as fromModifyImage from './modify-image.reducer';
import * as fromRoot from '../../reducers';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface ImageState {
  loadImages: fromModifyImage.State;
}

export interface State extends fromRoot.AppState {
  imagesOverview: ImageState;
}

export const reducers: ActionReducerMap<ImageState> = {
  loadImages: fromModifyImage.reducer
};

export const getImageState = createFeatureSelector<ImageState>('image');

export const getModifyImageState = createSelector(
  getImageState,
  (state) => state.loadImages
);

export const getLoadedImage = createSelector(
  getModifyImageState,
  fromModifyImage.getLoadedImage
);
