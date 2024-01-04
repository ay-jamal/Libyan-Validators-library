import { TestBed } from '@angular/core/testing';

import { LibyanValidatorsService } from './libyan-validators.service';

describe('LibyanValidatorsService', () => {
  let service: LibyanValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibyanValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
