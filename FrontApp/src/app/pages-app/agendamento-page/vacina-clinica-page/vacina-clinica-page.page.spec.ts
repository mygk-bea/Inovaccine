import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VacinaClinicaPagePage } from './vacina-clinica-page.page';

describe('VacinaClinicaPagePage', () => {
  let component: VacinaClinicaPagePage;
  let fixture: ComponentFixture<VacinaClinicaPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VacinaClinicaPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
