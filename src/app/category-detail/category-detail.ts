import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CATEGORIES, PRODUCTS } from '../catalog/catalog';

@Component({
  selector: 'app-category-detail',
  imports: [RouterLink],
  templateUrl: './category-detail.html',
  styleUrl: './category-detail.css',
})
export class CategoryDetail {
  private readonly params = toSignal(inject(ActivatedRoute).paramMap);

  protected readonly category = computed(() =>
    CATEGORIES.find((category) => category.slug === this.params()?.get('slug')),
  );

  protected readonly products = computed(() =>
    PRODUCTS.filter((product) => product.categorySlug === this.category()?.slug),
  );
}
