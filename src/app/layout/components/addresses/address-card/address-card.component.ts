import { Component, Input } from '@angular/core';
import { AddressesInterface } from 'src/app/core/interfaces/addresses-interface';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent {
  @Input() addressData!: AddressesInterface
}
