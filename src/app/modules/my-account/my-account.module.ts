import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountLayoutComponent } from './layout/my-account-layout.component';

import { LazyLoadImageModule } from 'ng-lazyload-image';
import { OrderListComponent } from './component/order-list/order-list.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { QuoteListComponent } from './component/quote-list/quote-list.component';
import { WishlistsComponent } from './component/wishlists/wishlists.component';
import { AddressBookComponent } from './component/address-book/address-book.component';
import { SettingsComponent } from './component/settings/settings.component';
import { ComponentModule } from '../../components/component.module';

import { StoreModule, PricingModule } from '@apttus/ecommerce';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CartListComponent } from './component/cart-list/cart-list.component';
import { ProductCatalogComponent } from './component/product-catalog/product-catalog.component';
import { ApttusModule } from '@apttus/core';
import { OrderDetailComponent } from './component/order-detail/order-detail.component';
import { QuoteDetailComponent } from './component/quote-detail/quote-detail.component';
import { ReorderComponent } from './component/reorder/reorder.component';
import { MdSpinnerModule, AddressModule, PriceModule, InputQuantityModule, ProductConfigurationSummaryModule } from '@apttus/elements';

@NgModule({
  imports: [
    CommonModule,
    ApttusModule,
    MyAccountRoutingModule,
    LazyLoadImageModule,
    StoreModule,
    PricingModule,
    ComponentModule,
    MdSpinnerModule,
    AddressModule,
    PriceModule,
    FormsModule,
    InputQuantityModule,
    ProductConfigurationSummaryModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot()
  ],
  declarations: [MyAccountLayoutComponent, OrderListComponent, DashboardComponent, QuoteListComponent, WishlistsComponent, AddressBookComponent, SettingsComponent, CartListComponent, ProductCatalogComponent, OrderDetailComponent, QuoteDetailComponent, ReorderComponent],
  exports: []
})
export class MyAccountModule { }
