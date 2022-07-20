import { TestBed } from '@angular/core/testing';

import { IndicatorsService } from './indicators.service';

import { HttpClientModule, HttpClient } from '@angular/common/http'; 

describe('IndicatorsService', () => {
  let service: IndicatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(IndicatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    const testData = 'service indicators'
    expect(service.test).toEqual(testData)
  });

});
