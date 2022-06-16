import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LieuGComponent } from './lieu-g.component';

describe('LieuGComponent', () => {
  let component: LieuGComponent;
  let fixture: ComponentFixture<LieuGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LieuGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LieuGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
