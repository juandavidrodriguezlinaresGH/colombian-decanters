import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Advertisement {
  id: number;
  eyebrow: string;
  title: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-adverstisements',
  imports: [RouterLink],
  templateUrl: './adverstisements.html',
  styleUrl: './adverstisements.css',
})
export class Adverstisements {
  advertisements: Advertisement[] = [
    {
      id: 1,
      eyebrow: 'Selección colombiana',
      title: 'Aguardiente Antioqueño',
      image: '/img/products/img-aguardiente-amarillo.webp',
      link: '/categorias/aguardientes',
    },
    {
      id: 2,
      eyebrow: 'Para compartir',
      title: 'Cerveza Águila',
      image: '/img/products/img-aguila.webp',
      link: '/categorias/cervezas',
    },
    {
      id: 3,
      eyebrow: 'Una copa especial',
      title: 'Vinos seleccionados',
      image: '/img/products/img-vino.webp',
      link: '/categorias/vinos',
    },
  ];
}
