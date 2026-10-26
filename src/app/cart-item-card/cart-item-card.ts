import { Component, computed, input, output } from '@angular/core';
import { CopPipe } from '../cop-pipe/cop-pipe';
import { CartItem, MAX_QUANTITY } from '../cart-service/cart-service';

@Component({
  selector: 'app-cart-item-card',
  imports: [CopPipe],
  templateUrl: './cart-item-card.html',
  styleUrl: './cart-item-card.css',
})
export class CartItemCard {
  readonly item = input.required<CartItem>();

  readonly increase = output<number>();
  readonly decrease = output<number>();
  readonly remove = output<number>();

  protected readonly maxQuantity = MAX_QUANTITY;
  protected readonly lineTotal = computed(() => this.item().unitPrice * this.item().quantity);
}