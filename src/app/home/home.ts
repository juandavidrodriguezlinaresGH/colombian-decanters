import { Component } from '@angular/core';
import { ImgCarrousel } from '../img-carrousel/img-carrousel';
import { Categories } from '../categories/categories';
import { Adverstisements } from '../adverstisements/adverstisements';


@Component({
  selector: 'app-home',
  imports: [ImgCarrousel, Categories, Adverstisements],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
