import { TestBed } from '@angular/core/testing';

import { MarkergeneratorService } from './markergenerator.service';

describe('MarkergeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarkergeneratorService = TestBed.get(MarkergeneratorService);
    expect(service).toBeTruthy();
  });
});
