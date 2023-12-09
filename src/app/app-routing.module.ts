import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './layout/components/home-page/home-page.component';
import { AccountDashboardComponent } from './layout/components/account-dashboard/account-dashboard.component';
import { OrdersComponent } from './layout/components/orders/orders.component';
import { AddressesComponent } from './layout/components/addresses/addresses.component';
import { WishlistComponent } from './layout/components/wishlist/wishlist.component';
import { UserProfileComponent } from './layout/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Home Page',
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
    title: 'My Profile',
    children: [
      {
        path: 'wishlist',
        component: WishlistComponent,
        pathMatch: 'full'
      },
      {
        path: 'account-dashboard',
        component: AccountDashboardComponent,
        title: 'Account Dashboard',
      },
      {
        path: 'orders',
        component: OrdersComponent,
        title: 'Orders',
      },
      {
        path: 'addresses',
        component: AddressesComponent,
        title: 'Addresses',
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
