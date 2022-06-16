import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmeriqueExpPartageComponent } from './amerique-exp-partage.component';

describe('AmeriqueExpPartageComponent', () => {
  let component: AmeriqueExpPartageComponent;
  let fixture: ComponentFixture<AmeriqueExpPartageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmeriqueExpPartageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmeriqueExpPartageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
