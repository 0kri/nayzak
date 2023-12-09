import { Component, Input } from '@angular/core';
import { OrdersInterface } from 'src/app/core/interfaces/orders-interface';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent {
  @Input() orderData!: OrdersInterface
}
