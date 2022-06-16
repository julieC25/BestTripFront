import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfriqueGuideConsultationComponent } from './afrique-guide-consultation.component';

describe('AfriqueGuideConsultationComponent', () => {
  let component: AfriqueGuideConsultationComponent;
  let fixture: ComponentFixture<AfriqueGuideConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfriqueGuideConsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfriqueGuideConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
