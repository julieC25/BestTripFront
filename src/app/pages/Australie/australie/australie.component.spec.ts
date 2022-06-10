import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AustralieComponent } from './australie.component';

describe('AustralieComponent', () => {
  let component: AustralieComponent;
  let fixture: ComponentFixture<AustralieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AustralieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AustralieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
