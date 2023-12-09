import { Injectable } from '@angular/core';
import { OrdersInterface } from '../interfaces/orders-interface';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  public orders: OrdersInterface[] = [
    {
      id: 1,
      date: 'july 24, 2022',
      status: 'Pending',
      price: 100
    },
    {
      id: 2,
      date: 'December 28, 2000',
      status: 'Delivered',
      price: 12
    },
    {
      id: 3,
      date: 'October 04, 2008',
      status: 'Delivered',
      price: 8
    },

  ]
  constructor() { }
}
