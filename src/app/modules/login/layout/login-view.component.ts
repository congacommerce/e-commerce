import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExceptionService } from '@congacommerce/elements';
import * as _ from 'lodash';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-view',
  standalone: false,
  template: `
    <div class="container d-flex align-items-center justify-content-center">
        <apt-login-form class="d-block w-50" type="OAuth"></apt-login-form>
    </div>
  `,
  styles: [`
      .container{
          height: 90vh;
      }
    `]
})
export class LoginViewComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private exceptionService: ExceptionService) { }

  ngOnInit() {
    this.subscription = this.route.queryParams.subscribe(params => {
      if (!_.isNil(_.get(params, 'errorMessage'))) {
        this.exceptionService.showError(params.errorMessage);
      }
    });
  }

  ngOnDestroy() {
    if (!_.isNil(this.subscription))
      this.subscription.unsubscribe();
  }

}
