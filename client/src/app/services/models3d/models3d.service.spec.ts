import { TestBed } from '@angular/core/testing';

import { Models3dService } from './models3d.service';

describe('Models3dService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Models3dService = TestBed.get(Models3dService);
    expect(service).toBeTruthy();
  });
});
