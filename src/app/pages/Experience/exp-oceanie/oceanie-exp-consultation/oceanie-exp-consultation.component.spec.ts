import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanieExpConsultationComponent } from './oceanie-exp-consultation.component';

describe('OceanieExpConsultationComponent', () => {
  let component: OceanieExpConsultationComponent;
  let fixture: ComponentFixture<OceanieExpConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OceanieExpConsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OceanieExpConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
