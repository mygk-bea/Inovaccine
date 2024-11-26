import { TestBed } from '@angular/core/testing';

import { AgendamentoService } from './agendamento.service';

describe('AgendamentoService', () => {
  let service: AgendamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
