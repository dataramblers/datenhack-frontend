import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Image } from '../shared/models/image.model';
import { ImagesActions, ImageActionTypes } from '../actions/images.actions';

export interface ImagesState extends EntityState<Image> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Image> = createEntityAdapter<Image>({
  selectId: (image) => image.signatur,
  sortComparer: false
});

export const initialState: ImagesState = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: ImagesActions
): ImagesState {
  switch (action.type) {
    case ImageActionTypes.AddImage: {
      return adapter.addOne(action.payload.image, state);
    }

    case ImageActionTypes.UpsertImage: {
      return adapter.upsertOne(action.payload.image, state);
    }

    case ImageActionTypes.AddImages: {
      return adapter.addMany(action.payload.images, state);
    }

    case ImageActionTypes.UpsertImages: {
      return adapter.upsertMany(action.payload.images, state);
    }

    case ImageActionTypes.UpdateImage: {
      return adapter.updateOne(action.payload.image, state);
    }

    case ImageActionTypes.UpdateImages: {
      return adapter.updateMany(action.payload.images, state);
    }

    case ImageActionTypes.DeleteImage: {
      return adapter.removeOne(action.payload.id, state);
    }

    case ImageActionTypes.DeleteImages: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case ImageActionTypes.LoadImagesSuccess: {
      return adapter.addAll(action.payload.images, state);
    }

    case ImageActionTypes.ClearImages: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
