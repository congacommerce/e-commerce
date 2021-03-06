import { NgModule } from '@angular/core';
import { InstalledProductsRoutingModule } from './installed-products-routing.module';
import { InstalledProductsLayoutComponent } from './layout/installed-products-layout.component';
import { ProductFamilyFilterComponent } from './components/product-family-filter.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CommonModule } from '@angular/common';
import { PricingModule } from '@congacommerce/ecommerce';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RenewalFilterComponent } from './components/renewal-filter.component';
import { ApttusModule } from '@congacommerce/core';
import { PriceTypeFilterComponent } from './components/price-type-filter.component';
import { AssetActionFilterComponent } from './components/asset-action-filter.component';
import { AssetListModule, FilterModule, InputSelectModule, TableModule, ChartModule, DataFilterModule, ConstraintRuleModule, AlertModule } from '@congacommerce/elements';
import { ButtonModule } from '@congacommerce/elements';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ApttusModule,
    PricingModule,
    FilterModule,
    AssetListModule,
    TableModule,
    ChartModule,
    DataFilterModule,
    InputSelectModule,
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(),
    InstalledProductsRoutingModule,
    AccordionModule.forRoot(),
    ButtonModule,
    ConstraintRuleModule,
    AlertModule
  ],
  declarations: [
    InstalledProductsLayoutComponent,
    RenewalFilterComponent,
    PriceTypeFilterComponent,
    ProductFamilyFilterComponent,
    AssetActionFilterComponent
  ]
})
export class InstalledProductsModule {

}
