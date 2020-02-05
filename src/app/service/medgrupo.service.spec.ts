import { TestBed } from '@angular/core/testing';

import { MedgrupoService } from './medgrupo.service';

describe('MedgrupoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedgrupoService = TestBed.get(MedgrupoService);
    expect(service).toBeTruthy();
  });
});
