import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsieExpPartageComponent } from './asie-exp-partage.component';

describe('AsieExpPartageComponent', () => {
  let component: AsieExpPartageComponent;
  let fixture: ComponentFixture<AsieExpPartageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsieExpPartageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsieExpPartageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
