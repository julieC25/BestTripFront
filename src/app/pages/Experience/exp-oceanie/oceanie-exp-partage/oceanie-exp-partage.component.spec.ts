import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanieExpPartageComponent } from './oceanie-exp-partage.component';

describe('OceanieExpPartageComponent', () => {
  let component: OceanieExpPartageComponent;
  let fixture: ComponentFixture<OceanieExpPartageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OceanieExpPartageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OceanieExpPartageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
