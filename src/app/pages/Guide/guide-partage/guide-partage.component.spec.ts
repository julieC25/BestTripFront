import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidePartageComponent } from './guide-partage.component';

describe('GuidePartageComponent', () => {
  let component: GuidePartageComponent;
  let fixture: ComponentFixture<GuidePartageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidePartageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidePartageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
