import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CopPipe } from '../cop-pipe/cop-pipe';

@Component({
  selector: 'app-cart-summary',
  imports: [RouterLink, CopPipe],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.css',
})
export class CartSummary {
  readonly itemCount = input.required<number>();
  readonly subtotal = input.required<number>();
  readonly shippingFree = input.required<boolean>();
}