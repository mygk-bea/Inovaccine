import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroFuncionarioPage } from './cadastro-funcionario.page';

describe('CadastroFuncionarioPage', () => {
  let component: CadastroFuncionarioPage;
  let fixture: ComponentFixture<CadastroFuncionarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroFuncionarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
