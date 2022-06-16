import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpAsieComponent } from './exp-asie.component';

describe('ExpAsieComponent', () => {
  let component: ExpAsieComponent;
  let fixture: ComponentFixture<ExpAsieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpAsieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpAsieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
