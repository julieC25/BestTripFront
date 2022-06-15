import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpEuropeComponent } from './exp-europe.component';

describe('ExpEuropeComponent', () => {
  let component: ExpEuropeComponent;
  let fixture: ComponentFixture<ExpEuropeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpEuropeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpEuropeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
