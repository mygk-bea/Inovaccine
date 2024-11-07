import { TestBed } from '@angular/core/testing';

import { ListaClinicaService } from '../lista-clinica.service';

describe('ListaClinicaService', () => {
  let service: ListaClinicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaClinicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
