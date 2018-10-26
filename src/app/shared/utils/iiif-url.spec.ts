import { TestBed, inject } from '@angular/core/testing';

import { IiifUrl } from './iiif-url';

describe('IiifUrl', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IiifUrl]
    });
  });

  it('should be created', inject([IiifUrl], (service: IiifUrl) => {
    expect(service).toBeTruthy();
  }));
});
