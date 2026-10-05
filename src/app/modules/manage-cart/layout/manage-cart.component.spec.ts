import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { CartService, CartItemService, ConstraintRuleService } from '@congacommerce/ecommerce';
import { ManageCartComponent } from './manage-cart.component';

describe('ManageCartComponent', () => {
  let component: ManageCartComponent;
  let fixture: ComponentFixture<ManageCartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCartComponent ],
      imports: [ RouterTestingModule, TranslateModule.forRoot() ],
      providers: [
        { provide: CartService, useValue: { getMyCart: () => of(null) } },
        { provide: CartItemService, useValue: {} },
        { provide: ConstraintRuleService, useValue: { getRecommendationsForCart: () => of([]) } },
        { provide: 'configuration', useValue: {} }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
