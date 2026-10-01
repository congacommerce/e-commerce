/**
 * Apttus Digital Commmerce
 *
 * Primary routing module for the application. Provides all the root level routing paths for the application
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginGuard } from '@congacommerce/ecommerce';
import { environment } from '../environments/environment';
import { MainComponent } from './main.component';
import { RouteGuard } from './services/route.guard';
import { ConstraintRuleGuard } from './services/constraint-rule.guard';
import { AboGuard } from './services/abo.guard';
import { WildcardGuard } from './services/wildcard.guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        children: [
          {
            path: 'u',
            loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
          },
          {
            path: '',
            canActivate: [LoginGuard],
            component: MainComponent,
            data: {
              redirectUrl: '/u/login'
            },
            children: [
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
                canActivate: [AboGuard],
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
                data: { title: 'My Account' }
              },
              {
                path: 'carts',
                loadChildren: () => import('./modules/manage-cart/manage-cart.module').then(m => m.ManageCartModule),
                data: { title: 'Cart' }
              },
              {
                path: 'orders',
                loadChildren: () => import('./modules/order/order.module').then(m => m.OrderModule),
                data: { title: 'Orders' }
              },
              {
                path: 'proposals',
                loadChildren: () => import('./modules/quote/quote.module').then(m => m.QuoteModule),
                data: { title: 'Proposals' }
              },
              {
                path: 'payment-message',
                loadChildren: () => import('./modules/payment/payment-message.module').then(m => m.PaymentMessageModule),
                data: { title: 'Payment Message' }
              },
              {
                path: 'favorites',
                loadChildren: () => import('./modules/favorite/favorite.module').then(m => m.FavoriteModule),
                data: { title: 'Favorites' }
              }
            ]
          },
          {
            path: '**',
            canActivate: [WildcardGuard],
            children: []
          }
        ]
      }
    ], {
      useHash: environment.hashRouting,
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
