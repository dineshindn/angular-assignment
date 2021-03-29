import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsseriesComponent } from './detailsseries.component';

describe('DetailsseriesComponent', () => {
  let component: DetailsseriesComponent;
  let fixture: ComponentFixture<DetailsseriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsseriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
