import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropeExpConsultationComponent } from './europe-exp-consultation.component';

describe('EuropeExpConsultationComponent', () => {
  let component: EuropeExpConsultationComponent;
  let fixture: ComponentFixture<EuropeExpConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuropeExpConsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EuropeExpConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
