import { TestBed} from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { LoadImagesEffects } from './load-images.effects';

describe('LoadImagesService', () => {
  let actions$: Observable<any>;
  let effects: LoadImagesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoadImagesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(LoadImagesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
