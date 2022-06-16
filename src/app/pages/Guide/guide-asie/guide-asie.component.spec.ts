import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideAsieComponent } from './guide-asie.component';

describe('GuideAsieComponent', () => {
  let component: GuideAsieComponent;
  let fixture: ComponentFixture<GuideAsieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideAsieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideAsieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
