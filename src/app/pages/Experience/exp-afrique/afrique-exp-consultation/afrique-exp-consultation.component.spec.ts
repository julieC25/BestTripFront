import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfriqueExpConsultationComponent } from './afrique-exp-consultation.component';

describe('AfriqueExpConsultationComponent', () => {
  let component: AfriqueExpConsultationComponent;
  let fixture: ComponentFixture<AfriqueExpConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfriqueExpConsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfriqueExpConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
