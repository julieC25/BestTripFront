import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsieExpConsultationComponent } from './asie-exp-consultation.component';

describe('AsieExpConsultationComponent', () => {
  let component: AsieExpConsultationComponent;
  let fixture: ComponentFixture<AsieExpConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsieExpConsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsieExpConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
