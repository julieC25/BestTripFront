import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpPartageComponent } from './exp-partage.component';

describe('ExpPartageComponent', () => {
  let component: ExpPartageComponent;
  let fixture: ComponentFixture<ExpPartageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpPartageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpPartageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
