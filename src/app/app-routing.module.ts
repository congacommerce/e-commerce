/**
 * Apttus Digital Commmerce
 *
 * Primary routing module for the application. Provides all the root level routing paths for the application
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderDetailsGuard } from '@congacommerce/ecommerce';
import { environment } from '../environments/environment';
import { RouteGuard } from './services/route.guard';
import { ConstraintRuleGuard } from './services/constraint-rule.guard';
import { AuthGuard } from './services/auth.guard';
import { AboGuard } from './services/abo.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    data: { title: 'B2B E-commerce' }
  },
  {
    path: 'change-password',
    loadChildren: () => import('./modules/change-password/change-password.module').then(m => m.ChangePasswordModule),
    data: { title: 'Change Password' }
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule),
    data: { title: 'Product' }
  },
  {
    path: 'assets',
    canActivate: [RouteGuard, AuthGuard, AboGuard],
    loadChildren: () => import('./modules/installed-products/installed-products.module').then(m => m.InstalledProductsModule),
    data: { title: 'Installed Products' }
  },
  {
    path: 'search/:query',
    loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule),
    data: { title: 'Search' }
  },
  {
    path: 'checkout',
    loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule),
    canActivate: [RouteGuard, ConstraintRuleGuard],
    data: { title: 'Checkout' }
  },
  {
    path: 'my-account',
    loadChildren: () => import('./modules/my-account/my-account.module').then(m => m.MyAccountModule),
    data: { title: 'My Account' },
    canActivate: [AuthGuard]
  },
  {
    path: 'carts',
    loadChildren: () => import('./modules/manage-cart/manage-cart.module').then(m => m.ManageCartModule),
    data: { title: 'Cart' }
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
    data: { title: 'Login'}
  },
  {
    path: 'orders',
    loadChildren: () => import('./modules/order/order.module').then(m => m.OrderModule),
    data: { title: 'Orders' }
  },
  {
    path: 'proposals',
    loadChildren: () => import('./modules/quote/quote.module').then(m => m.QuoteModule),
    data: { title: 'Proposals'},
    canActivate: [AuthGuard]
  },
  {
    path: 'payment-message',
    loadChildren: () => import('./modules/payment/payment-message.module').then(m => m.PaymentMessageModule),
    data: { title: 'Payment Message'}
  },
  {
    path: '**',
    redirectTo: ''
  }
];

/**
 * @internal
 */
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: environment.hashRouting, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
