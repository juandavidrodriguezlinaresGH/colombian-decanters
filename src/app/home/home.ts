import { Component } from '@angular/core';
import { ImgCarrousel } from '../img-carrousel/img-carrousel';


@Component({
  selector: 'app-home',
  imports: [ImgCarrousel],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
