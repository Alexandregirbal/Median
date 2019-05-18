import { TestBed } from '@angular/core/testing';

import { UeService } from './ue.service';

describe('UeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UeService = TestBed.get(UeService);
    expect(service).toBeTruthy();
  });
});
