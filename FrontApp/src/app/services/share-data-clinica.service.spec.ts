import { TestBed } from '@angular/core/testing';

import { ShareDataClinicaService } from './share-data-clinica.service';

describe('ShareDataClinicaService', () => {
  let service: ShareDataClinicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareDataClinicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
