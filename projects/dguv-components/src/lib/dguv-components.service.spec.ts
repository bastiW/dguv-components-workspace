import { TestBed } from '@angular/core/testing';

import { DguvComponentsService } from './dguv-components.service';

describe('DguvComponentsService', () => {
  let service: DguvComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DguvComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
