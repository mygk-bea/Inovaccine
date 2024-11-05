import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResponsavelPage } from './responsavel.page';

describe('ResponsavelPage', () => {
  let component: ResponsavelPage;
  let fixture: ComponentFixture<ResponsavelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsavelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
