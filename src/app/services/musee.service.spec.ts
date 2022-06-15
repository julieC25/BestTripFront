import { TestBed } from '@angular/core/testing';

import { MuseeService } from './musee.service';

describe('MuseeService', () => {
  let service: MuseeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuseeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
