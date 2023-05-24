import { TestBed } from '@angular/core/testing';

import { InvestorProjectServiceService } from './investor-project-service.service';

describe('InvestorProjectServiceService', () => {
  let service: InvestorProjectServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestorProjectServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
