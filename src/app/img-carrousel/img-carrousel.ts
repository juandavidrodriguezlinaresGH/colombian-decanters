import { Component } from '@angular/core';

@Component({
  selector: 'app-img-carrousel',
  imports: [],
  templateUrl: './img-carrousel.html',
  styleUrl: './img-carrousel.css',
})
export class ImgCarrousel {
  productos = [
    {
      id: 1,
      nombre: 'Aguardiente Antioqueño verde',
      descripcion: 'Una opción tradicional colombiana.',
      imagen: '/img/products/img-aguardiente-antioqueño-verde.webp',
    },
    {
      id: 2,
      nombre: 'Aguardiente Antioqueño Azul',
      descripcion: 'Ideal para compartir.',
      imagen: '/img/products/img-aguardiente-antioqueño-azul.webp',
    },
    {
      id: 3,
      nombre: 'Aguardiente Antioqueño Rojo',
      descripcion: 'Encuentra distintas referencias.',
      imagen: '/img/products/img-aguardiente-antioqueño-rojo.webp',
    },
    {
      id: 4,
      nombre: 'Aguardiente Amarillo',
      descripcion: 'Encuentra distintas referencias.',
      imagen: '/img/products/img-aguardiente-amarillo.webp',
    },
    {
      id: 5,
      nombre: 'Cerveza Poker',
      descripcion: 'Encuentra distintas referencias.',
      imagen: '/img/products/img-poker.webp',
    },
    {
      id: 6,
      nombre: 'Cerveza Aguila',
      descripcion: 'Encuentra distintas referencias.',
      imagen: '/img/products/img-aguila.webp',
    },
    {
      id: 7,
      nombre: 'Cerveza Costeña',
      descripcion: 'Encuentra distintas referencias.',
      imagen: '/img/products/img-costeña.webp',
    },
    {
      id: 8,
      nombre: 'Ron Medellin',
      descripcion: 'Encuentra distintas referencias.',
      imagen: '/img/products/img-ron-medellin.webp',
    },
    {
      id: 9,
      nombre: 'Ron Caldas ',
      descripcion: 'Encuentra distintas referencias.',
      imagen: '/img/products/img-ron-caldas.webp',
    },
    {
      id: 10,
      nombre: 'Licor de Cafe',
      descripcion: 'Encuentra distintas referencias.',
      imagen: '/img/products/img-licor-de-cafe.webp',
    },
    {
      id: 11,
      nombre: 'Vino',
      descripcion: 'Encuentra distintas referencias.',
      imagen: '/img/products/img-vino.webp',
    },
    {
      id: 12,
      nombre: 'bitter',
      descripcion: 'Encuentra distintas referencias.',
      imagen: '/img/products/img-bitter.webp',
    }
  ];
}
