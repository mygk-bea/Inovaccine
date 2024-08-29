import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroClinicaPage } from './cadastro-clinica.page';

describe('CadastroClinicaPage', () => {
  let component: CadastroClinicaPage;
  let fixture: ComponentFixture<CadastroClinicaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroClinicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
