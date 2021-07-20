import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  OutputFieldModule,
  PriceModule,
  LineItemTableRowModule,
  BreadcrumbModule,
  PriceSummaryModule,
  ButtonModule,
  InputFieldModule,
  DataFilterModule,
  IconModule,
  AlertModule,
  TableModule,
  ChartModule
} from '@congacommerce/elements';
import { OrderRoutingModule } from './order-routing.module';
import { DetailsModule } from '../details/details.module';
import { PricingModule } from '@congacommerce/ecommerce';

import { TranslateModule } from '@ngx-translate/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ComponentModule } from '../../components/component.module';
import { LaddaModule } from 'angular2-ladda';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { OrderDetailComponent } from './layout/order-details/order-detail.component';


@NgModule({
  declarations: [OrderDetailComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    TableModule,
    ChartModule,
    DetailsModule,
    OutputFieldModule,
    ComponentModule,
    PriceModule,
    LineItemTableRowModule,
    BreadcrumbModule,
    PriceSummaryModule,
    PricingModule,
    TranslateModule.forChild(),
    TooltipModule.forRoot(),
    NgScrollbarModule,
    ButtonModule,
    LaddaModule,
    InputFieldModule,
    DataFilterModule,
    IconModule,
    AlertModule
  ]
})
export class OrderModule { }
