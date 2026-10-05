import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { get } from 'lodash';
import { BatchSelectionService } from '@congacommerce/elements';

@Component({
  selector: 'app-main',
  standalone: false,
  template: `
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
      <apt-product-drawer *ngIf="showDrawer$ | async"></apt-product-drawer>
    </main>
  `,
  styles: [
    `
      main {
        min-height: calc(100vh - 108px);
        display: flex;
        flex-direction: column;
      }
      main > *:not(router-outlet) {
        flex: 1 1 auto !important;
        flex-direction: column;
        display: flex;
      }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit, OnDestroy {
  showDrawer$: Observable<boolean>;
  private subs: Array<any> = [];

  constructor(private batchSelectionService: BatchSelectionService) {}

  ngOnInit() {
    this.showDrawer$ = combineLatest([
      this.batchSelectionService.getSelectedProducts(),
      this.batchSelectionService.getSelectedLineItems()
    ]).pipe(map(([products, lineItems]) =>
      get(products, 'length', 0) > 0 || get(lineItems, 'length', 0) > 0
    ));
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

}
