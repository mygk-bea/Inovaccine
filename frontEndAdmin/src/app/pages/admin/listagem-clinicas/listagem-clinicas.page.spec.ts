import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListagemClinicasPage } from './listagem-clinicas.page';

describe('ListagemClinicasPage', () => {
  let component: ListagemClinicasPage;
  let fixture: ComponentFixture<ListagemClinicasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemClinicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
