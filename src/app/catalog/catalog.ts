export interface Category {
  slug: string;
  name: string;
  image: string;
  description: string;
}

export interface Product {
  unitPrice: number;
  description: string;
  presentation: string;
  id: number;
  categorySlug: Category['slug'];
  name: string;
  image: string;
}

// Agrega un objeto con un slug único para mostrar una nueva categoría.
export const CATEGORIES: readonly Category[] = [
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
    description: 'Descubre nuestra selección de rones.',
  },
  {
    slug: 'especiales',
    name: 'Especiales',
    image: '/img/products/img-bitter.webp',
    description: 'Explora nuestros licores especiales.',
  },
];

// Para añadir productos: guarda la imagen en public/img/products y agrega
// un objeto con id único y el categorySlug de su categoría. La vista lo filtra automáticamente.
// Precios y descripciones de ejemplo: reemplazar por los datos comerciales antes de publicar.
export const PRODUCTS: readonly Product[] = [
  {
    id: 1,
    unitPrice: 52000,
    description: 'Aguardiente Antioqueño Verde de nuestra selección de aguardientes.',
    presentation: 'Botella',
    categorySlug: 'aguardientes',
    name: 'Aguardiente Antioqueño Verde',
    image: '/img/products/img-aguardiente-antioqueño-verde.webp',
  },
  {
    id: 2,
    unitPrice: 54000,
    description: 'Aguardiente Antioqueño Azul de nuestra selección de aguardientes.',
    presentation: 'Botella',
    categorySlug: 'aguardientes',
    name: 'Aguardiente Antioqueño Azul',
    image: '/img/products/img-aguardiente-antioqueño-azul.webp',
  },
  {
    id: 3,
    unitPrice: 50000,
    description: 'Aguardiente Antioqueño Rojo de nuestra selección de aguardientes.',
    presentation: 'Botella',
    categorySlug: 'aguardientes',
    name: 'Aguardiente Antioqueño Rojo',
    image: '/img/products/img-aguardiente-antioqueño-rojo.webp',
  },
  {
    id: 4,
    unitPrice: 52000,
    description: 'Aguardiente Amarillo para compartir en tus celebraciones.',
    presentation: 'Botella',
    categorySlug: 'aguardientes',
    name: 'Aguardiente Amarillo',
    image: '/img/products/img-aguardiente-amarillo.webp',
  },
  {
    id: 5,
    unitPrice: 4500,
    description: 'Cerveza Poker de nuestra selección de cervezas colombianas.',
    presentation: 'Unidad',
    categorySlug: 'cervezas',
    name: 'Cerveza Poker',
    image: '/img/products/img-poker.webp',
  },
  {
    id: 6,
    unitPrice: 4500,
    description: 'Cerveza Águila de nuestra selección de cervezas colombianas.',
    presentation: 'Unidad',
    categorySlug: 'cervezas',
    name: 'Cerveza Águila',
    image: '/img/products/img-aguila.webp',
  },
  {
    id: 7,
    unitPrice: 4000,
    description: 'Cerveza Costeña de nuestra selección de cervezas colombianas.',
    presentation: 'Unidad',
    categorySlug: 'cervezas',
    name: 'Cerveza Costeña',
    image: '/img/products/img-costeña.webp',
  },
  {
    id: 8,
    unitPrice: 78500,
    description: 'Ron Medellín de nuestra selección de rones colombianos.',
    presentation: 'Botella',
    categorySlug: 'rones',
    name: 'Ron Medellín',
    image: '/img/products/img-ron-medellin.webp',
  },
  {
    id: 9,
    unitPrice: 72000,
    description: 'Ron Caldas de nuestra selección de rones colombianos.',
    presentation: 'Botella',
    categorySlug: 'rones',
    name: 'Ron Caldas',
    image: '/img/products/img-ron-caldas.webp',
  },
  {
    id: 10,
    unitPrice: 65000,
    description: 'Licor de Café de nuestra selección de licores especiales.',
    presentation: 'Botella',
    categorySlug: 'especiales',
    name: 'Licor de Café',
    image: '/img/products/img-licor-de-cafe.webp',
  },
  {
    id: 11,
    unitPrice: 89990,
    description:
      'Una opción de nuestra selección de vinos para acompañar tus ocasiones especiales.',
    presentation: 'Botella',
    categorySlug: 'vinos',
    name: 'Vino',
    image: '/img/products/img-vino.webp',
  },
  {
    id: 12,
    unitPrice: 58000,
    description: 'Bitter de nuestra selección de licores especiales.',
    presentation: 'Botella',
    categorySlug: 'especiales',
    name: 'Bitter',
    image: '/img/products/img-bitter.webp',
  },
];
