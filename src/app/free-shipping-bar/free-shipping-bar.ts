import { Component, computed, input } from '@angular/core';
import { CopPipe } from '../cop-pipe/cop-pipe';
import { FREE_SHIPPING_THRESHOLD } from '../cart-service/cart-service';

@Component({
  selector: 'app-free-shipping-bar',
  imports: [CopPipe],
  templateUrl: './free-shipping-bar.html',
  styleUrl: './free-shipping-bar.css',
})
export class FreeShippingBar {
  readonly subtotal = input.required<number>();
  readonly threshold = input(FREE_SHIPPING_THRESHOLD);

  protected readonly remaining = computed(() => Math.max(this.threshold() - this.subtotal(), 0));
  protected readonly reached = computed(() => this.remaining() === 0);
  protected readonly progress = computed(() =>
    this.threshold() > 0
      ? Math.min(Math.round((this.subtotal() / this.threshold()) * 100), 100)
      : 100,
  );
}
