import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaServicosPage } from './tela-servicos.page';

describe('TelaServicosPage', () => {
  let component: TelaServicosPage;
  let fixture: ComponentFixture<TelaServicosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaServicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
