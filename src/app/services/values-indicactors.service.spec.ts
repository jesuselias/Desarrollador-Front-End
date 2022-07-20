import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ValuesIndicatorsService } from './values-indicators.service';

describe('IndicatorsService', () => {
  let service: ValuesIndicatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ValuesIndicatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    const testData = 'service values-indicators'
    expect(service.test).toEqual(testData)
  });
});
