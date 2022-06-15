import { TestBed } from '@angular/core/testing';

import { PaysgeneriqueService } from './paysgenerique.service';

describe('PaysgeneriqueService', () => {
  let service: PaysgeneriqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaysgeneriqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
