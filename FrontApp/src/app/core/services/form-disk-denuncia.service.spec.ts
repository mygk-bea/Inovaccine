import { TestBed } from '@angular/core/testing';

import { FormDiskDenunciaService } from './form-disk-denuncia.service';

describe('FormDiskDenunciaService', () => {
  let service: FormDiskDenunciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormDiskDenunciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
