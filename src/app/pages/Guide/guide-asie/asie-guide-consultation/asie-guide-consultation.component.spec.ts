import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsieGuideConsultationComponent } from './asie-guide-consultation.component';

describe('AsieGuideConsultationComponent', () => {
  let component: AsieGuideConsultationComponent;
  let fixture: ComponentFixture<AsieGuideConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsieGuideConsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsieGuideConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
