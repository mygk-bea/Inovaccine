import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroMedicoPage } from './cadastro-medico.page';

describe('CadastroMedicoPage', () => {
  let component: CadastroMedicoPage;
  let fixture: ComponentFixture<CadastroMedicoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroMedicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
