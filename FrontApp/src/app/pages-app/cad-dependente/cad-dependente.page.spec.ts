import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadDependentePage } from './cad-dependente.page';

describe('CadDependentePage', () => {
  let component: CadDependentePage;
  let fixture: ComponentFixture<CadDependentePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadDependentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
