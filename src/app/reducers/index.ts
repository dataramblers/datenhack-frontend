import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from '../shared/utils/router-state-url';
import * as fromImages from './images.reducer';

export interface AppState {
  images: fromImages.ImagesState;
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<AppState> = {
  images: fromImages.reducer,
  router: fromRouter.routerReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [ logger ] : [];

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function (state: AppState, action: any): AppState {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const getRootState = createFeatureSelector<AppState>('rootState');

export const getImagesState = createSelector(
  getRootState,
  (state) => state.images
);

export const selectImagesIds = createSelector(
  getImagesState,
  fromImages.selectIds
);

export const selectAllImages = createSelector(
  getImagesState,
  fromImages.selectAll
);

export const selectImagesEntities = createSelector(
  getImagesState,
  fromImages.selectEntities
);

export const countImages = createSelector(
  getImagesState,
  fromImages.selectTotal
);
