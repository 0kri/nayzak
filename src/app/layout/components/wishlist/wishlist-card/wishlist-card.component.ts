import { Component, Input } from '@angular/core';
import { WishlistInterface } from 'src/app/core/interfaces/wishlist-interface';

@Component({
  selector: 'app-wishlist-card',
  templateUrl: './wishlist-card.component.html',
  styleUrls: ['./wishlist-card.component.css']
})
export class WishlistCardComponent {
  @Input() wishlistData!: WishlistInterface;
}
