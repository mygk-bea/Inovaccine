import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaInicialPage } from './tela-inicial.page';

describe('TelaInicialPage', () => {
  let component: TelaInicialPage;
  let fixture: ComponentFixture<TelaInicialPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaInicialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
