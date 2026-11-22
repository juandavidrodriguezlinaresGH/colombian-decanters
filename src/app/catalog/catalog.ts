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
  {
    slug: 'cremas',
    name: 'Cremas',
    image: '/img/products/img-licor-cafe-reserva.webp',
    description: 'Explora nuestras Cremas y licores de café.',
  },
  {
    slug: 'artesanales',
    name: 'Artesanales',
    image: '/img/products/img-tomaseca-herencia-pacifico.webp',
    description: 'Explora nuestras Cremas y licores de café.',
  },
  {
    slug: 'cocteles',
    name: 'Cocteles',
    image: '/img/products/img-coctel-mojito.webp',
    description: 'Explora nuestras Cremas y licores de café.',
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
    categorySlug: 'cremas',
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
  {
    id: 13,
    unitPrice: 95000,
    description:
      'Licor elaborado con ron y una infusión de café colombiano, con reposo en barriles de roble americano.',
    presentation: 'Botella de 700 ml',
    categorySlug: 'cremas',
    name: 'Licor de Café  Gran Reserva',
    image: '/img/products/img-licor-cafe-reserva.webp',
  },
  {
    id: 14,
    unitPrice: 45000,
    description: 'Crema de base láctea elaborada con malta de whisky y un toque de café.',
    presentation: 'Botella de 750 ml',
    categorySlug: 'cremas',
    name: 'Crema de Whisky Coloma',
    image: '/img/products/img-Crema-de-Whisky.webp',
  },
  {
    id: 15,
    unitPrice: 35000,
    description:
      'Bebida tradicional del Pacífico colombiano, de perfil herbal y sabor entre amargo y dulce, con notas de especias.',
    presentation: 'Botella de 350 ml',
    categorySlug: 'artesanales',
    name: 'Tomaseca Herencia Pacífico',
    image: '/img/products/img-tomaseca-herencia-pacifico.webp',
  },
  {
    id: 16,
    unitPrice: 45000,
    description:
      'Crema artesanal de aguardiente de caña con ingredientes lácteos y especias aromáticas, de textura cremosa y sabor dulce.',
    presentation: 'Botella de 350 ml',
    categorySlug: 'artesanales',
    name: 'Arrechón Herencia Pacífico',
    image: '/img/products/img-arrechon-herencia-pacifico.webp',
  },
  {
    id: 17,
    unitPrice: 35000,
    description:
      'Bebida de la línea ancestral de Herencia Pacífico, elaborada con la especia pipilongo y vinculada a la tradición del Pacífico colombiano.',
    presentation: 'Botella de 350 ml',
    categorySlug: 'artesanales',
    name: 'Pipilongo Herencia Pacífico',
    image: '/img/products/pipilongo-herencia-pacifico.webp',
  },
  {
    id: 18,
    unitPrice: 11000,
    description:
      'Cóctel Daiquiri de Ron Viejo de Caldas, listo para tomar en una práctica presentación en lata.',
    presentation: 'Lata de 295 ml',
    categorySlug: 'cocteles',
    name: 'Daiquiri Ron Viejo de Caldas',
    image: '/img/products/img-coctel-caldas-daiquiri.webp',
  },
  {
    id: 19,
    unitPrice: 11000,
    description:
      'Cóctel preparado con Ron Viejo de Caldas y sabor a lima y menta verde, listo para tomar.',
    presentation: 'Lata de 295 ml',
    categorySlug: 'cocteles',
    name: 'Mojito Ron Viejo de Caldas',
    image: '/img/products/img-coctel-mojito.webp',
  },
  {
    id: 20,
    unitPrice: 11000,
    description:
      'Cóctel preparado con Ron Viejo de Caldas y sabor a limón y cola, listo para tomar.',
    presentation: 'Lata de 295 ml',
    categorySlug: 'cocteles',
    name: 'Cuba Libre Ron Viejo de Caldas',
    image: '/img/products/img-coctelviejodecaldascubalibre.webp',
  },
  {
    id: 21,
    unitPrice: 4800,
    description:
      'Cóctel con tequila sabor a margarita y fresa, listo para tomar en presentación individual.',
    presentation: 'Lata de 269 ml',
    categorySlug: 'cocteles',
    name: 'Los Cuates Fresa',
    image: '/img/products/img-cuate-fresa.webp',
  },
  {
    id: 22,
    unitPrice: 4800,
    description:
      'Cóctel con tequila sabor a margarita y mango, listo para tomar en presentación individual.',
    presentation: 'Lata de 269 ml',
    categorySlug: 'cocteles',
    name: 'Los Cuates Mango',
    image: '/img/products/img-cuate-mango.webp',
  },
  {
    id: 23,
    unitPrice: 4800,
    description:
      'Cóctel con tequila sabor a margarita y limon, listo para tomar en presentación individual.',
    presentation: 'Lata de 269 ml',
    categorySlug: 'cocteles',
    name: 'Los Cuates Limon',
    image: '/img/products/img-cuate-limon.webp',
  },
  {
    id: 24,
    unitPrice: 4500,
    description: 'Cerveza Coronita de nuestra selección de las mejores cervezas .',
    presentation: 'Unidad',
    categorySlug: 'cervezas',
    name: 'Cerveza Coronita',
    image: '/img/products/img-coronita.webp',
  },
];
