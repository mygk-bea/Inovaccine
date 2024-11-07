import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarteirinhaPage } from './carteirinha.page';

describe('CarteirinhaPage', () => {
  let component: CarteirinhaPage;
  let fixture: ComponentFixture<CarteirinhaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteirinhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
