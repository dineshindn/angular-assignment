import { TestBed } from '@angular/core/testing';

import { SliderseriesApiService } from './sliderseries-api.service';

describe('SliderseriesApiService', () => {
  let service: SliderseriesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SliderseriesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
