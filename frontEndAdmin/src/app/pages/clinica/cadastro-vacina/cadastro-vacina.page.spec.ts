import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroVacinaPage } from './cadastro-vacina.page';

describe('CadastroVacinaPage', () => {
  let component: CadastroVacinaPage;
  let fixture: ComponentFixture<CadastroVacinaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroVacinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
