import { TestBed} from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { ModifyImageEffects } from './modify-image.effects';

describe('ModifyImageService', () => {
  let actions$: Observable<any>;
  let effects: ModifyImageEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ModifyImageEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ModifyImageEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
