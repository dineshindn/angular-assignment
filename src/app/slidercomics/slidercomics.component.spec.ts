import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidercomicsComponent } from './slidercomics.component';

describe('SlidercomicsComponent', () => {
  let component: SlidercomicsComponent;
  let fixture: ComponentFixture<SlidercomicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidercomicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidercomicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
