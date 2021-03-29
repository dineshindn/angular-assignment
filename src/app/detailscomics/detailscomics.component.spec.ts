import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailscomicsComponent } from './detailscomics.component';

describe('DetailscomicsComponent', () => {
  let component: DetailscomicsComponent;
  let fixture: ComponentFixture<DetailscomicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailscomicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailscomicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
