import { TestBed } from '@angular/core/testing';

import { RomanConversionService } from './roman-conversion.service';

describe('RomanConversionService', () => {
  let service: RomanConversionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanConversionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
