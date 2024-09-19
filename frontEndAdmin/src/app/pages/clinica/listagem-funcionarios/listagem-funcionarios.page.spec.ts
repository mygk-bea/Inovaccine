import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListagemFuncionariosPage } from './listagem-funcionarios.page';

describe('ListagemFuncionariosPage', () => {
  let component: ListagemFuncionariosPage;
  let fixture: ComponentFixture<ListagemFuncionariosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemFuncionariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
