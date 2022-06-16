import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideEuropeComponent } from './guide-europe.component';

describe('GuideEuropeComponent', () => {
  let component: GuideEuropeComponent;
  let fixture: ComponentFixture<GuideEuropeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideEuropeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideEuropeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
