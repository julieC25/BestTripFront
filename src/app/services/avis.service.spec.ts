import { TestBed } from '@angular/core/testing';

import { avisService } from './avis.service';

describe('AvisService', () => {
  let service: avisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(avisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
