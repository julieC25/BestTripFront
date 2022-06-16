import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmeriqueExpConsultationComponent } from './amerique-exp-consultation.component';

describe('AmeriqueExpConsultationComponent', () => {
  let component: AmeriqueExpConsultationComponent;
  let fixture: ComponentFixture<AmeriqueExpConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmeriqueExpConsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmeriqueExpConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
