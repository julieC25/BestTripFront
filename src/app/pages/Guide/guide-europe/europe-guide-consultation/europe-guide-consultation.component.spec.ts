import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropeGuideConsultationComponent } from './europe-guide-consultation.component';

describe('EuropeGuideConsultationComponent', () => {
  let component: EuropeGuideConsultationComponent;
  let fixture: ComponentFixture<EuropeGuideConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuropeGuideConsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EuropeGuideConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
