import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationpaysComponent } from './creationpays.component';

describe('CreationpaysComponent', () => {
  let component: CreationpaysComponent;
  let fixture: ComponentFixture<CreationpaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationpaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationpaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
