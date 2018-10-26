import { Action } from '@ngrx/store';

export enum LoadImagesActionTypes {
  LoadAction = '[Load] Loading images',
  LoadCompleteAction = '[Load] Loading images complete',
  LoadErrorAction = '[Load] Loading images failed'
}

export class Load implements Action {
  readonly type = LoadImagesActionTypes.LoadAction;

  constructor(public payload: { offset: number }) {
  }
}

export class LoadError implements Action {
  readonly type = LoadImagesActionTypes.LoadErrorAction;

  constructor(public payload: { error: any }) {
  }
}

export type LoadImagesActions
  = Load
  | LoadError;
