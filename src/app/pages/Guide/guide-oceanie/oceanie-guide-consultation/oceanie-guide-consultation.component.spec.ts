import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanieGuideConsultationComponent } from './oceanie-guide-consultation.component';

describe('OceanieGuideConsultationComponent', () => {
  let component: OceanieGuideConsultationComponent;
  let fixture: ComponentFixture<OceanieGuideConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OceanieGuideConsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OceanieGuideConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
