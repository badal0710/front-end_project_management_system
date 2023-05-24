import { TestBed } from '@angular/core/testing';

import { TaskdetailService } from './taskdetail.service';

describe('TaskdetailService', () => {
  let service: TaskdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
