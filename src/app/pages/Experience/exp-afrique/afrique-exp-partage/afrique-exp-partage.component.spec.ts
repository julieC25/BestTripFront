import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfriqueExpPartageComponent } from './afrique-exp-partage.component';

describe('AfriqueExpPartageComponent', () => {
  let component: AfriqueExpPartageComponent;
  let fixture: ComponentFixture<AfriqueExpPartageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfriqueExpPartageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfriqueExpPartageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
