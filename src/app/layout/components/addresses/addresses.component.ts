import { Component } from '@angular/core';
import { AddressesInterface } from 'src/app/core/interfaces/addresses-interface';
import { AddressesService } from 'src/app/core/services/addresses.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent {
  
  addresses: AddressesInterface[] = [];

  constructor(
    public addressesService: AddressesService
    ) {}

  ngOnInit(): void {
    this.addresses = this.addressesService.addresses
  }
}
