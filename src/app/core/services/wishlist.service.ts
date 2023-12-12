import { Injectable } from '@angular/core';
import { WishlistInterface } from '../interfaces/wishlist-interface';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  public wishlist: WishlistInterface[] = [
    {
      img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6123fbcc-829a-4312-86b1-5859a1420d32/freak-5-basketball-shoes-9cDXCm.png',
      description: 
        {
          title: 'Nike Freak 5',
          size: '11.5',
          color: 'pink',
        },
      price: "100.00"
    },
    {
      img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/66cdf9bc-7e9f-4f54-9f52-e1621a9a2f31/air-max-90-shoes-nqglHB.png',
      description: 
        {
          title: 'Nike Air Max 1728',
          size: '10',
          color: '#FFFFFF',
        },
      price: "150.00"
    },

  ]
  static wishlist: WishlistInterface[];

  constructor() { }
}
