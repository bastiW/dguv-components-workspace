import { TestBed } from '@angular/core/testing';

import { DguvSampleComponentService } from './dguv-sample-components.service';

describe('DguvSampleComponentService', () => {
  let service: DguvSampleComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DguvSampleComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
