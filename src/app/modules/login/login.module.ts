import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginViewComponent } from './layout/login-view.component';
import { LoginFormModule } from '@congacommerce/elements';
import { LogoutViewComponent } from './layout/logout-view.component';


@NgModule({
  declarations: [LoginViewComponent, LogoutViewComponent],
  imports: [
    CommonModule,
    RouterModule,
    LoginRoutingModule,
    LoginFormModule,
    TranslateModule
  ]
})
export class LoginModule { }
