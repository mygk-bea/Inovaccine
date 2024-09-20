import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgendamentoPagePage } from './agendamento-page.page';

describe('AgendamentoPagePage', () => {
  let component: AgendamentoPagePage;
  let fixture: ComponentFixture<AgendamentoPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentoPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
