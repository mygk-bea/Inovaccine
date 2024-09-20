import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroLotePage } from './cadastro-lote.page';

describe('CadastroLotePage', () => {
  let component: CadastroLotePage;
  let fixture: ComponentFixture<CadastroLotePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroLotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
