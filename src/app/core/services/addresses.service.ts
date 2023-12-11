import { Injectable } from '@angular/core';
import { AddressesInterface } from '../interfaces/addresses-interface';

@Injectable({
  providedIn: 'root'
})
export class AddressesService {
  
  public addresses: AddressesInterface[] = [
    {
      id: 1,
      addressType: 'Shipping Address',
      name: 'Saba Okri',
      designer: 'OptiTrend Design',
      street: 'Teleti III turn 4',
      country: 'Georgia',
    },
    {
      id: 2,
      addressType: 'Billing Address',
      name: 'Jill Dower',
      designer: 'Nayzak Design',
      street: '10 strudwick CourtLondonSW4 6TE',
      country: 'United Kingdom',
    },
    {
      id: 3,
      addressType: 'Billing Address',
      name: 'Jill Bowe',
      designer: 'Nayzak Design',
      street: '11 strudwick CourtLondonSW4 6TE',
      country: 'United Kingdom',
    }

  ]
  constructor() { }
}
