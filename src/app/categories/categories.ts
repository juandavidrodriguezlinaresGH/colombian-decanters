import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface Category {
  slug: string;
  name: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-categories',
  imports: [RouterLink],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {
  private readonly route = inject(ActivatedRoute);

  // Añade aquí un objeto por cada nueva categoría e imagen.
  categories: Category[] = [
    {
      slug: 'aguardientes',
      name: 'Aguardientes',
      image: '/img/products/img-aguardiente-amarillo.webp',
      description: 'Explora nuestros aguardientes.',
    },
    {
      slug: 'vinos',
      name: 'Vinos',
      image: '/img/products/img-vino.webp',
      description: 'Descubre nuestra selección de vinos.',
    },
    {
      slug: 'cervezas',
      name: 'Cervezas',
      image: '/img/products/img-aguila.webp',
      description: 'Conoce las cervezas disponibles.',
    },
     {
      slug: 'rones',
      name: 'Rones',
      image: '/img/products/img-ron-medellin.webp',
      description: 'Conoce las cervezas disponibles.',
    },
     {
      slug: 'especiales',
      name: 'Especiales',
      image: '/img/products/img-bitter.webp',
      description: 'Conoce las cervezas disponibles.',
    },
   
  ];

  get selectedCategory(): Category | undefined {
    const slug = this.route.snapshot.paramMap.get('slug');
    return this.categories.find((category) => category.slug === slug);
  }
}
