import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideOceanieComponent } from './guide-oceanie.component';

describe('GuideOceanieComponent', () => {
  let component: GuideOceanieComponent;
  let fixture: ComponentFixture<GuideOceanieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideOceanieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideOceanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
