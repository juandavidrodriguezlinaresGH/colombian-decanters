import { Injectable, computed, effect, signal } from '@angular/core';

export interface CartItem {
  id: number;
  category: string;
  name: string;
  image: string;
  unitPrice: number;
  quantity: number;
}

/** Producto tal como llega desde el catálogo (sin cantidad). */
export type CartProduct = Omit<CartItem, 'quantity'>;

/** Monto mínimo (COP) para obtener envío gratis. */
export const FREE_SHIPPING_THRESHOLD = 500_000;
export const MAX_QUANTITY = 99;

const STORAGE_KEY = 'colombian-decanters:cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly _items = signal<CartItem[]>(this.load());

  readonly items = this._items.asReadonly();
  readonly isEmpty = computed(() => this._items().length === 0);
  readonly itemCount = computed(() => this._items().reduce((sum, i) => sum + i.quantity, 0));
  readonly subtotal = computed(() =>
    this._items().reduce((sum, i) => sum + i.unitPrice * i.quantity, 0),
  );

  constructor() {
    // Guarda el carrito cada vez que cambia, para que sobreviva a recargar la página.
    effect(() => this.save(this._items()));
  }

  /** Para usar desde las páginas de productos: si ya está en el carrito suma la cantidad. */
  addItem(product: CartProduct, quantity = 1): void {
    if (!Number.isFinite(quantity) || quantity < 1) return;
    const amount = Math.min(Math.trunc(quantity), MAX_QUANTITY);
    this._items.update((items) => {
      const existing = items.find((i) => i.id === product.id);
      if (!existing) {
        return [...items, { ...product, quantity: amount }];
      }
      return items.map((i) =>
        i.id === product.id
          ? { ...i, ...product, quantity: Math.min(i.quantity + amount, MAX_QUANTITY) }
          : i,
      );
    });
  }

  increase(id: number): void {
    this.changeQuantity(id, 1);
  }

  decrease(id: number): void {
    this.changeQuantity(id, -1);
  }

  remove(id: number): void {
    this._items.update((items) => items.filter((i) => i.id !== id));
  }

  clear(): void {
    this._items.set([]);
  }

  private changeQuantity(id: number, delta: number): void {
    this._items.update((items) =>
      items.map((i) =>
        i.id === id
          ? { ...i, quantity: Math.min(Math.max(i.quantity + delta, 1), MAX_QUANTITY) }
          : i,
      ),
    );
  }

  private load(): CartItem[] {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === null) {
        return [];
      }
      const parsed: unknown = JSON.parse(saved);
      return Array.isArray(parsed) ? (parsed as CartItem[]) : [];
    } catch {
      return [];
    }
  }

  private save(items: CartItem[]): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Almacenamiento no disponible (modo privado, cuota llena): el carrito sigue funcionando en memoria.
    }
  }
}
