import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpAmeriqueComponent } from './exp-amerique.component';

describe('ExpAmeriqueComponent', () => {
  let component: ExpAmeriqueComponent;
  let fixture: ComponentFixture<ExpAmeriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpAmeriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpAmeriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
