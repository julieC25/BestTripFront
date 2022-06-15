import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpOceanieComponent } from './exp-oceanie.component';

describe('ExpOceanieComponent', () => {
  let component: ExpOceanieComponent;
  let fixture: ComponentFixture<ExpOceanieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpOceanieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpOceanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
