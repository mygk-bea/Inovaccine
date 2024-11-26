import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListagemAgendamentosPage } from './listagem-agendamentos.page';

describe('ListagemAgendamentosPage', () => {
  let component: ListagemAgendamentosPage;
  let fixture: ComponentFixture<ListagemAgendamentosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemAgendamentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
