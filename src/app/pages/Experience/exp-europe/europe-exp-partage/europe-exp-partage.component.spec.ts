import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropeExpPartageComponent } from './europe-exp-partage.component';

describe('EuropeExpPartageComponent', () => {
  let component: EuropeExpPartageComponent;
  let fixture: ComponentFixture<EuropeExpPartageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuropeExpPartageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EuropeExpPartageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
