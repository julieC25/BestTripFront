import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideAfriqueComponent } from './guide-afrique.component';

describe('GuideAfriqueComponent', () => {
  let component: GuideAfriqueComponent;
  let fixture: ComponentFixture<GuideAfriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideAfriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideAfriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
