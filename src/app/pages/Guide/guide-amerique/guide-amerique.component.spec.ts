import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideAmeriqueComponent } from './guide-amerique.component';

describe('GuideAmeriqueComponent', () => {
  let component: GuideAmeriqueComponent;
  let fixture: ComponentFixture<GuideAmeriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideAmeriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideAmeriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
