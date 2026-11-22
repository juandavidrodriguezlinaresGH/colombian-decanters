import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { ProductDetail } from './product-detail';
import { routes } from '../app.routes';
import { PRODUCTS } from '../catalog/catalog';
import { CartService } from '../cart-service/cart-service';
import { CopPipe } from '../cop-pipe/cop-pipe';

describe('ProductDetail', () => {
  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('abre el detalle desde una tarjeta y agrega la cantidad elegida al carrito', async () => {
    const harness = await RouterTestingHarness.create('/categories/rones');
    const card = harness.routeNativeElement!.querySelector<HTMLAnchorElement>('.product-card')!;
    expect(card.getAttribute('href')).toBe('/products/8');
    card.click();
    await harness.fixture.whenStable();
    harness.detectChanges();
    expect(harness.routeNativeElement!.querySelector('h1')!.textContent).toContain('Ron Medellín');
    const product = PRODUCTS.find((product) => product.id === 8)!;
    expect(harness.routeNativeElement!.querySelector('.product-price')!.textContent).toContain(
      new CopPipe().transform(product.unitPrice),
    );

    const input = harness.routeNativeElement!.querySelector<HTMLInputElement>('input')!;
    input.value = '3';
    input.dispatchEvent(new Event('input'));
    harness.detectChanges();
    harness
      .routeNativeElement!.querySelector('form')!
      .dispatchEvent(new Event('submit', { cancelable: true }));
    await harness.fixture.whenStable();
    expect(TestBed.inject(CartService).items()).toEqual([
      {
        id: 8,
        category: 'Rones',
        name: product.name,
        image: product.image,
        unitPrice: product.unitPrice,
        quantity: 3,
      },
    ]);
    expect(harness.routeNativeElement!.textContent).toContain('3 unidades agregadas');
    await harness.navigateByUrl('/carrito');
    expect(harness.routeNativeElement!.textContent).toContain('Ron Medellín');
    expect(harness.routeNativeElement!.querySelectorAll('app-cart-item-card').length).toBe(1);
    expect(JSON.parse(localStorage.getItem('colombian-decanters:cart')!)[0].quantity).toBe(3);
  });

  it('actualiza el producto y reinicia la cantidad al cambiar de ruta', async () => {
    const harness = await RouterTestingHarness.create('/products/1');
    const input = harness.routeNativeElement!.querySelector<HTMLInputElement>('input')!;
    input.value = '5';
    input.dispatchEvent(new Event('input'));
    await harness.fixture.whenStable();
    await harness.navigateByUrl('/products/6', ProductDetail);
    expect(harness.routeNativeElement!.querySelector('h1')!.textContent).toContain(
      'Cerveza Águila',
    );
    expect(harness.routeNativeElement!.querySelector<HTMLInputElement>('input')!.value).toBe('1');
  });

  it('acumula cantidades sin superar el máximo y evita cantidades inválidas', async () => {
    const harness = await RouterTestingHarness.create('/products/4');
    const input = harness.routeNativeElement!.querySelector<HTMLInputElement>('input')!;
    const form = harness.routeNativeElement!.querySelector('form')!;
    input.value = '-2';
    input.dispatchEvent(new Event('input'));
    harness.detectChanges();
    expect(input.value).toBe('1');
    form.dispatchEvent(new Event('submit', { cancelable: true }));
    input.value = '200';
    input.dispatchEvent(new Event('input'));
    harness.detectChanges();
    form.dispatchEvent(new Event('submit', { cancelable: true }));
    await harness.fixture.whenStable();
    expect(TestBed.inject(CartService).items()[0].quantity).toBe(99);
    expect(harness.routeNativeElement!.querySelector<HTMLButtonElement>('button')!.disabled).toBe(
      true,
    );
  });

  it('muestra un estado para productos inexistentes sin controles de compra', async () => {
    const harness = await RouterTestingHarness.create('/products/999');
    expect(harness.routeNativeElement!.textContent).toContain('Producto no encontrado');
    expect(harness.routeNativeElement!.querySelector('form')).toBeNull();
    expect(TestBed.inject(CartService).isEmpty()).toBe(true);
  });
});
