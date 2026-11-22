import { Component, computed, inject, linkedSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CATEGORIES, PRODUCTS } from '../catalog/catalog';
import { CartService, FREE_SHIPPING_THRESHOLD, MAX_QUANTITY } from '../cart-service/cart-service';
import { CopPipe } from '../cop-pipe/cop-pipe';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink, CopPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  private readonly params = toSignal(inject(ActivatedRoute).paramMap);
  protected readonly cart = inject(CartService);
  protected readonly product = computed(() =>
    PRODUCTS.find((product) => String(product.id) === this.params()?.get('id')),
  );
  protected readonly category = computed(() =>
    CATEGORIES.find((category) => category.slug === this.product()?.categorySlug),
  );
  protected readonly quantity = linkedSignal({ source: this.product, computation: () => 1 });
  protected readonly message = linkedSignal({ source: this.product, computation: () => '' });
  protected readonly maxQuantity = MAX_QUANTITY;
  protected readonly freeShippingThreshold = FREE_SHIPPING_THRESHOLD;
  protected readonly remainingQuantity = computed(() => {
    const current = this.cart.items().find((item) => item.id === this.product()?.id)?.quantity ?? 0;
    return MAX_QUANTITY - current;
  });

  protected changeQuantity(input: HTMLInputElement): void {
    const parsed = Number(input.value);
    this.quantity.set(
      Number.isFinite(parsed) ? Math.min(MAX_QUANTITY, Math.max(1, Math.trunc(parsed))) : 1,
    );
    input.value = String(this.quantity());
    this.message.set('');
  }

  protected addToCart(): void {
    const product = this.product();
    const category = this.category();
    if (!product || !category) return;
    const amount = Math.min(this.quantity(), this.remainingQuantity());
    if (amount <= 0) {
      this.message.set(
        `Ya tienes el máximo de ${MAX_QUANTITY} unidades de este producto en el carrito.`,
      );
      return;
    }
    this.cart.addItem(
      {
        id: product.id,
        category: category.name,
        name: product.name,
        image: product.image,
        unitPrice: product.unitPrice,
      },
      amount,
    );
    this.message.set(
      `${amount} ${amount === 1 ? 'unidad agregada' : 'unidades agregadas'} al carrito.`,
    );
  }
}
