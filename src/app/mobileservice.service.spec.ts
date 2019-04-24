import { TestBed } from '@angular/core/testing';

import { MobileserviceService } from './mobileservice.service';

describe('CollegeserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MobileserviceService = TestBed.get(MobileserviceService);
    expect(service).toBeTruthy();
  });
});
