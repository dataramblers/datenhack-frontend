import { Action } from '@ngrx/store';
import { Image } from '../../shared/models/image.model';

export enum ModifyImageActionTypes {
  LoadImageAction = '[ModifyImage] Get Metadata for '
}

export class LoadImage implements Action {
  readonly type = ModifyImageActionTypes.LoadImageAction;

  constructor(public payload: { image: Image }) {
  }
}

export type ModifyImageActions
  = LoadImage;
