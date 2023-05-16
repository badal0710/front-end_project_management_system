import { TestBed } from '@angular/core/testing';

import { InverstorService } from './inverstor.service';

describe('InverstorService', () => {
  let service: InverstorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InverstorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
