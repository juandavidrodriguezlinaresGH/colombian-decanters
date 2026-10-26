import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { CartSummary } from './cart-summary';

describe('CartSummary', () => {
  let fixture: ComponentFixture<CartSummary>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartSummary],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CartSummary);
    el = fixture.nativeElement as HTMLElement;
  });

  it('muestra cantidad de artículos, subtotal y total', async () => {
    fixture.componentRef.setInput('itemCount', 3);
    fixture.componentRef.setInput('subtotal', 407_480);
    fixture.componentRef.setInput('shippingFree', false);
    await fixture.whenStable();

    expect(el.textContent).toContain('3 artículos');
    expect(el.querySelector('.summary-total')?.textContent).toContain('407.480');
    expect(el.textContent).toContain('Por calcular');
  });

  it('usa singular con 1 artículo y muestra "Gratis" si el envío es gratis', async () => {
    fixture.componentRef.setInput('itemCount', 1);
    fixture.componentRef.setInput('subtotal', 600_000);
    fixture.componentRef.setInput('shippingFree', true);
    await fixture.whenStable();

    expect(el.textContent).toContain('1 artículo)');
    expect(el.textContent).toContain('Gratis');
  });
});