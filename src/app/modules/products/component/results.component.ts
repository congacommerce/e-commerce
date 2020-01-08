import { Component, OnChanges, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'pl-results',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="border p-2 d-flex align-items-center justify-content-between" *ngIf="recordCount > 0">
      <div>
        {{showRecordsCountMessage}}
        <span class="d-none d-md-inline" *ngIf="query"> for your search of&nbsp;<strong>{{query}}</strong></span>
      </div>

      <div class="d-flex align-items-center">
        <div class="input-group input-group-sm mr-3">
          <div class="input-group-prepend">
            <label class="input-group-text" for="sort">{{'PRODUCT_LIST.SHOW' | translate}}</label>
          </div>
          <select class="custom-select custom-select-sm" id="size" [(ngModel)]="limit" name="limit" (change)="onPageSizeChange.emit($event.target.value)">
            <option value="4">4</option>
            <option value="12">12</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>

        <div class="input-group input-group-sm mr-3">
          <div class="input-group-prepend">
            <label class="input-group-text" for="sort">{{'PRODUCT_LIST.SORT_BY' | translate}}</label>
          </div>
          <select class="custom-select custom-select-sm" id="sort" (change)="onSortChange.emit($event.target.value)">
            <option>{{'PRODUCT_LIST.SORT_BY_RELEVANCE' | translate}}</option>
            <option [value]="'Name'">{{'COMMON.NAME' | translate}}</option>
          </select>
        </div>
        <a href="javascript:void(0)"
            class="btn btn-link btn-sm p-0 move-down"
            [class.disabled]="view == 'grid'"
            [attr.disabled]="view == 'grid'"
            (click)="onViewChange.emit('grid')">
          <span class="oi oi-grid-two-up"></span>
        </a>
        <a href="javascript:void(0)"
            class="btn btn-link btn-sm py-0"
            [class.disabled]="view == 'list'"
            [attr.disabled]="view == 'list'"
            (click)="onViewChange.emit('list')">
          <span class="oi oi-list"></span>
        </a>
      </div>
    </div>
  `,
  styles : [`
    :host{
      font-size: smaller;
    }
    .move-down{
      margin-top: 1px;
    }
  `]
})
export class ResultsComponent implements OnChanges{
  @Input() recordCount: number;
  @Input() limit: number = 12;
  @Input() offset: number = 0;
  @Input() page: number = 1;
  @Input() view: 'grid' | 'list';
  @Input() query: string;

  @Output() onViewChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() onSortChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() onPageSizeChange: EventEmitter<string> = new EventEmitter<string>();

  showRecordsCountMessage: string = '';

  constructor(private translateService: TranslateService) {}

  ngOnChanges() {
    this.prepareRecordsCountMessage();
  }

  get totalRecords(): string{
    if(this.recordCount > 2000)
      return '2000+';
    else if(this.recordCount)
      return this.recordCount.toString();
  }

  get lastResult(){
    return ((this.limit * this.page) >= this.recordCount) ? this.recordCount : (this.limit * this.page);
  }

  prepareRecordsCountMessage() {
    this.translateService.stream('PRODUCT_LIST.SHOW_COUNT_OF_RECORDS_MESSAGE', { minVal: this.recordCount > 0 ? this.offset + 1 : 0, maxVal: this.lastResult, totalVal: this.totalRecords })
      .subscribe((message: string) => {
        this.showRecordsCountMessage = message;
    });
  }
}