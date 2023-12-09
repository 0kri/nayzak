import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomePageComponent } from './layout/components/home-page/home-page.component';
import { AccountDashboardComponent } from './layout/components/account-dashboard/account-dashboard.component';
import { TabManagerComponent } from './layout/tab-manager/tab-manager.component';
import { OrdersComponent } from './layout/components/orders/orders.component';
import { AddressesComponent } from './layout/components/addresses/addresses.component';
import { WishlistComponent } from './layout/components/wishlist/wishlist.component';
import { UserProfileComponent } from './layout/user-profile/user-profile.component';
import { AccountDetailsComponent } from './layout/components/account-details/account-details.component';
import { OrderCardComponent } from './layout/components/orders/order-card/order-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    AccountDashboardComponent,
    TabManagerComponent,
    OrdersComponent,
    AddressesComponent,
    WishlistComponent,
    UserProfileComponent,
    AccountDetailsComponent,
    OrderCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
