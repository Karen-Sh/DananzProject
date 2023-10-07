import { TestBed } from '@angular/core/testing';

import { GataService } from './gata.service';

describe('GataService', () => {
  let service: GataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
