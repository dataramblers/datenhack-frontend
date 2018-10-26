import { ModifyImageActions, ModifyImageActionTypes } from '../actions/modify-image.actions';
import { Image } from '../../shared/models/image.model';

export interface State {
  loadedImage: Image;
}

export const initialState: State = {
  loadedImage: null
};

export function reducer(state = initialState, action: ModifyImageActions): State {
  switch (action.type) {

    case ModifyImageActionTypes.LoadImageAction:
      return {...state, loadedImage: action.payload.image};


    default:
      return state;
  }
}

export const getLoadedImage = (state: State) => state.loadedImage;
