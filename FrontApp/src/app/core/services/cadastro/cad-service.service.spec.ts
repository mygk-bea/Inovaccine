import { TestBed } from '@angular/core/testing';

import { CadServiceService } from './cad-service.service';

describe('CadServiceService', () => {
  let service: CadServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
