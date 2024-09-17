import { TestBed } from '@angular/core/testing';

import { LoteService } from './lote.service';

describe('LoteService', () => {
  let service: LoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
