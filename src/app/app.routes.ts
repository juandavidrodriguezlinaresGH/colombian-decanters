import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Categories } from './categories/categories';
import { ImgCarrousel } from './img-carrousel/img-carrousel';
import { Adverstisements } from './adverstisements/adverstisements';
import { CartPage } from './cart-page/cart-page';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'categories', component: Categories },
  { path: 'categories/:slug', component: Categories },
  { path: 'img-carrousel', component: ImgCarrousel },
  { path: 'adverstisements', component: Adverstisements },
  { path: 'adverstisements/:slug', component: Adverstisements },
  { path: 'carrito', component: CartPage },
  { path: '**', redirectTo: '' },
];
