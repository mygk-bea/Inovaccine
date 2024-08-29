import { TestBed } from '@angular/core/testing';

import { ClinicaService } from './clinica.service';

describe('ClinicaService', () => {
  let service: ClinicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClinicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
