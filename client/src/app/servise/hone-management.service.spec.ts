import { TestBed } from '@angular/core/testing';

import { HoneManagementService } from './hone-management.service';

describe('HoneManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HoneManagementService = TestBed.get(HoneManagementService);
    expect(service).toBeTruthy();
  });
});
