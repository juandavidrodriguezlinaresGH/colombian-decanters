import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeShippingBar } from './free-shipping-bar';

describe('FreeShippingBar', () => {
  let fixture: ComponentFixture<FreeShippingBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeShippingBar],
    }).compileComponents();

    fixture = TestBed.createComponent(FreeShippingBar);
  });

  it('muestra cuánto falta y el progreso cuando no se llega al umbral', async () => {
    fixture.componentRef.setInput('subtotal', 400_000);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;

    expect(el.textContent).toContain('Te faltan');
    expect(el.textContent).toContain('100.000');
    expect((el.querySelector('.shipping-fill') as HTMLElement).style.width).toBe('80%');
  });

  it('indica envío gratis al alcanzar el umbral', async () => {
    fixture.componentRef.setInput('subtotal', 600_000);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;

    expect(el.textContent).toContain('tiene envío gratis');
    expect((el.querySelector('.shipping-fill') as HTMLElement).style.width).toBe('100%');
  });
});