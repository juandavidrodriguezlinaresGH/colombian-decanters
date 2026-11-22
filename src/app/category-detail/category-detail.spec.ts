import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { CategoryDetail } from './category-detail';

describe('CategoryDetail', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([{ path: 'categories/:slug', component: CategoryDetail }])],
    }).compileComponents();
  });

  it('muestra solo los productos de cada categoría al navegar', async () => {
    const harness = await RouterTestingHarness.create();
    for (const [slug, name, count] of [
      ['aguardientes', 'Aguardientes', 4],
      ['cervezas', 'Cervezas', 3],
      ['rones', 'Rones', 2],
      ['vinos', 'Vinos', 1],
      ['especiales', 'Especiales', 2],
    ] as const) {
      await harness.navigateByUrl(`/categories/${slug}`, CategoryDetail);
      expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toBe(name);
      expect(harness.routeNativeElement?.querySelectorAll('.product-card').length).toBe(count);
    }
  });

  it('reemplaza los productos al cambiar de categoría', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/categories/cervezas', CategoryDetail);
    expect(harness.routeNativeElement?.textContent).toContain('Cerveza Águila');
    expect(harness.routeNativeElement?.textContent).not.toContain('Ron Medellín');
    await harness.navigateByUrl('/categories/rones', CategoryDetail);
    expect(harness.routeNativeElement?.textContent).toContain('Ron Medellín');
    expect(harness.routeNativeElement?.textContent).not.toContain('Cerveza Águila');
    expect(harness.routeNativeElement?.querySelector('a')?.getAttribute('href')).toBe(
      '/categories',
    );
  });

  it('muestra un mensaje para una categoría inexistente', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/categories/no-existe', CategoryDetail);
    expect(harness.routeNativeElement?.textContent).toContain('Categoría no encontrada');
    expect(harness.routeNativeElement?.querySelectorAll('.product-card').length).toBe(0);
  });
});
