import { Component } from '@angular/core';
import { OrdersInterface } from 'src/app/core/interfaces/orders-interface';
import { OrdersService } from '../../../core/services/orders.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  orders: OrdersInterface[] = [];

  constructor(
    public ordersService: OrdersService 
  ) {}

  ngOnInit(): void {
    this.orders = this.ordersService.orders
  }
}
