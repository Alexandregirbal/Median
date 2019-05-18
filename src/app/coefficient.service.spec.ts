import { TestBed } from '@angular/core/testing';

import { CoefficientService } from './coefficient.service';

describe('CoefficientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoefficientService = TestBed.get(CoefficientService);
    expect(service).toBeTruthy();
  });
});
