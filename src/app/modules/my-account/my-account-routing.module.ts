/**
 * Apttus Digital Commerce
 *
 * Dedicated routing module for the my account module
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyAccountLayoutComponent } from './layout/my-account-layout.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { OrderListComponent } from './component/order-list/order-list.component';
import { QuoteListComponent } from './component/quote-list/quote-list.component';
import { WishlistsComponent } from './component/wishlists/wishlists.component';
import { AddressBookComponent } from './component/address-book/address-book.component';
import { SettingsComponent } from './component/settings/settings.component';
import { CartListComponent } from './component/cart-list/cart-list.component';
import { FavoriteListComponent } from './component/favorite-list/favorite-list.component';



const routes: Routes = [
  {
    path : '',
    title: 'My Account',
    component: MyAccountLayoutComponent,
    children : [
      {
        path : 'dashboard',
        title: 'My Account - Dashboard',
        component : DashboardComponent
      },
      {
        path : 'orders',
        title: 'My Account - Orders',
        component : OrderListComponent
      },
      {
        path : 'quotes',
        title: 'My Account - Quotes',
        component : QuoteListComponent
      },
      {
        path : 'wishlists',
        title: 'My Account - Wishlists',
        component : WishlistsComponent
      },
      {
        path : 'addresses',
        title: 'My Account - Addresses',
        component : AddressBookComponent
      },
      {
        path : 'settings',
        title: 'My Account - Settings',
        component : SettingsComponent
      },
      {
        path : 'carts',
        title: 'My Account - Carts',
        component : CartListComponent
      },
      {
        path : 'favorites',
        title: 'My Account - Favorites',
        component : FavoriteListComponent
      },
      {
        path : '',
        redirectTo : 'dashboard',
        pathMatch : 'full'
      }
    ]
  }
];

/**
 * @internal
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAccountRoutingModule { }
