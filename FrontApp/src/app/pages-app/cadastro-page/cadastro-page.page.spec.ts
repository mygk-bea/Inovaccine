import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroPagePage } from './cadastro-page.page';

describe('CadastroPagePage', () => {
  let component: CadastroPagePage;
  let fixture: ComponentFixture<CadastroPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
