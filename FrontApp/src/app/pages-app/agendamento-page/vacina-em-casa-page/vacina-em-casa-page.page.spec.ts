import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VacinaEmCasaPagePage } from './vacina-em-casa-page.page';

describe('VacinaEmCasaPagePage', () => {
  let component: VacinaEmCasaPagePage;
  let fixture: ComponentFixture<VacinaEmCasaPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VacinaEmCasaPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
