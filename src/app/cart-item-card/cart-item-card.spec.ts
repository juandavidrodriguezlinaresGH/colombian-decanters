import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemCard } from './cart-item-card';
import { CartItem } from '../cart-service/cart-service';

const item: CartItem = {
  id: 7,
  category: 'Vinos',
  name: 'Vino de prueba',
  image: '/img/products/img-vino.webp',
  unitPrice: 10_000,
  quantity: 2,
};

describe('CartItemCard', () => {
  let fixture: ComponentFixture<CartItemCard>;
  let component: CartItemCard;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartItemCard],
    }).compileComponents();

    fixture = TestBed.createComponent(CartItemCard);
    component = fixture.componentInstance;
    el = fixture.nativeElement as HTMLElement;
    fixture.componentRef.setInput('item', item);
    await fixture.whenStable();
  });

  it('muestra nombre, precio unitario y subtotal del artículo', () => {
    expect(el.textContent).toContain('Vino de prueba');
    expect(el.textContent).toContain('10.000');
    expect(el.querySelector('.item-subtotal')?.textContent).toContain('20.000');
  });

  it('emite el id al pulsar +, − y eliminar', () => {
    const increased: number[] = [];
    const decreased: number[] = [];
    const removed: number[] = [];
    component.increase.subscribe((id) => increased.push(id));
    component.decrease.subscribe((id) => decreased.push(id));
    component.remove.subscribe((id) => removed.push(id));

    const buttons = el.querySelectorAll<HTMLButtonElement>('button');
    buttons[0].click(); // −
    buttons[1].click(); // +
    buttons[2].click(); // eliminar

    expect(decreased).toEqual([7]);
    expect(increased).toEqual([7]);
    expect(removed).toEqual([7]);
  });

  it('desactiva el botón − cuando la cantidad es 1', async () => {
    fixture.componentRef.setInput('item', { ...item, quantity: 1 });
    await fixture.whenStable();

    const minus = el.querySelector<HTMLButtonElement>('button[aria-label="Disminuir cantidad"]');
    expect(minus?.disabled).toBe(true);
  });
});