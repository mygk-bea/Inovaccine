import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListagemVacinasPage } from './listagem-vacinas.page';

describe('ListagemVacinasPage', () => {
  let component: ListagemVacinasPage;
  let fixture: ComponentFixture<ListagemVacinasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemVacinasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
