import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmeriqueGuideConsultationComponent } from './amerique-guide-consultation.component';

describe('AmeriqueGuideConsultationComponent', () => {
  let component: AmeriqueGuideConsultationComponent;
  let fixture: ComponentFixture<AmeriqueGuideConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmeriqueGuideConsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmeriqueGuideConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
