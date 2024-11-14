import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeusAgendamentosPage } from './meus-agendamentos.page';

describe('MeusAgendamentosPage', () => {
  let component: MeusAgendamentosPage;
  let fixture: ComponentFixture<MeusAgendamentosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusAgendamentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
