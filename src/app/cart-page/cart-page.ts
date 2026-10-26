import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService, FREE_SHIPPING_THRESHOLD } from '../cart-service/cart-service';
import { FreeShippingBar } from '../free-shipping-bar/free-shipping-bar';
import { CartItemCard } from '../cart-item-card/cart-item-card';
import { CartSummary } from '../cart-summary/cart-summary';

@Component({
  selector: 'app-cart-page',
  imports: [RouterLink, FreeShippingBar, CartItemCard, CartSummary],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css',
})
export class CartPage {
  protected readonly cart = inject(CartService);
  protected readonly freeShippingThreshold = FREE_SHIPPING_THRESHOLD;
}