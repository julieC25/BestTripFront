import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationlieuComponent } from './creationlieu.component';

describe('CreationlieuComponent', () => {
  let component: CreationlieuComponent;
  let fixture: ComponentFixture<CreationlieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationlieuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationlieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
