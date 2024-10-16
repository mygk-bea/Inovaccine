import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListagemCampanhasPage } from './listagem-campanhas.page';

describe('ListagemCampanhasPage', () => {
  let component: ListagemCampanhasPage;
  let fixture: ComponentFixture<ListagemCampanhasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemCampanhasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
