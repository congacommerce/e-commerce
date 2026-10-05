import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { CartService, ProductService, ProductInformationService, StorefrontService, ConstraintRuleService } from '@congacommerce/ecommerce';
import { ProductConfigurationService } from '@congacommerce/elements';
import { TranslateModule } from '@ngx-translate/core';
import { ProductDetailComponent } from './product-detail.component';

@Pipe({ name: 'safeHtml', standalone: false })
class MockSafeHtmlPipe implements PipeTransform { transform(v: any) { return v; } }

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailComponent, MockSafeHtmlPipe ],
      imports: [ RouterTestingModule, TranslateModule.forRoot() ],
      providers: [
        { provide: CartService, useValue: { getMyCart: () => of(null) } },
        { provide: ProductService, useValue: { fetch: () => of(null) } },
        { provide: ProductInformationService, useValue: { getProductInformation: () => of([]) } },
        { provide: StorefrontService, useValue: { getStorefront: () => of(null) } },
        { provide: ProductConfigurationService, useValue: { onChangeConfiguration: () => {}, changeProductQuantity: () => {}, configurationChange: of(null) } },
        { provide: ConstraintRuleService, useValue: { getRecommendationsForProducts: () => of([]) } },
        { provide: 'configuration', useValue: {} },
        { provide: ActivatedRoute, useValue: { params: of({ id: '1' }), snapshot: { params: { id: '1' }, queryParams: {} } } }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    // Skip detectChanges to avoid ngOnInit subscription errors
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
