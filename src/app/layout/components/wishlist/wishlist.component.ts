import { Component } from '@angular/core';
import { WishlistInterface } from 'src/app/core/interfaces/wishlist-interface';
import { WishlistService } from '../../../core/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  
  wishlist: WishlistInterface[] = [];

  constructor(
    public _wishlistService: WishlistService
  ) { }

  ngOnInit(): void {
    this.wishlist = this._wishlistService.wishlist
  }
}
