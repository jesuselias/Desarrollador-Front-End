import { TestBed } from '@angular/core/testing';

import { EmitIndicatorService } from './emit-indicator.service';

describe('EmitIndicatorService', () => {
  let service: EmitIndicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmitIndicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
