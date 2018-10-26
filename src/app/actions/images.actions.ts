import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Image } from '../shared/models/image.model';

export enum ImageActionTypes {
  LoadImagesSuccess = '[EsImageMapper] Load Images',
  AddImage = '[EsImageMapper] Add EsImageMapper',
  UpsertImage = '[EsImageMapper] Upsert EsImageMapper',
  AddImages = '[EsImageMapper] Add Images',
  UpsertImages = '[EsImageMapper] Upsert Images',
  UpdateImage = '[EsImageMapper] Update EsImageMapper',
  UpdateImages = '[EsImageMapper] Update Images',
  DeleteImage = '[EsImageMapper] Delete EsImageMapper',
  DeleteImages = '[EsImageMapper] Delete Images',
  ClearImages = '[EsImageMapper] Clear Images'
}

export class LoadImagesSuccess implements Action {
  readonly type = ImageActionTypes.LoadImagesSuccess;

  constructor(public payload: { images: Image[] }) {}
}

export class AddImage implements Action {
  readonly type = ImageActionTypes.AddImage;

  constructor(public payload: { image: Image }) {}
}

export class UpsertImage implements Action {
  readonly type = ImageActionTypes.UpsertImage;

  constructor(public payload: { image: Update<Image> }) {}
}

export class AddImages implements Action {
  readonly type = ImageActionTypes.AddImages;

  constructor(public payload: { images: Image[] }) {}
}

export class UpsertImages implements Action {
  readonly type = ImageActionTypes.UpsertImages;

  constructor(public payload: { images: Update<Image>[] }) {}
}

export class UpdateImage implements Action {
  readonly type = ImageActionTypes.UpdateImage;

  constructor(public payload: { image: Update<Image> }) {}
}

export class UpdateImages implements Action {
  readonly type = ImageActionTypes.UpdateImages;

  constructor(public payload: { images: Update<Image>[] }) {}
}

export class DeleteImage implements Action {
  readonly type = ImageActionTypes.DeleteImage;

  constructor(public payload: { id: string }) {}
}

export class DeleteImages implements Action {
  readonly type = ImageActionTypes.DeleteImages;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearImages implements Action {
  readonly type = ImageActionTypes.ClearImages;
}

export type ImagesActions =
 LoadImagesSuccess
 | AddImage
 | UpsertImage
 | AddImages
 | UpsertImages
 | UpdateImage
 | UpdateImages
 | DeleteImage
 | DeleteImages
 | ClearImages;
