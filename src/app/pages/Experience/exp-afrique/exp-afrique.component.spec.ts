import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpAfriqueComponent } from './exp-afrique.component';

describe('ExpAfriqueComponent', () => {
  let component: ExpAfriqueComponent;
  let fixture: ComponentFixture<ExpAfriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpAfriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpAfriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
