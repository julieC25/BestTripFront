import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationvilleComponent } from './creationville.component';

describe('CreationvilleComponent', () => {
  let component: CreationvilleComponent;
  let fixture: ComponentFixture<CreationvilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationvilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationvilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
