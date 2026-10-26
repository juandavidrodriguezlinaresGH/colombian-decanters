import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { CartPage } from './cart-page';
import { CartService } from '../cart-service/cart-service';

describe('CartPage', () => {
  let fixture: ComponentFixture<CartPage>;
  let cart: CartService;

  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [CartPage],
      providers: [provideRouter([])],
    }).compileComponents();

    cart = TestBed.inject(CartService);
    fixture = TestBed.createComponent(CartPage);
  });

  it('muestra el estado vacío y oculta lista y resumen', async () => {
    cart.clear();
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;

    expect(el.textContent).toContain('Tu carrito está vacío');
    expect(el.querySelector('app-cart-item-card')).toBeNull();
    expect(el.querySelector('app-cart-summary')).toBeNull();
  });

  it('muestra lista, barra y resumen cuando hay productos', async () => {
    cart.clear();
    cart.addItem({
      id: 1,
      category: 'Rones',
      name: 'Ron de prueba',
      image: '/img/products/img-ron-medellin.webp',
      unitPrice: 20_000,
    });
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;

    expect(el.querySelectorAll('app-cart-item-card').length).toBe(1);
    expect(el.querySelector('app-cart-summary')).not.toBeNull();
    expect(el.querySelector('app-free-shipping-bar')).not.toBeNull();
  });
});