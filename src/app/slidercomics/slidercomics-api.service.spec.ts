import { TestBed } from '@angular/core/testing';

import { SlidercomicsApiService } from './slidercomics-api.service';

describe('SlidercomicsApiService', () => {
  let service: SlidercomicsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlidercomicsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
