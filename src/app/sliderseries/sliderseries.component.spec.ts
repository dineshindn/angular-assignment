import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderseriesComponent } from './sliderseries.component';

describe('SliderseriesComponent', () => {
  let component: SliderseriesComponent;
  let fixture: ComponentFixture<SliderseriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderseriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
