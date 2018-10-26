import { LoadImagesActions, LoadImagesActionTypes } from '../actions/load-images.actions';

export interface State {
  loadError: boolean;
}

export const initialState: State = {
  loadError: false
};

export function reducer(state = initialState, action: LoadImagesActions): State {
  switch (action.type) {

    case LoadImagesActionTypes.LoadErrorAction:
      return {...state, loadError: true};

    default:
      return state;
  }
}

export const getLoadError = (state: State) => state.loadError;
