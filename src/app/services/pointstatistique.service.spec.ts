import { TestBed } from '@angular/core/testing';

import { PointstatistiqueService } from './pointstatistique.service';

describe('PointstatistiqueService', () => {
  let service: PointstatistiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PointstatistiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
